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
       if(piece.userTitle === currentPlayer) {
           const pieceClasses = isPieceSelectedClasses(piece, selectedPiece);
           pieceJSX = <div className={pieceClasses} onClick={() => selectPieceHandler(piece)} > </div>; 
        } else {
            pieceJSX = <div className="piece"> </div>; 
        }
    }
    return pieceJSX;
}