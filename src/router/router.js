import {Router, Switch, Route, Redirect, Link} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Lost from "../pages/404";
import Children from "../pages/Children";
import React from "react";
const history = createBrowserHistory();

const DefaultRouter = function () {
  console.log(history)
  return (
    <Router history={history}>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/about" render={() => <About/>}/>
        <Route exact path="/children/:id" component={Children}/>
        <Route exact path="/lost" component={Lost}/>
      </Switch>
    </Router>
  )
}
export default DefaultRouter;
