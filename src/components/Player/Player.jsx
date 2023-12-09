/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Player.module.css";

function Player({ playername, playerSymbol, isActive, handleChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(playername);

  function handleEdit() {
    setIsEditing((edit) => !edit);
    if (isEditing) {
      handleChangeName(playerSymbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={`${styles.player} ${isActive ? "active" : ""}`}>
      <div>
        {isEditing ? (
          <input type="text" onChange={handleChange} />
        ) : (
          <span className={styles.playerName}>{playerName}</span>
        )}
        <span className={styles.playerSymbol}>{playerSymbol}</span>
      </div>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
