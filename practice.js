var chessMove = [
    {
        kingmove:'your king is in danger ',
        knightmove:'defend the king',
    }
];
var blackMove = [
    {
        whiteKing = 'step aside',
        whiteKnight = 'its  a terror in my heart',
    },
    {
        blackKing = 'step aside',
        blackKnight = 'its  a terror in my heart',
    },
];
var whitePrompt= prompt('make a move');
var blackPrompt= prompt('you win');
function yourTurn(white, black){
    if (white===chessMove[0].kingmove||black===chessMove[0].knightmove) {
		alert("give way ");
        } else if (white===blackMove[1].blackKnight && black!==blackMove[0].whiteKing) {
		alert("resign");
	} else  {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
}