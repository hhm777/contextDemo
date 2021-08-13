import React,{ useContext }  from "react";
import MyContext from "../context/user";
function Children() {
  const {name, age} = useContext(MyContext);
  return (
    <div>
      <div>children</div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  )
}
export default Children;
