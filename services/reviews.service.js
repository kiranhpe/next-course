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
  {
    id: 11,
    courseId: 4,
    userId: 1,
    rating: 5,
    comment: "Best course ever",
    createdAt: "2019-01-11",
  },
  {
    id: 12,
    courseId: 4,
    userId: 2,
    rating: 4,
    comment: "Good course",
    createdAt: "2019-01-12",
  },
  {
    id: 13,
    courseId: 4,
    userId: 3,
    rating: 3,
    comment: "Could be better",
    createdAt: "2019-01-13",
  },
  {
    id: 14,
    courseId: 4,
    userId: 4,
    rating: 2,
    comment: "Bad course",
    createdAt: "2019-01-14",
  },
  {
    id: 15,
    courseId: 4,
    userId: 5,
    rating: 1,
    comment: "Worst course ever",
    createdAt: "2019-01-15",
  },
  {
    id: 16,
    courseId: 4,
    userId: 1,
    rating: 5,
    comment: "Best course ever",
    createdAt: "2019-01-16",
  },
  {
    id: 17,
    courseId: 4,
    userId: 2,
    rating: 4,
    comment: "Good course",
    createdAt: "2019-01-17",
  },
  {
    id: 18,
    courseId: 4,
    userId: 3,
    rating: 3,
    comment: "Could be better",
    createdAt: "2019-01-18",
  },
  {
    id: 19,
    courseId: 5,
    userId: 4,
    rating: 2,
    comment: "Bad course",
    createdAt: "2019-01-19",
  },
  {
    id: 20,
    courseId: 5,
    userId: 5,
    rating: 1,
    comment: "Worst course ever",
    createdAt: "2019-01-20",
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
