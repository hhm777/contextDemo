import {useState, useCallback, useEffect, useMemo} from "react";
import Children from "@/components/demo/Children";
const Login = function (){
  console.log("login start")
  const [name, setName] = useState("张三");
  const [password, setPassword] = useState(123);
  const changePassword = useCallback(function (e){
    const evt = window.event || e;
    if (evt.keyCode === 13) {
      console.log("changePassword 触发")
      setPassword(evt.target.value);
    }
  }, [])
  const handleNameChange = useCallback(function (e) {
    const evt = window.event || e;
    if (evt.keyCode === 13) {
      console.log("changeName 触发")
      setName(evt.target.value);
    }
  }, [])
  const description = useMemo(function (){
    console.log("useMemo description--")
    return `用户:${name} 密码：`
  }, [name])
  useEffect(() =>{
   console.log("useEffect password 触发")
  }, [password])
  return (
    <div>
      {console.log("login render")}
      <div>Login</div>
      <div>{description}{password}</div>
      name:<input type="text" onKeyDown={handleNameChange}/>
      <br/>
      <br/>
      <Children password={password} handleChange={changePassword}></Children></div>
  )
}
export default Login;
