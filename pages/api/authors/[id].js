import { getAuthorByID } from "../../../services/authors.service";

export default function handler(req, res) {
    res.status(200).json(getAuthorByID(+req.query.id));
  }
  