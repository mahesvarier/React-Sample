import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import * as courseAPI from "../api/courseApi";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value,
    };
    console.log(updatedCourse);
    setCourse(updatedCourse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    courseAPI.saveCourse(course);
  }

  return (
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Are you sure you want to leave /?"></Prompt>
      <CourseForm
        course={course}
        onTitleChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
