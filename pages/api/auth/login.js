import * as jwt from "jsonwebtoken";
import { User } from "../../../models/user";
import { connectDB } from "../../../services/db.service";
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  await connectDB();

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      roles: user.roles,
      fname: user.firstName,
      lname: user.lastName,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.send(token);
}
