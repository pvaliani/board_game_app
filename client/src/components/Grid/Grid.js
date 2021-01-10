import './Grid.css';
import { squareColor } from '../../utils/squareColor';
import { rows, columns, squareStyle, rowStyle, gridStyle } from '../../gridSpecs/grid-specs';
import GridClass from '../../models/grid-model';
import { useEffect, useState } from 'react';

let gridInstance;
const Grid = () => {
    const [round, setRound] = useState(0);

    useEffect(() => {
        gridInstance = new GridClass(columns, rows);
        gridInstance.initialiseState();
        setRound(round + 1); // triggers another cycle
        console.table(gridInstance.state);
    }, []);

    const gridJSX = columns.map(column => {
        /* 
            This function creates the grid. The grid is a 
            columns.length x rows.length array of jsx divisions.
            To create this grid, we use 2 nested map loops. 
            The inner loop is responsible for the columns (individual squares).
            The outter loop is responsible for the rows.
            For the appearence (e.g., color) of the grid we use CSS.
        */
        return (
            <div key={column} className="row-grid" style={rowStyle}>
                {rows.map(row => {
                    // appearence logic goes here (square color / pieces color etc)
                    const sqColorClass = squareColor(column, row);
                    // double bank '!!' operator transforms the value on its right to boolean
                    const hasPiece = gridInstance && !!gridInstance.state[column][row];
                    console.log(hasPiece, 'Grid.js', 'line: ', '31');
                    return (
                        <div key={row} className={`square-grid ${sqColorClass}`} style={squareStyle}>
                            {hasPiece && <div className="piece"> </div> }
                        </div>
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