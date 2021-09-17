import React from "react";
function CloneCompBox({dom = <div/>, ...props}) {
  const styles = {
    color: "blue",
    textAlign: "left",
    lineHeight: "30px",
    fontSize: "14px",
    marginTop: "100px",
    padding: "50px"
  }
  return React.cloneElement(dom, {
    ...props,
    style: Object.assign({}, styles, props.style)
  })
}
function Dom (props) {
  return <div style={props.style}>28°C 多云{props.children}</div>;
}
function ContainerBox() {
  return <CloneCompBox dom={<Dom/>}><h1>空气质量优 41</h1></CloneCompBox>
}
export default ContainerBox;
