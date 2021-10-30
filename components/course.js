import { Card } from "../ui-kit/card";
import { LinkButton } from "../ui-kit/link-button";
import { FaArrowRight, FaStar } from "react-icons/fa";

import styles from "./course.module.scss";
import Rating from "react-rating";

export const Course = ({ course, authors, isAdvancedPage }) => {
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
        <span className={[...[styles.rating]].join(" ")}>
          <span className={styles.desktopRating}>
            <Rating initialRating={course.rating} readonly />
          </span>
          <span className={styles.mobileRating}>
            {course.rating} <FaStar />
          </span>
        </span>
      </div>

      <div className={styles.courseDetails}>
        <div>
          <p>{course.description}</p>
          {course.category.split(",").map((catogory, index) => (
            <span className={styles.tags} key={catogory + "-" + index}>
              {catogory}
            </span>
          ))}
          <p className={styles.author}>
            {authors &&
              "- " + authors.find((x) => x.id === course.author)?.name}
          </p>
        </div>
        <div className={styles.linkButtonContainer}>
          {!isAdvancedPage && (
            <div className={styles.learnMore}>
              <LinkButton href={"/courses/" + course.id} text="Learn More">
                <FaArrowRight />
              </LinkButton>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
