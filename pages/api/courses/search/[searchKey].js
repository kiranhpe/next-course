import { searchCoursesByName } from "../../../../services/course.service";
import { connectDB } from "../../../../services/db.service";

export default async function handler(req, res) {
  await connectDB()
    const searchKey =req.query.searchKey;
    res.status(200).json( await searchCoursesByName(searchKey));
  }
  
