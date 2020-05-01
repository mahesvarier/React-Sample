import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  courseApi.saveCourse(course).then((savedCourse) => {
    //   Hey dispatcher, gp tell all stores that an course is created
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}
