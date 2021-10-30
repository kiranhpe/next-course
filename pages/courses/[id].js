import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Course } from "../../components/course";
import { ReviewList } from "../../components/review-list";
import { AccordianCard } from "../../ui-kit/accordian-card";
import { LinkButton } from "../../ui-kit/link-button";

export const CourseDetails = () => {
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [topicSections, setTopicSections] = useState([]);

  const id = router.query.id;

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/courses/${id}/reviews`)
        .then((res) => {
          setReviews(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(`/api/courses/${id}/topics`)
        .then((res) => {
          setCourse(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleTopicsClick = (topic) => {
    axios
      .get(`/api/courses/${course.courseId}/topics/${topic.topicId}`)
      .then((res) => {
        setTopicSections(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {course && <Course course={course} isAdvancedPage={true} />}
      {course?.topics &&
        course?.topics.length > 0 &&
        course?.topics.map((topic) => (
          <AccordianCard
            title={topic.name}
            key={topic.topicId}
            handleExpand={handleTopicsClick}
            extraData={topic}
          >
            {topicSections.length > 0 &&
              topicSections.map((section) => (
                <div key={section.sectionId}>
                  <h3>{section.name}</h3>
                </div>
              ))}
          </AccordianCard>
        ))}
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
