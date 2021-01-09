import './Grid.css';
import { squareColor } from '../../utils/squareColor';

const rows = [...Array(8).keys()]; // [0, 1...7]
const columns = [...Array(8).keys()]; // [0, 1...7]

const Grid = () => {

    const gridJSX = rows.map(row => {
        return (
            <div className="row">
                {columns.map(column => {
                    const sqColorClass = squareColor(column, row);
                    return <div className={`square ${sqColorClass}`}>{row}, {column}</div>;
                })}
            </div>)
    });


    return (
        <div className="grid">
            {gridJSX}
        </div>
    );
};

export default Grid;