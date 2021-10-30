import { searchCoursesByName } from "../../../../services/course.service";

export default function handler(req, res) {
    const searchKey =req.query.searchKey;
    res.status(200).json(searchCoursesByName(searchKey));
  }
  
