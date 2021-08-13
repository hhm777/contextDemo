import React,{ useContext, useMemo }  from "react";
import MyContext from "../context/user";
function Children() {
  console.log('children render')
  const {state, dispatch} = useContext(MyContext);
  return useMemo(() =>{
    console.log('children render1')
    return (
      <div className="test-box">
        <div>children</div>
        <div onClick={() =>dispatch({type: "ADD_NUM1"})} className="test-btn">{state.num1}</div>
        <div onClick={() =>dispatch({type: "ADD_NUM2"})} className="test-btn">{state.num2}</div>
        <div onClick={() =>dispatch({type: "GET_SUM"})} className="test-btn">{state.sum}</div>
      </div>
    )
  }, [state.num1, state.num2, state.sum, dispatch])
}
export default Children;
