import './App.scss';
import MyContext from "./context/user";
import {initState, reducer} from "./context/reducer";
import Children from "./components/Children";
import { useReducer }  from "react";
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state)
  return (
    <MyContext.Provider className="App" value={{state, dispatch}}>
      <Children/>
    </MyContext.Provider>
  );
}

export default App;
