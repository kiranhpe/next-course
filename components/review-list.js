import React from "react";
import { Review } from "./review";

export const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((item, index) => {
        return <Review key={index} review={item} />;
      })}
    </div>
  );
};
