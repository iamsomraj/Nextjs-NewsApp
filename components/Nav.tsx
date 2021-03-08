import styles from "../styles/Nav.module.css";
import Link from "next/Link";

const Nav: React.FC = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
