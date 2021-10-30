import { getUserById } from "../../../services/users.service";

export default function handler(req, res) {
    res.status(200).json(getUserById(+req.query.id));
  }
  