import Piece from './piece-model';

class GridClass {
    constructor(rows, columns) {
        this.columns = columns;
        this.rows = rows;
        this.initialState = null;
    }


    initialiseState () {
        const grid = this.rows.map(row => {
            return this.columns.map(column => {
                // decide if that square (i.e., combination column, row) has a piece
                if (this._hasPiece({ column, row })) {
                    return new Piece({ column, row });
                } else {
                    return null; // don't return a piece
                }
            });
        });
        this.initialState = grid;
    }

    _hasPiece (location) {
        if ((location.column % 2 !== 0) && (location.row % 2 === 0) && (location.row < 3 || location.row > 4)) {
            return true;
        }
        if ((location.column % 2 === 0) && (location.row % 2 !== 0) && (location.row < 3 || location.row > 4)) {
            return true;
        }
        return false;
    }
};



export default GridClass;