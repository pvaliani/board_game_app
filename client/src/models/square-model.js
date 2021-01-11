import { squareStyle } from "../gridSpecs/grid-specs";

class Square {
    constructor(location, hasPiece) {
        this.location = location; // object of coordinates
        this.piece = hasPiece && {
            location: this.location,
            userTitle: this.pieceBelongsToUser(), // 'user1' or 'user2'
            legalMoves: [],
            basicLegalMoves: []
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
        // checking if there is an opponent in current's square neighbours
        const opponents = neighbourSquares.filter(square => {
            return square.piece && square.piece.userTitle !== this.piece.userTitle
        });
        console.log(this, 'square-model.js', 'line: ', '33');
        console.log(opponents, 'square-model.js', 'line: ', '34');

        const capturingMoves = [];
        opponents.forEach(opponentSq => {
            const captureOptionArray = opponentSq.piece.basicLegalMoves.filter(legalMove => legalMove.location.column !== this.location.column && legalMove.location.row !== this.location.row);
            if (captureOptionArray.length) {
                capturingMoves.push(captureOptionArray[0]);
            }
            console.log(captureOptionArray, 'square-model.js', 'line: ', '38');
        });
        console.log(capturingMoves, 'square-model.js', 'line: ', '44');
        const basicLegalMoves = neighbourSquares.filter(square => !square.piece);
        const legalMoves = [...basicLegalMoves, ...capturingMoves];
        this.piece.legalMoves = legalMoves;
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