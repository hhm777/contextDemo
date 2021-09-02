import {Switch, Link, Route, useRouteMatch } from "react-router-dom";

const About = function (props){
  const {path} = useRouteMatch();
  return (
    <div>About
      <nav>
        {
          props.children ? props.children.map(item =>(<div key={item.path}><Link to={`${path}${item.path}`}>{item.path}</Link></div>)) : null
        }
      </nav>
      <Switch>
        {
          props.children ? props.children.map(item =>(<Route exact key={item.path} path={`${path}${item.path}`} component={item.component}/>)) : null
        }
      </Switch>
    </div>
  )
}
export default About;
