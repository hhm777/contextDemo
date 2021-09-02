import {Switch, Route, Redirect} from "react-router-dom";
import Home from "@/pages/Home";
import Lost from "@/pages/404";
const Layout = () => {
  return (
    <div>
      xxxx
      <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/404" component={Lost}/>
        <Redirect to="/404"/>
      </Switch>
    </div>
  )
}
export default Layout;
