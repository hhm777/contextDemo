import React from "react";
const Children = function (props) {
  console.log("children start")
  const {password, handleChange} = props;
  return (
    <div>
      {console.log("children render")}
      <div>children</div>
      <div>密码：{password}</div>
      <input type="text" onKeyDown={handleChange}/>
    </div>
  )
}
export default React.memo(Children);
