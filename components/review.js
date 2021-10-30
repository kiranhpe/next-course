import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Card } from "../ui-kit/card";
import { RatingStars } from "../ui-kit/rating-stars";
import styles from "./review.module.scss";

export const Review = ({ review }) => {
  return (
    <Card>
      <div className={styles.reviewContainer}> 
      <h4>{review.user.name}</h4>
      <RatingStars initialRating={review.rating} readonly={true}/>
      <p className={styles.comment}>{review.comment}</p>
      <p className={styles.createdAt}>{review.createdAt}</p>
      </div>
    </Card>
  );
};
