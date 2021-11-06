import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Course } from "../../components/course";
import { ReviewList } from "../../components/review-list";
import { AccordianCard } from "../../ui-kit/accordian-card";
import { LinkButton } from "../../ui-kit/link-button";
import { Sections } from "../../ui-kit/sections";

export const CourseDetails = () => {
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [topics, setTopics] = useState([]);
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
        .get(`/api/courses/${id}`)
        .then((res) => {
          setCourse(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(`/api/courses/${id}/topics`)
        .then((res) => {
          const plainData = res.data;
          setTopics(plainData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleTopicsClick = (topic) => {
    axios
      .get(`/api/courses/${course.courseId}/topics/${topic._id}`)
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
      <div>
        <h3>Topics</h3>
        {topics.length > 0 &&
          topics.map((topic, index) => (
            <AccordianCard
              title={topic.name}
              key={index}
              handleExpand={handleTopicsClick}
              extraData={topic}
            >
              <p></p>
            </AccordianCard>
          ))}
      </div>

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
