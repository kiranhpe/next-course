import { getAuthors } from "../../../services/authors.service";

export default function handler(req, res) {
    res.status(200).json(getAuthors())
  }
  