import Square from './square-model';

class GridClass {
    constructor(rows, columns) {
        this.columns = columns;
        this.rows = rows;
        this.gridState = null;
    }


    initialiseState() {
        /* 
            This function initialises the state of the grid. The initial state
            is when all the pieces are on their appropriate squares.
        */
        const grid = this.rows.map(row => {
            return this.columns.map(column => {
                // decide if that square (i.e., combination column, row) has a piece
                if (this._hasPieceInitialState({ column, row })) {
                    return new Square({ column, row }, true);
                } else {
                    return new Square({ column, row }, false);
                }
            });
        });
        this.gridState = grid;
        // after we have initialised the grid, we set the legal moves
        // for each and every piece.
        this.callPieceLegalMoves();
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

    callPieceLegalMoves() {
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
                    square.setPieceLegalMoves(this.gridState);
                }
            }
        }
    }
};



export default GridClass;