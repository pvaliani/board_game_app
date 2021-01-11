import { squareStyle } from "../gridSpecs/grid-specs";

class Square {
    constructor(location, hasPiece) {
        this.location = location; // object of coordinates
        this.piece = hasPiece && {
            location: this.location,
            userTitle: this.pieceBelongsToUser(), // 'user1' or 'user2'
            legalMoves: []
        };
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

    setPieceLegalMoves(grid) {
        const neighbourSquares = this.getNeighbourSquares(grid);
        const legalMoves = neighbourSquares.filter(square => !square.piece);
        this.piece.legalMoves = legalMoves;
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