import './Grid.css';
import { squareColor } from '../../utils/squareColor';
import { rows, columns, squareStyle, rowStyle, gridStyle } from '../../gridSpecs/grid-specs';
import GridClass from '../../models/grid-model';
import { useEffect, useState } from 'react';
// import useSound hook and the board sound sample
import useSound from 'use-sound';
import BoardSoundPiece from '../../sounds/selectpiece.mp3';
import BoardSoundMove from '../../sounds/move.mp3';
import { increaseWinOrLosses } from '../../services/user-services';
import { pieceAsJSX } from '../../utils/pieceAsJSX';
import { useLocation } from 'react-router-dom';

const swapPlayers = {
    user1: 'user2',
    user2: 'user1'
};
let gridInstance;
const Grid = ({ onSetUserScores, resetState, setResetState }) => {
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [selectedPiece, setSelectedPiece] = useState({});
    const [winner, setWinner] = useState({});
    const [playPieceSound] = useSound(BoardSoundPiece);
    const [playMoveSound] = useSound(BoardSoundMove);
    const [playerStats, setPlayerStats] = useState();
    const usersObj = useLocation().state;

    useEffect(() => {
        gridInstance = new GridClass(rows, columns);
        gridInstance.initialiseState();
        gridInstance.addUserNames(usersObj['user1'].userName, usersObj['user2'].userName);
        setCurrentPlayer('user1'); // triggers another cycle
    }, []);

    useEffect(() => {
        gridInstance.initialiseState();
        setCurrentPlayer('user1');
        setResetState('false');
        gridInstance.addUserNames(usersObj['user1'].userName, usersObj['user2'].userName);

        onSetUserScores({ ...gridInstance.captures });

    }, [resetState])

    const playAgainHandler = () => {
        setWinner({});
        setResetState('true');
    };

    const selectMoveHandler = targetSquare => {
        playMoveSound();  // Play the board sound after a move is performed

        gridInstance.movePiece(targetSquare, selectedPiece);
        onSetUserScores({ ...gridInstance.captures });
        setSelectedPiece('');

        if (gridInstance.captures.user1.score === 12 || gridInstance.captures.user2.score === 12) {
            // TODO: increment back end
            increaseWinOrLosses(usersObj[currentPlayer].userName, 'wins', usersObj[currentPlayer].wins + 1);
            increaseWinOrLosses(usersObj[swapPlayers[currentPlayer]].userName, 'losses', usersObj[currentPlayer].losses + 1);

            // front end increase
            return setWinner(usersObj[currentPlayer]);
        }
        setCurrentPlayer(swapPlayers[currentPlayer]);
    };

    const selectPieceHandler = piece => {
        /* 
            This function is being called each time a player
            clicks on one of their pieces. If the clicked piece
            is already selected (the following if statement)
            then we de-select it, otherwise, we select it.
        */


        playPieceSound(); // Play the board sound when selecting a piece


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
            <p className="user1-name">{usersObj['user1'].userName}</p>
            {gridJSX}
            {!!Object.keys(winner).length && <div className="winner-announcement">
                🥳 Winner is {winner.userName} 🥳
                <div className="play-again-btn" onClick={playAgainHandler}>
                    Play again!
                </div>
            </div>}
            <p className="user2-name">{usersObj['user2'].userName}</p>
        </div>
    );
};

export default Grid;