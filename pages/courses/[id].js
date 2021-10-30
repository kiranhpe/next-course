import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Course } from "../../components/course";
import { ReviewList } from "../../components/review-list";
import { LinkButton } from "../../ui-kit/link-button";

export const CourseDetails = () => {
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [reviews, setReviews] = useState([]);
  const id = router.query.id;

  useEffect(() => {
    if(id) {
      axios.get(`/api/courses/${id}`)
        .then(res => {
          setCourse(res.data);
        })
        .catch(err => {
          console.log(err);
        });

      axios.get(`/api/courses/${id}/reviews`)
        .then(res => {
          setReviews(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div>
      {course && <Course course={course} isAdvancedPage={true} />}
      {reviews.length > 0 && (
        <div>
          <h3>Reviews</h3>
          <ReviewList reviews={reviews} />
        </div>
      )}

      <div className="back">
        <LinkButton href="/" text="Back">
          <FaArrowLeft />
        </LinkButton>
      </div>
    </div>
  );
};

export default CourseDetails;
