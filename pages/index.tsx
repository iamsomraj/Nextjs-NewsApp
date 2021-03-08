import Head from "next/head";
import axios from "axios";
import { GetStaticProps } from "next";
import ArticleList from "../components/ArticleList";
import { ArticleType } from "../types/Article";

const Home: React.FC<{ articles: ArticleType[] }> = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  return {
    props: {
      articles: data,
    },
  };
};
