import { connectDB } from "../../../services/db.service";
import { getUsers } from "../../../services/users.service";

export default async function handler(req, res) {
    await connectDB();
    res.status(200).json(await getUsers());
}
  