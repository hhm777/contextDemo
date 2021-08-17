import './App.scss';
import MyContext from "./context/user";
import {initState, reducer} from "./context/reducer";
import Router from "./router/router";
import { useReducer }  from "react";
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state)
  return (
    <MyContext.Provider className="App" value={{state, dispatch}}>
      <Router/>
    </MyContext.Provider>
  );
}

export default App;
