import React from "react";
import Rating from "react-rating";
import { Card } from "../ui-kit/card";
import styles from "./review.module.scss";

export const Review = ({ review }) => {
  return (
    <Card>
      <div className={styles.reviewContainer}> 
      <h4>{review.user.name}</h4>
      <Rating initialRating={review.rating} readonly />
      <p className={styles.comment}>{review.comment}</p>
      <p className={styles.createdAt}>{review.createdAt}</p>
      </div>
    </Card>
  );
};
