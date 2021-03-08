import { NextApiRequest, NextApiResponse } from "next";
import { articles } from "../../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const foundArticle = articles.find((post) => post.id === req.query.id);
  console.log(req.query.id);

  if (foundArticle) {
    res.status(200).json(foundArticle);
  } else {
    res
      .status(404)
      .json({ message: `Article with id ${req.query.id} not found` });
  }
};
