import { addAuthor, getAuthors } from "../../../services/authors.service";
import { connectDB } from "../../../services/db.service";

export default async  function handler(req, res) {

  await connectDB();
  if(req.method === "GET") {
    res.status(200).json(getAuthors())
  }
  else if (req.method === "POST") {

    const { name, email } = req.body;

    if(!name || !email) {
      res.status(400).json({
        error: "Missing required fields"
      })
    }
    else {
      const newAuthor = {
        name,
        email
      }

    const author = await addAuthor(newAuthor);
    res.status(201).json(author)
    }
  }
}
  