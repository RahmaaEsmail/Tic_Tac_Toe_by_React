/* eslint-disable react/prop-types */
import styles from "./GameBoard.module.css";

function GameBoard({ handleSelectSquare, gameBoard }) {
  return (
    <ol className={styles.gameBoard}>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
