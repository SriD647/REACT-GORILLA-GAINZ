// Logo.js
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <img className={styles.logo} src="gorilla.jpg" alt="logo" />
    </div>
  );
}
