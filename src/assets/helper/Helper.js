import { INITIAL_BOARD } from "../data/INITIAL_BOARD";
import { WINNING_COMBINATIONS } from "../data/WINNING_COMBINATIONS";

export function derivedActivePlayer(gameTurn) {
        let activePlayer = "X";
      
        if (gameTurn.length > 0 && gameTurn[0].player === "X") {
          activePlayer = "O";
        }
        return activePlayer;
}

export function derivedWinnerPlayer(gameBoard,playersInfo) {
    let winner;
    for (const combinations of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
          gameBoard[combinations[0].row][combinations[0].column];
        const secondSquareSymbol =
          gameBoard[combinations[1].row][combinations[1].column];
        const thirdSquareSymbol =
          gameBoard[combinations[2].row][combinations[2].column];
    
        if (
          firstSquareSymbol &&
          firstSquareSymbol === secondSquareSymbol &&
          firstSquareSymbol === thirdSquareSymbol
        ) {
          winner = playersInfo[firstSquareSymbol];
        }
      }
    return winner
}

export function derivedGameBoard(gameTurn){
    let gameBoard = [...INITIAL_BOARD.map((board) => [...board])]
    for (const turn of gameTurn) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
      }
    return gameBoard
}