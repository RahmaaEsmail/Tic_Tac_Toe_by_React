/* eslint-disable react/prop-types */
// import { INITIAL_BOARD } from '../../assets/data/INITIAL_BOARD';
import styles from "./GameOver.module.css";

function GameOver({ winner, setGameTurn }) {
  function handleReset() {
    setGameTurn([]);
  }

  return (
    <div className={styles.gameOver}>
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s Draw</p>}
      <button onClick={handleReset}>Rematch</button>
    </div>
  );
}

export default GameOver;
