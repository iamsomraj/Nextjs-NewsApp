import styles from "../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Web Development</span> News
      </h1>
      <p className={styles.description}>
        Keep yourself up to date with all the web dev news around the world
      </p>
    </div>
  );
};

export default Header;
