export const squareColor = (col, row) => {

    let squareColor;
    
    if ((row % 2 === 0) && (col % 2 === 0) ) {
        squareColor = 'white';
    } else if ((row % 2 === 0) && (col % 2 !== 0) ) {
        squareColor = 'black'
    }

    if ((row % 2 !== 0) && (col % 2 === 0) ) {
        squareColor = 'black';
    } else if ((row % 2 !== 0) && (col % 2 !== 0) ) {
        squareColor = 'white';
    }


    return squareColor;
}