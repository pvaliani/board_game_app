import './Grid.css';


const rows = [...Array(8).keys()]; // [0, 1...7]
const columns = [...Array(8).keys()]; // [0, 1...7]

const Grid = () => {

    const gridJSX = rows.map(row => {
        return (
            <div className="row">
                {columns.map(column => {
                    return <div className="square">1</div>;
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