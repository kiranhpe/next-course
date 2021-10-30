import React from "react";
import { Card } from "../ui-kit/card";
import { LinkButton } from "../ui-kit/link-button";
import { FaStar } from "react-icons/fa";

import styles from "./course.module.scss";
import { getAuthorByID } from "../mock-data.service";
export const Course = ({ course, isAdvancedPage }) => {

  const getRatingStyles = (rating) => {
    if (rating < 3) return styles.ratingRed;
    if (rating < 4) return styles.ratingYellow;
    return styles.ratingGreen;
  };

  return (
    <Card>
      <title>{course.name}</title>
      <div className={styles.cardheader}>
        <h1>{course.name}</h1>
        {course.isTopRated && (
          <div className={styles.bestSeller}>
            <span>{course.isTopRated ? "Best Seller" : null}</span>
          </div>
        )}
        <span
          className={[
            ...[getRatingStyles(course.rating)],
            ...[styles.rating],
          ].join(" ")}
        >
          {course.rating} <FaStar />
        </span>
      </div>
      <p>{course.description}</p>
      <p className={styles.author}>{"- "+getAuthorByID(course.id).name}</p>
      {!isAdvancedPage && (
        <div className={styles.learnMore}>
          <LinkButton
            href={"/courses/" + course.id}
            text="Learn More..."
          ></LinkButton>
        </div>
      )}
    </Card>
  );
};
