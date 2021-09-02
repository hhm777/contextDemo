import {Spin} from "antd";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import {useEffect} from "react";
Nprogress.configure({showSpinner: false});
const Loading = function () {
  useEffect(() =>{
    Nprogress.start();
    return () =>{
      Nprogress.done();
    }
  }, []);
  return (
    <div>
      <Spin/>
    </div>
  )
}
export default Loading;
