import './CheckerBoard.css';
import Grid from '../Grid/Grid'
import GridMulti from '../GridMulti/GridMulti';

const CheckerBoard = ({ type, onSetUserScores }) => {

    return (
        <section className="checker-board-section">
            {type === 'locally' ? <Grid onSetUserScores={onSetUserScores}/> : <GridMulti />}
        </section>
    );
};

export default CheckerBoard;