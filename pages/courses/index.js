import React from 'react'
import { CourseList } from '../../components/course-list'
import { getCourses } from '../../mock-data.service';

const CoursesPage = () => {
  const allCourses = getCourses();

    return (
        <div>
        <CourseList courses={allCourses}></CourseList>
     </div>
    )
}


export default CoursesPage;