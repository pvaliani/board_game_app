import './Grid.css';
import { squareColor } from '../../utils/squareColor';
import { rows, columns, squareStyle, rowStyle, gridStyle } from '../../gridSpecs/grid-specs';
import GridClass from '../../models/grid-model';
import { useEffect, useState } from 'react';
import { pieceAsJSX } from '../../utils/pieceAsJSX';
import Square from '../../models/square-model';

let gridInstance;
const Grid = ({ onSetUserScores, resetState, setResetState }) => {
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [selectedPiece, setSelectedPiece] = useState({});

    useEffect(() => {
        gridInstance = new GridClass(rows, columns);
        gridInstance.initialiseState();
        setCurrentPlayer('user1'); // triggers another cycle
        console.table(gridInstance.gridState);
    }, []);


    useEffect(() => { 
        gridInstance.initialiseState();
        setCurrentPlayer('user1');
        setResetState('false');
        gridInstance.captures = {
            user1: 0,
            user2: 0
        };
        onSetUserScores({ ...gridInstance.captures });
    }, [resetState])
      

    //Osh - double capture - currently when a piece has moved the active player changes and the selected peice state changes 
    //I need to stop both - so that after a capture move has occured, IF the selected piece has more legal capturing moves 
    //the active player and selected piece states do not changes
    //IF A USERS CAPTURES INCREASES BY 1 THEN ITS STILL THAT PLAYERS TURN


    const selectMoveHandler = targetSquare => {
        gridInstance.movePiece(targetSquare, selectedPiece);
        
        onSetUserScores({ ...gridInstance.captures });
        if (currentPlayer === 'user1') {
            setCurrentPlayer('user2'); // triggers another cycle
        } else {
            setCurrentPlayer('user1'); // triggers another cycle
        }
        setSelectedPiece('');
    };

    const selectPieceHandler = piece => {
        /* 
            This function is being called each time a player
            clicks on one of their pieces. If the clicked piece
            is already selected (the following if statement)
            then we de-select it, otherwise, we select it.
        */
        if (piece === selectedPiece) {
            return setSelectedPiece('');
        }
        setSelectedPiece(piece);
    };

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
            <div key={row} className="row-grid" style={rowStyle}>
                {columns.map(column => {
                    // appearence logic goes here (square color / pieces color etc)
                    const sqColorClass = squareColor(row, column);
                    // piece is defined only when gridInstance is defined
                    // when gridInstance is defined, then we get back a square from 
                    // the state of the grid. This square, can either hold a piece
                    // or be null.
                    const square = gridInstance && gridInstance.gridState[row][column];
                    // the following function contains all the logic related to the 
                    // JSX piece component (whether there is a piece, if it is selected and so on)
                    const pieceJSX = pieceAsJSX(square, currentPlayer, selectedPiece, selectPieceHandler);
                    let squareClasses = `square-grid ${sqColorClass}`;
                    let squareJSX = (
                        <div key={column} className={squareClasses} style={squareStyle}>
                            {pieceJSX}
                        </div>
                    );
                    if (Object.keys(selectedPiece).length && selectedPiece.legalMoves.includes(square)) {
                        // if we are here, we know 1) a piece is selected and, 2) THIS square
                        // is a legal move of the selected piece.
                        squareClasses += 'legal-square ';
                        squareJSX = (
                            <div key={column} className={squareClasses} style={squareStyle} onClick={() => selectMoveHandler(square)}>
                                {pieceJSX}
                            </div>
                        );
                    }

                    return (
                        squareJSX
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