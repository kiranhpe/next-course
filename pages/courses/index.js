import { useEffect, useState } from "react";
import { CourseList } from "../../components/course-list";
import { getCourses } from "../../mock-data.service";

const CoursesPage = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setCourses(getCourses());
  },[]);

  return (
    <div>
      <title>Next Courses</title>
      {courses  && (<CourseList courses={courses} />)}
    </div>
  );
};

export default CoursesPage;
