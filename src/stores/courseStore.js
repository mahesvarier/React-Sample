import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  // Subscribe from store
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  //Unsubscribe from store
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCoursesBySlug(slug) {
    return _courses.find((courses) => courses.slug === slug);
  }
}

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    default:
    // Nothing to do
  }
});

const store = new CourseStore();
export default store;
