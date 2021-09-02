import MyContext from "@/context/user";
import reducer, {initState} from "@/context/reducer";
import Router from "@/router/demo/router";
import { useReducer }  from "react";
import '@/App.scss';

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
