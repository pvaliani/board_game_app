const GridClass = function (columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.initialState = null;


    this.initialiseState = function () {
        const grid = this.rows.map(row => {
            return this.columns.map(column => {
                return {location: [column, row],};
            });
        });
        this.initialState = grid;
    }

};



export default GridClass;