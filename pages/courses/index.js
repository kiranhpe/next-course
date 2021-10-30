import axios from "axios";
import { useEffect, useState } from "react";
import { CourseList } from "../../components/course-list";

const CoursesPage = () => {
  const [courses, setCourses] = useState(null);
  const [authors, setAuthors] = useState(null);
  useEffect(() => {
    axios.get("/api/courses").then(({ data }) => {
      setCourses(data);
    });
    axios.get("/api/authors").then(({ data }) => {
      setAuthors(data);
    });
  },[]);

  return (
    <div>
      <title>Next Courses</title>
      {courses  && (<CourseList courses={courses} authors={authors} />)}
    </div>
  );
};

export default CoursesPage;
