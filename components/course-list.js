import React from 'react'
import { Course } from './course'

export const CourseList = ({courses}) => {
    return (
       <>
       {courses.map((course,i) => (<Course course={course} key={i}></Course>))}
       </>
    )
}
