import { squareStyle } from "../gridSpecs/grid-specs";

class Square {
    constructor(location, hasPiece, userTitle) {
        this.location = location; // object of coordinates
        this.piece = hasPiece && {
            location: this.location,
            userTitle: userTitle || this.pieceBelongsToUser(), // 'user1' or 'user2'
            capturingLegalMoves: [],
            basicLegalMoves: [],
            legalMoves: []
        };
    }

    mergeLegalMoves() {
        this.piece.legalMoves = [...this.piece.basicLegalMoves, ...this.piece.capturingLegalMoves];
    }

    pieceBelongsToUser() {
        /*
            This function decides to whom this 
            piece belongs to. If the current row
            is smaller than 3, then it belongs to
            'user1', otherwise 'user2'.
        */
        if (this.location.row < 3) {
            return 'user1';
        } else {
            return 'user2';
        }
    }

    setPieceCapturingLegalMoves(grid) {
        const neighbourSquares = this.getNeighbourSquares(grid);
        // checking if there is an opponent in current's square neighbours
        const opponents = neighbourSquares.filter(square => {
            return square.piece && square.piece.userTitle !== this.piece.userTitle
        });
    
        const capturingMoves = [];
        opponents.forEach(opponentSq => {
            const captureOptionArray = opponentSq.piece.basicLegalMoves.filter(legalMove => (legalMove.location.column !== this.location.column) && (legalMove.location.row !== this.location.row));
            if (captureOptionArray.length) {
                capturingMoves.push(captureOptionArray[0]);
            }
        });

        this.piece.capturingLegalMoves = capturingMoves;
    }

    setPieceBasicLegalMoves(grid) {
        const neighbourSquares = this.getNeighbourSquares(grid);
        const basicLegalMoves = neighbourSquares.filter(square => !square.piece);
        this.piece.basicLegalMoves = basicLegalMoves;
    }

    getNeighbourSquares(grid) {
        /* 
            This function gives back just the four possible neighbouring squares.
        */
        const neighbours = [
            grid[this.location.row - 1] && grid[this.location.row - 1][this.location.column - 1],
            grid[this.location.row + 1] && grid[this.location.row + 1][this.location.column + 1],
            grid[this.location.row + 1] && grid[this.location.row + 1][this.location.column - 1],
            grid[this.location.row - 1] && grid[this.location.row - 1][this.location.column + 1]
        ];
        return neighbours.filter(neighbour => neighbour);
    }

}


export default Square;