import { getCourseById } from "../../../services/course.service";
import { getCourseReviewsOrderByCreatedAt } from "../../../services/reviews.service";
import {
  getSectionsForTopic,
  getTopicsForCourseId,
} from "../../../services/topics.service";

export default function handler(req, res) {
  const { slug } = req.query;

  const courseId = +slug[0];
  if (req.query.slug.length === 1) {
    res.status(200).json(getCourseById(courseId));
  } else if (slug[1] === "reviews") {
    res.status(200).json(getCourseReviewsOrderByCreatedAt(courseId));
  } else if (slug[1] === "topics") {
    if (slug.length === 3) {
      const topicId = +slug[2];
      res.status(200).json({topics:getSectionsForTopic(topicId)});
    } else {
      const course = getCourseById(courseId);
      res.status(200).json({topics:getTopicsForCourseId(courseId), ...course});
    }
  } else {
    res.status(404).json({
      message: "Not Found",
    });
  }
}
