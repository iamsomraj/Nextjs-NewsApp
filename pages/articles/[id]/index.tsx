import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/Link";
import Meta from "../../../components/Meta";
import { server } from "../../../config/index";
import { ArticleType } from "../../../types/Article";

const article: React.FC<{ article: ArticleType }> = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const url =
    process.env.NODE_ENV !== "production"
      ? `${server}/api/articles/${context.params.id}`
      : `https://jsonplaceholder.typicode.com/posts/${context.params.id}`;

  const { data } = await axios.get(url);

  return {
    props: {
      article: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const url =
    process.env.NODE_ENV !== "production"
      ? `${server}/api/articles/`
      : `https://jsonplaceholder.typicode.com/posts`;

  const { data } = await axios.get(url);

  const ids = data.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
