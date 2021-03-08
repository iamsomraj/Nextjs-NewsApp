import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
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
