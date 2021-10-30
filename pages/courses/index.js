import axios from "axios";
import { useEffect, useState } from "react";
import { CourseList } from "../../components/course-list";
import { InputText } from "../../ui-kit/input-text";

const CoursesPage = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    getAllCourses();
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === "") getAllCourses();
    else getCoursesByName(e.target.value);
  };

  const getCoursesByName = (name) => {
    axios.get(`/api/courses/search/${name}`).then(({ data }) => {
      setCourses(data);
    });
  };

  const getAllCourses = () => {
    axios.get("/api/courses").then(({ data }) => {
      setCourses(data);
    });
  };
  
  return (
    <div>
      <title>Next Courses</title>
      <InputText
        placeholder="Search for course"
        onTextChange={(event) => handleSearch(event)}
      />
      {courses && <CourseList courses={courses} />}
    </div>
  );
};

export default CoursesPage;
