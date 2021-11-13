import axios from "axios";
import { useEffect, useState } from "react";
import { CourseList } from "../../components/course-list";
import { InputText } from "../../ui-kit/input-text";
import { Spinner } from "../../ui-kit/spinner";

const CoursesPage = () => {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllCourses();
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === "") getAllCourses();
    else getCoursesByName(e.target.value);
  };

  const getCoursesByName = (name) => {
    setIsLoading(true);
    console.log()
    axios.get(`/api/courses/search/${name}`).then(({ data }) => {
     setIsLoading(false);
      setCourses(data);
    });
  };

  const getAllCourses = () => {
    setIsLoading(true);
    axios.get("/api/courses").then(({ data }) => {
      setIsLoading(false);
      setCourses(data);
    });
  };
  
  return (
    <div>
      <title>Next Courses</title>
      <Spinner isLoading={isLoading} type={'bubble'}/>
      <InputText
        placeholder="Search for course"
        onTextChange={(event) => handleSearch(event)}
      />
      {courses && <CourseList courses={courses} />}
    </div>
  );
};

export default CoursesPage;
