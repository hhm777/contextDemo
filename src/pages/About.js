import React from "react";
import {Switch, Link, Route, useRouteMatch } from "react-router-dom";
import Category from "./about/Category";
import Author from "./about/Author";

const About = function (props){
  const {path} = useRouteMatch();
  return (
    <div>About
      <nav>
        <Link to={`${path}/`}>category</Link>
        <Link to={`${path}/author`}>author</Link>
      </nav>
      <Switch>
        <Route exact path={`${path}/`} component={Category}/>
        <Route exact path={`${path}/author`} component={Author}/>
      </Switch>
    </div>
  )
}
export default About;
