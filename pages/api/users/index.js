import { getUsers } from "../../../services/users.service";

export default function handler(req, res) {
    res.status(200).json(getUsers());
}
  