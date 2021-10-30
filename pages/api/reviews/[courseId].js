import { getCourseReviews, getCourseReviewsOrderByCreatedAt } from "../../../services/reviews.service";

export default function handler(req, res) {
    res.status(200).json(getCourseReviewsOrderByCreatedAt(+req.query.courseId));
  }
  