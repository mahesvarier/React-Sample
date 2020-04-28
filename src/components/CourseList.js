import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
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
    <table className="table">
      <tr>
        <th>Title</th>
        <th>Author ID</th>
        <th>Category</th>
      </tr>
      <tbody>{props.courses.map(renderRow)}</tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

CourseList.defaultProp = {
  courses: [],
};
export default CourseList;
