import { connectDB } from "../../../services/db.service";
import { isUserExists, register } from "../../../services/register.service";
const bcrypt = require("bcrypt");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password, passwordConfirm, firstName, lastName, roles } = req.body;
    const errors = [];
    if (!email) {
      errors.push("Email is required");
    }
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(email)) {
      errors.push("Email is invalid");
    }
    if (!password) {
      errors.push("Password is required");
    }
    if (password !== passwordConfirm) {
      errors.push("Passwords must match");
    }
    if (!firstName) {
      errors.push("First name is required");
    }
    if (!lastName) {
      errors.push("Last name is required");
    }
    if(roles.length === 0) {
        errors.push("You must select at least one role");
    }
    if (errors.length) {
      res.status(400).json({ errors });
    } else {

      const salt = 10;
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        roles,
        createdAt: new Date(),
      };

      await connectDB();
      const isUserAvailable = await isUserExists(email);
      if (isUserAvailable) {
        res
          .status(400)
          .json({ errors: [`User with email ${email} already exists`] });
      } else {
        await register(user);
        res.status(200).json({
          message: "User created successfully",
        });
      }
    }
  }
}

