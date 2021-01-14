import './CheckerBoard.css';
import Grid from '../Grid/Grid'
import GridMulti from '../GridMulti/GridMulti';

const CheckerBoard = ({ type, onSetUserScores, resetState, setResetState, setPlayerStats, setReadyToPlay, readyToPlay  }) => {
    if(type === 'locally') {
        setReadyToPlay(true);
    }
    
    return (
        <section className="checker-board-section">
            {type === 'locally' ? <Grid
                setPlayerStats={setPlayerStats}
                onSetUserScores={onSetUserScores}
                resetState={resetState}
                setResetState={setResetState}
            /> : <GridMulti
                    setReadyToPlay={setReadyToPlay}
                    readyToPlay={readyToPlay}
                    setPlayerStats={setPlayerStats}
                    onSetUserScores={onSetUserScores}
                    resetState={resetState}
                    setResetState={setResetState}
                />}
        </section>
    );
};

export default CheckerBoard;