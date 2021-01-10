export const rows = [...Array(8).keys()]; // [0, 1...7]
export const columns = [...Array(8).keys()]; // [0, 1...7]

const sqWidth = 80;
const sqHeight = 80;

export const squareStyle = {
    width: sqWidth,
    height: sqHeight,
};

export const rowStyle = {
    heihgt: sqHeight,
    width: sqWidth * columns.length
};

export const gridStyle = {
    height: sqHeight * rows.length,
    width: sqWidth * columns.length
};