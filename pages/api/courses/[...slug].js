import { getCourseById } from "../../../services/course.service";
import { getCourseReviewsOrderByCreatedAt } from "../../../services/reviews.service";

export default function handler(req, res) {
  const { slug } = req.query;

  if (req.query.slug.length === 1) {
    res.status(200).json(getCourseById(+req.query.slug[0]));
  } else if (slug[1] === "reviews") {
    res.status(200).json(getCourseReviewsOrderByCreatedAt(+slug[0]));
  } else {
    res.status(404).json({
      message: "Not Found",
    });
  }
}
