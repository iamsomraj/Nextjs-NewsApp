import NextLink from "next/Link";
import { ArticleType } from "../types/Article";

const ArticleItem: React.FC<{ article: ArticleType }> = ({ article }) => {
  return (
    <NextLink href={`/articles/${article.id}`}>
      <a>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </NextLink>
  );
};

export default ArticleItem;
