import { getAuthorByID } from "../../../services/course.service";

export default function handler(req, res) {
    res.status(200).json(getAuthorByID(+req.query.id));
  }
  