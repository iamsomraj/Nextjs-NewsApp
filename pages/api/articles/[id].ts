import { NextApiRequest, NextApiResponse } from "next";
import { articles } from "../../../data";

export default ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
  const foundArticle = articles.find((post) => post.id === id);

  if (foundArticle) {
    res.status(200).json(foundArticle);
  } else {
    res
      .status(404)
      .json({ message: `Article with id ${id} not found` });
  }
};
