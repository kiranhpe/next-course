import React from "react";
import { LinkButton } from "../ui-kit/link-button";
import styles from "./course.module.css";
export const Course = ({ course }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
        <h1>{course.name}</h1>
        {course.isTopRated && (
          <div className={styles.bestSeller}>
            <span>{course.isTopRated ? "Best Seller" : null}</span>
          </div>
        )}
        <span
          className={[
            ...[
              course.rating <= 2
                ? styles.poor
                : course.rating <= 3
                ? styles.average
                : styles.excellent,
            ],
            ...[styles.rating],
          ].join(" ")}
        >
          {course.rating}
        </span>
      </div>
      <p>{course.description}</p>
      <LinkButton href={'/courses/' + course.id} text="Learn More..."></LinkButton>
    </div>
  );
};
