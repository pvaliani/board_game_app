import Piece from './piece-model';

const GridClass = function (columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.initialState = null;


    this.initialiseState = function () {
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

    this._hasPiece = function (location) {
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