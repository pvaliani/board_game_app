class Piece {
    constructor(location) {
        this.location = location; // object of coordinates
        this.userTitle = this.whichUser(); // 'user1' or 'user2'
        this.isTaken = false;
    }

    whichUser () {
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

    }

    getNeighbourSquares(grid) {
        return [
            grid[this.location.row -1] && grid[this.location.row - 1][this.location.column - 1],
            grid[this.location.row + 1] && grid[this.location.row + 1][this.location.column + 1],
            grid[this.location.row + 1] && grid[this.location.row + 1][this.location.column - 1],
            grid[this.location.row - 1] && grid[this.location.row - 1][this.location.column + 1]
        ];
    }

    



}


export default Piece;