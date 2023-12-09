import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import GameOver from "./components/GameOver/GameOver";
import Log from "./components/Log/Log";
import {
  derivedActivePlayer,
  derivedGameBoard,
  derivedWinnerPlayer,
} from "./assets/helper/Helper";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

function App() {
  const [playersInfo, setPlayersInfo] = useState(PLAYERS);
  const [gameTurn, setGameTurn] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurn);
  const gameBoard = derivedGameBoard(gameTurn);
  const winner = derivedWinnerPlayer(gameBoard, playersInfo);
  const hasDraw = gameTurn.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurn((turn) => {
      const currentPlayer = derivedActivePlayer(turn);
      const editedBoard = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...turn,
      ];
      return editedBoard;
    });
  }

  function handleChangeName(symbol, name) {
    setPlayersInfo((info) => ({ ...info, [symbol]: name }));
  }

  return (
    <div>
      <Header />
      <div className="game-container">
        <div className="players highlight-player">
          <Player
            playername={PLAYERS.X}
            playerSymbol="X"
            handleChangeName={handleChangeName}
            isActive={activePlayer === "X"}
          />
          <Player
            playername={PLAYERS.O}
            playerSymbol="O"
            handleChangeName={handleChangeName}
            isActive={activePlayer === "O"}
          />
        </div>
        {(winner || hasDraw) && (
          <GameOver winner={winner} setGameTurn={setGameTurn} />
        )}
        <GameBoard
          handleSelectSquare={handleSelectSquare}
          gameBoard={gameBoard}
        />
      </div>
      <Log gameTurn={gameTurn} />
    </div>
  );
}

export default App;
