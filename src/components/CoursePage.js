import React, { useState, useEffect } from "react";
import { getCourses } from "./../api/courseApi";

function CoursePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  function renderRow(course) {
    return (
      <tr key={course.id}>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
        <tbody>{courses.map(renderRow)}</tbody>
      </table>
    </>
  );
}

export default CoursePage;
