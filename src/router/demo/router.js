import {Router, Switch, Route, Redirect, Link} from "react-router-dom";
import {createBrowserHistory} from "history";
import routerList from "./routerList";

const history = createBrowserHistory();

const DefaultRouter = function () {
  console.log(history)
  return (
    <Router history={history}>
      <ul>
        {
          routerList.filter(item => !item.hidden).map(item => (
            <li key={item.path}><Link to={item.path}>{item.path}</Link></li>))
        }
      </ul>
      <Switch>
        <Redirect exact from="/" to="/home"/>
        {
          routerList.map(item =>{
            return item.children ? (<Route key={item.path} path={item.path} render={() => {
              return (<item.component children={item.children}></item.component>);
            }}/>) : (<Route exact key={item.path} path={item.path} component={item.component}/>)
          })
        }
        <Redirect to="/404"/>
      </Switch>
    </Router>
  )
}
export default DefaultRouter;
