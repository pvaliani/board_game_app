import './CheckerBoard.css';
import Grid from '../Grid/Grid'
import GridMulti from '../GridMulti/GridMulti';

const CheckerBoard = ({ type }) => {

    return (
        <section className="checker-board-section">
            {type === 'locally' ? <Grid /> : <GridMulti />}
        </section>
    );
};

export default CheckerBoard;