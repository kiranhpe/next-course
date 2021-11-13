import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Course } from "../../components/course";
import { ReviewList } from "../../components/review-list";
import { AccordianCard } from "../../ui-kit/accordian-card";
import { LinkButton } from "../../ui-kit/link-button";
import { Sections } from "../../ui-kit/sections";
import { Spinner } from "../../ui-kit/spinner";

export const CourseDetails = () => {
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [topics, setTopics] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [topicSections, setTopicSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const id = router.query.id;

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      Promise.all([
        axios.get(`/api/courses/${id}/reviews`),
        axios.get(`/api/courses/${id}`),
        axios.get(`/api/courses/${id}/topics`),
      ])
        .then(([reviewsResponse, courseResponse, topicsResponse]) => {
          setCourse(courseResponse.data);
          setReviews(reviewsResponse.data);
          setTopics(topicsResponse.data);
          setIsLoading(false);
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
      <Spinner isLoading={isLoading} />
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
