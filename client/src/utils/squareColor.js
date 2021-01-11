export const squareColor = (col, row) => {

    let squareColor;
    
    if ((row % 2 === 0) && (col % 2 === 0) ) {
        squareColor = 'whiteSquare ';
    } else if ((row % 2 === 0) && (col % 2 !== 0) ) {
        squareColor = 'blackSquare '
    }

    if ((row % 2 !== 0) && (col % 2 === 0) ) {
        squareColor = 'blackSquare ';
    } else if ((row % 2 !== 0) && (col % 2 !== 0) ) {
        squareColor = 'whiteSquare ';
    }


    return squareColor;
}