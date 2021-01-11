const isPieceSelectedClasses = (currentPiece, selectedPiece) => {
    let pieceClasses = 'piece ';
    if (currentPiece === selectedPiece) {
        pieceClasses += 'selected-piece ';
    }
    return pieceClasses;
};

export const pieceAsJSX = (square, currentPlayer, selectedPiece, selectPieceHandler) => {
    let pieceJSX;
    if (square && square.piece) { // if the square is defined and has a piece on it
        /* 
        These if statements decide on wheather to display a
        piece or not. If yes, when 1) would that piece be
        clickable, 2) would it be selected (defined as an extra css className)
        */
        const piece = square.piece;
        // if piece.userTitle is equals to the player who's playing next
        // in that point, we know that the current piece belongs to 
        // the active player. So we also want to get access to this 
        // piece's legal moves (if any).
        console.log(piece.legalMoves, 'pieceAsJSX.js', 'line: ', '22');
        if (piece.userTitle === currentPlayer && piece.legalMoves.length) {
            const pieceClasses = isPieceSelectedClasses(piece, selectedPiece);
            pieceJSX = <div className={pieceClasses} onClick={() => selectPieceHandler(piece)} > </div>;
        } else {
            pieceJSX = <div className="piece"> </div>;
        }
    }
    return pieceJSX;
}