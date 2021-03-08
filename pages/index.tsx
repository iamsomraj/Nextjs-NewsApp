import Head from "next/head";
import axios from "axios";

const Home: React.FC<{ users: string[] }> = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Web Developer</title>
        <meta
          name="description"
          content="A simple blog post application written in typescript"
        />
        <meta
          name="keywords"
          content="web dev, web developer, news, react, next news"
        />
      </Head>
      <h1>Users</h1>
      <div>
        {users.map((user) => {
          return <p key={user}>{user}</p>;
        })}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users: string[] = data.map((user) => user.name);
  return {
    props: {
      users,
    },
  };
};
