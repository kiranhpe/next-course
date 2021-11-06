import { addCourse, getCourses } from "../../../services/course.service";
import { connectDB } from "../../../services/db.service";

export default async function handler(req, res) {
  await connectDB()
  if (req.method === "GET") {
    res.status(200).json( await getCourses());
  } else if (req.method === "POST") {
    const {
      name,
      category,
      description,
      duration,
      price,
      isTopRated,
      rating,
      students,
      previewVideoUrl,
      author,
    } = req.body;

    const course = {
      name,
      category,
      description,
      duration,
      price,
      isTopRated,
      rating,
      students,
      previewVideoUrl,
      author,
      date: new Date(),
    };

    res.status(201).json(await await addCourse(course));
  }
}
