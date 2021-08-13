import logo from './logo.svg';
import './App.scss';
import MyContext from "./context/user";
import Children from "./components/Children";
import { useContext }  from "react";
function App() {
  const value = useContext(MyContext);
  return (
    <MyContext.Provider className="App" value={value}>
      <Children/>
    </MyContext.Provider>
  );
}

export default App;
