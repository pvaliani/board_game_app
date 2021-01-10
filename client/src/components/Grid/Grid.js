import './Grid.css';
import { squareColor } from '../../utils/squareColor';
import { rows, columns, squareStyle, rowStyle, gridStyle } from '../../gridSpecs/grid-specs';
import GridClass from '../../models/grid-model';
import { useEffect } from 'react';

let gridInstance;
const Grid = () => {

    useEffect(() => {
        gridInstance = new GridClass(columns, rows);
        gridInstance.initialiseState();
    }, [])

    const gridJSX = rows.map(row => {
        /* 
            This function creates the grid. The grid is a 
            columns.length x rows.length array of jsx divisions.
            To create this grid, we use 2 nested map loops. 
            The inner loop is responsible for the columns (individual squares).
            The outter loop is responsible for the rows.
            For the appearence (e.g., color) of the grid we use CSS.
        */
        return (
            <div className="row-grid" style={rowStyle}>
                {columns.map(column => {
                    // appearence logic goes here (square color / pieces color etc)
                    const sqColorClass = squareColor(column, row);
                    return (
                        <div className={`square-grid ${sqColorClass}`} style={squareStyle}>{row}, {column}</div>
                    );
                })}
            </div>)
    });


    return (
        <div className="grid" style={gridStyle}>
            {gridJSX}
        </div>
    );
};

export default Grid;