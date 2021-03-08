import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
