import Square from './square-model';

class GridClass {
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.gridState = null;
    }

    movePiece(targetSquare, selectedPiece) {
        // swapping selected piece from its initial location with the target square location
        const targetSqColumn = targetSquare.location.column;
        const targetSqRow = targetSquare.location.row;
        const selectedPieceColumn = selectedPiece.location.column;
        const selectedPieceRow = selectedPiece.location.row;

        // deciding if we did a capturing move
        this.shouldCapturePiece(targetSquare, selectedPiece);

        this.gridState[targetSqRow][targetSqColumn].piece = { ...this.gridState[selectedPieceRow][selectedPieceColumn].piece };

        // altering selected (and now moved) piece location to the target square location
        this.gridState[targetSqRow][targetSqColumn].piece.location = targetSquare.location;

        // removing selected piece from initial location
        this.gridState[selectedPieceRow][selectedPieceColumn].piece = false;
        this.callPieceLegalMoves('basic');
        this.callPieceLegalMoves('capturing');
    }

    shouldCapturePiece(targetSquare, selectedPiece) {
        const selectedPieceColumn = selectedPiece.location.column;
        const selectedPieceRow = selectedPiece.location.row;
        const tgLoc = targetSquare.location;
        const slcPieceLoc = selectedPiece.location;
        const wasCapturingMove = Math.abs(tgLoc.column - slcPieceLoc.column) === 2 && Math.abs(tgLoc.row - slcPieceLoc.row) === 2;
        if (wasCapturingMove) {
            // if we did a capturing move, remove opponent
            // getting neighbours of target square
            const targSqNeighbours = targetSquare.getNeighbourSquares(this.gridState);
            const selectedPieceNeighbours = this.gridState[selectedPieceRow][selectedPieceColumn].getNeighbourSquares(this.gridState);
            const opponentSq = targSqNeighbours.filter(tgNeigh => selectedPieceNeighbours.includes(tgNeigh))[0];
            // remove that opponent
            this.gridState[opponentSq.location.row][opponentSq.location.column].piece = false;
        }
    }

    createState(grid) {
        const gridState = this.rows.map(row => {
            return this.columns.map(column => {
                // decide if that square (i.e., combination column, row) has a piece
                if (grid[row][column].piece) {
                    return new Square({ row, column }, true, grid[row][column].piece.userTitle);
                } else {
                    return new Square({ row, column }, false);
                }
            });
        });
        this.gridState = gridState;
        // after we have initialised the grid, we set the legal moves
        // for each and every piece.
        this.callPieceLegalMoves('basic');
        this.callPieceLegalMoves('capturing');
    }

    initialiseState() {
        /* 
            This function initialises the state of the grid. The initial state
            is when all the pieces are on their appropriate squares.
        */
        const grid = this.rows.map(row => {
            return this.columns.map(column => {
                // decide if that square (i.e., combination column, row) has a piece
                if (this._hasPieceInitialState({ row, column })) {
                    return new Square({ row, column }, true);
                } else {
                    return new Square({ row, column }, false);
                }
            });
        });
        this.gridState = grid;
        // after we have initialised the grid, we set the legal moves
        // for each and every piece.
        this.callPieceLegalMoves('basic');
        this.callPieceLegalMoves('capturing');
    }

    _hasPieceInitialState(location) {
        /* 
            Helper function to help us put the pieces on the correct square.
            There are two different patterns with regards to how the pieces display on the screen.
            These following if statements are responsible for these patterns.
        */
        if ((location.column % 2 !== 0) && (location.row % 2 === 0) && (location.row < 3 || location.row > 4)) {
            return true;
        }
        if ((location.column % 2 === 0) && (location.row % 2 !== 0) && (location.row < 3 || location.row > 4)) {
            return true;
        }
        return false;
    }

    callPieceLegalMoves(typeOfMove) {
        /* 
            This function has just two for loops
            which sole purpose is to extract out
            one square at a time (iteration).
            Then, if the square has a piece on it,
            we invoking the setPieceLaglMoves function
            which sets the piece's legal moves.
        */
        for (const row of this.gridState) {
            for (const square of row) {
                if (square.piece) {
                    if (typeOfMove === 'basic') {
                        square.setPieceBasicLegalMoves(this.gridState);
                    } else {
                        square.setPieceCapturingLegalMoves(this.gridState);
                        square.mergeLegalMoves();
                    }
                }
            }
        }
    }
};



export default GridClass;