import Link from "next/Link";
import { ArticleType } from "../types/Article";
import styles from "../styles/Article.module.css";

const ArticleItem: React.FC<{ article: ArticleType }> = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <a className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
