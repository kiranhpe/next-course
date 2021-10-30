import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Course } from "../../components/course";
import { LinkButton } from "../../ui-kit/link-button";

export const CourseDetails = () => {
  const router = useRouter();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const id = router.query.id;
    axios.get(`/api/courses/${id}`).then((res) => {
      setCourse(res.data);
    });
  }, []);
  
  return (
    <div>
      {course && <Course course={course} isAdvancedPage={true} />}
      <div className="back">
        <LinkButton href="/" text="Back">
          <FaArrowLeft />
        </LinkButton>
      </div>
    </div>
  );
};

export default CourseDetails;
