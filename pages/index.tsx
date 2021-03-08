import Head from "next/head";
import axios from "axios";
import { GetStaticProps } from "next";
import ArticleList from "../components/ArticleList";
import { ArticleType } from "../types/Article";
import { server } from "../config/index";

const Home: React.FC<{ articles: ArticleType[] }> = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {

  console.log(process.env.NODE_ENV );
  
  const url =
    process.env.NODE_ENV !== "production"
      ? `${server}/api/articles`
      : "https://jsonplaceholder.typicode.com/posts?_limit=10";
  const { data } = await axios.get(url);

  return {
    props: {
      articles: data,
    },
  };
};
