import { getUserById } from "./users.service";

const courseReviews = [
  {
    id: 1,
    courseId: 1,
    userId: 1,
    rating: 5,
    comment: "Best course ever",
    createdAt: "2019-01-01",
  },
  {
    id: 2,
    courseId: 1,
    userId: 2,
    rating: 4,
    comment: "Good course",
    createdAt: "2019-01-02",
  },
  {
    id: 3,
    courseId: 1,
    userId: 3,
    rating: 3,
    comment: "Could be better",
    createdAt: "2019-01-03",
  },
  {
    id: 4,
    courseId: 1,
    userId: 4,
    rating: 2,
    comment: "Bad course",
    createdAt: "2019-01-04",
  },
  {
    id: 5,
    courseId: 2,
    userId: 5,
    rating: 1,
    comment: "Worst course ever",
    createdAt: "2019-01-05",
  },
  {
    id: 6,
    courseId: 2,
    userId: 1,
    rating: 5,
    comment: "Best course ever",
    createdAt: "2019-01-06",
  },
  {
    id: 7,
    courseId: 2,
    userId: 2,
    rating: 4,
    comment: "Good course",
    createdAt: "2019-01-07",
  },
  {
    id: 8,
    courseId: 2,
    userId: 3,
    rating: 3,
    comment: "Could be better",
    createdAt: "2019-01-08",
  },
  {
    id: 9,
    courseId: 3,
    userId: 4,
    rating: 2,
    comment: "Bad course",
    createdAt: "2019-01-09",
  },
  {
    id: 10,
    courseId: 3,
    userId: 5,
    rating: 1,
    comment: "Worst course ever",
    createdAt: "2019-01-10",
  },
];

export const getCourseReviews = (courseId) => {
  return attachUserToReview(
    courseReviews.filter((review) => review.courseId === courseId)
  );
};

export const getUserReviews = (userId) => {
  return attachUserToReview(
    courseReviews.filter((review) => review.userId === userId)
  );
};

export const getCourseReviewsOrderByCreatedAt = (courseId) => {
  return attachUserToReview(
    courseReviews
      .filter((review) => review.courseId === courseId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  );
};

const attachUserToReview = (reviews) => {
  return reviews.map((review) => {
    return { ...review, user: getUserById(review.userId) };
  });
};
