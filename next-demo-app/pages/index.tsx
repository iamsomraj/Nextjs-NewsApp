import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Developer</title>
        <meta
          name="description"
          content="A simple blog post application written in typescript"
        />
      </Head>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
