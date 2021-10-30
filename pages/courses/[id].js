import { useRouter } from "next/dist/client/router";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Course } from "../../components/course";
import { getCourseById } from "../../mock-data.service";
import { LinkButton } from "../../ui-kit/link-button";

export const CourseDetails = () => {
  const router = useRouter();
  return (
    <div>
      {router.query["id"] && (
        <Course
          course={getCourseById(+router.query.id)}
          isAdvancedPage={true}
        />
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
