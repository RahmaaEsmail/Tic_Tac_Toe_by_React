/* eslint-disable react/prop-types */
import styles from "./Log.module.css";
function Log({ gameTurn }) {
  console.log(gameTurn);
  return (
    <ol className={styles.log}>
      {gameTurn.length > 0 &&
        gameTurn.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player}selected {turn.square.row},{turn.square.col}
          </li>
        ))}
    </ol>
  );
}

export default Log;
