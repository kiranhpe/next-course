import React from 'react'
import { Course } from './course'

export const CourseList = ({courses, authors}) => {
    return (
       <>
       {courses.map((course,i) => (<Course course={course} authors={authors} key={i}></Course>))}
       </>
    )
}
