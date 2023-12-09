import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <img src="public/game-logo.png" alt="logo" />
      <h1 className={styles.primaryHeading}>Tic-Tac-Toe</h1>
    </div>
  );
}

export default Header;
