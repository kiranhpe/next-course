import { useRouter } from "next/dist/client/router";
import React from "react";
import { Course } from "../../components/course";
import { getCourseById } from "../../mock-data.service";

export const CourseDetails = () => {
  const router = useRouter();
  return (
    <div>
      {router.query['id'] && (<Course course={getCourseById(+router.query.id)} isAdvancedPage={true} />)}
    </div>
  );
};

export default CourseDetails;
