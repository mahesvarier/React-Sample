import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursePage from "./CoursePage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/courses" component={CoursePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/course/:slug" component={ManageCoursePage}></Route>
        <Route path="/course" component={ManageCoursePage}></Route>
        <Redirect from="/about-page" to="/about"></Redirect>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
