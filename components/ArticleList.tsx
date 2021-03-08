import styles from "../styles/Article.module.css";
import { ArticleType } from "../types/Article";
import ArticleItem from "./ArticleItem";

const ArticleList: React.FC<{ articles: ArticleType[] }> = ({ articles }) => {
  return (
    <>
      <h1>Articles</h1>
      <div className={styles.grid}>
        {articles.map((article) => {
          return <ArticleItem key={article.id} article={article} />;
        })}
      </div>
    </>
  );
};

export default ArticleList;
