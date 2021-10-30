import { Card } from "../ui-kit/card";
import { LinkButton } from "../ui-kit/link-button";
import {
  FaArrowRight,
  FaPenNib,
  FaRegStar,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";

import styles from "./course.module.scss";
import Rating from "react-rating";
import ReactPlayer from "react-player";
import { RatingStars } from "../ui-kit/rating-stars";

export const Course = ({ course, isAdvancedPage }) => {
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
           <RatingStars readonly={true} initialRating={course.rating} />
          </span>
          <span className={styles.mobileRating}>
            {course.rating} <FaStar />
          </span>
        </span>
      </div>
      {isAdvancedPage && (
        <ReactPlayer url={course.previewVideoUrl} width="100%" />
      )}
      <p>{course.description}</p>

      <div className={styles.courseDetails}>
        <div>
          {course.category.split(",").map((catogory, index) => (
            <span className={styles.tags} key={catogory + "-" + index}>
              {catogory}
            </span>
          ))}
          <p className={styles.author}>
            <FaPenNib/>{course.author &&  course.authorName}
          </p>
          <p>
            <FaUserGraduate /> {course.students}
          </p>
        </div>
        <div className={styles.priceContainer}>
          {course.price && (
            <div className={styles.price}>
              <span>${course.price}</span>
            </div>
          )}
          <div className={styles.linkButtonContainer}>
            {!isAdvancedPage && (
              <div className={styles.learnMore}>
                <LinkButton
                  href={"/courses/" + course.courseId}
                  text="Learn More"
                >
                  <FaArrowRight />
                </LinkButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
