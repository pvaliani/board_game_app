import './Grid.css';
import { squareColor } from '../../utils/squareColor';
import { rows, columns, squareStyle, rowStyle, gridStyle } from '../../gridSpecs/grid-specs';
import GridClass from '../../models/grid-model';
import { useEffect, useState } from 'react';

let gridInstance;
const Grid = () => {
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [selectedPiece, setSelectedPiece] = useState({});

    useEffect(() => {
        gridInstance = new GridClass(columns, rows);
        gridInstance.initialiseState();
        setCurrentPlayer('user1'); // triggers another cycle
        console.table(gridInstance.gridState);
    }, []);


    const selectPieceHandler = piece => {
        if (piece === selectedPiece) {
            return setSelectedPiece('');
        }
        setSelectedPiece(piece);
    };

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
                    // piece is defined only when gridInstance is defined
                    // when gridInstance is defined, then we get back a square from 
                    // the state of the grid. This square, can either hold a piece
                    // or be null.
                    const square = gridInstance && gridInstance.gridState[column][row];
                    let pieceJSX;
                    if (square && typeof(square.hasPiece) === 'undefined') { // if the piece if defined 
                        const piece = square;
                        // if piece is defined then give me back the userTitle of that piece and compare it to the current player
                        if(piece.userTitle === currentPlayer) {
                            let pieceClasses = 'piece ';
                            if (piece === selectedPiece) {
                                pieceClasses += 'selected-piece ';
                            }
                            pieceJSX = <div className={pieceClasses} onClick={() => selectPieceHandler(piece)} > </div>; 
                        } else {
                            pieceJSX = <div className="piece"> </div>; 
                        }
                    }
                    
                    return (
                        <div key={row} className={`square-grid ${sqColorClass}`} style={squareStyle}>
                            {pieceJSX}
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