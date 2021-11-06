import { getCourseById } from "../../../services/course.service";
import { connectDB } from "../../../services/db.service";
import {
  addReview,
  getCourseReviewsOrderByCreatedAt,
} from "../../../services/reviews.service";
import {
  addSection,
  getSectionsForTopic,
} from "../../../services/sections.service";
import {
  addTopic,
  getTopicsForCourseId,
} from "../../../services/topics.service";

export default async function handler(req, res) {
  await connectDB();
  const { slug } = req.query;
  const courseId = slug[0];
  if (req.query.slug.length === 1) {
    res.status(200).json(await getCourseById(courseId));
  } else if (slug[1] === "reviews") {
    if (req.method === "GET") {
      res.status(200).json(await getCourseReviewsOrderByCreatedAt(courseId));
    } else if (req.method === "POST") {
      const { user, rating, comment } = req.body;
      const newReview = {
        user,
        course: courseId,
        rating,
        comment,
        createdAt: new Date(),
      };
      res.status(200).json(await addReview(newReview));
    }
  } else if (slug[1] === "topics") {
    if (slug.length === 3) {
      const topicId = slug[2];
      if (req.method === "GET") {
        res.status(200).json(await getSectionsForTopic(topicId));
      } else if (req.method === "POST") {
        const { name } = req.body;
        const newSection = {
          topic: topicId,
          name,
          createdAt: new Date(),
        };
        res.status(200).json(await addSection(newSection));
      }
    } else {
      if (req.method === "GET") {
        res.status(200).json(await getTopicsForCourseId(courseId));
      } else if (req.method === "POST") {
        const { name, description } = req.body;
        res
          .status(200)
          .json({ topics: await addTopic({ name, description, courseId }) });
      }
    }
  } else {
    res.status(404).json({
      message: "Not Found",
    });
  }
}
