import {Router, Switch, Route, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import Login from "@/pages/login/Login";
import Layout from "@/layout/Layout";
import {connect} from "react-redux";
const history = createBrowserHistory();

const DefaultRouter = function (props) {
  const {token} = props;
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route
          path="/"
          render={() => {
            if (!token) {
              return <Redirect to="/login" />;
            } else {
              return <Layout />;
            }
          }}
        />
      </Switch>
    </Router>
  )
}
export default connect(state => {
  return {
    ...state.user
  }
})(DefaultRouter)
