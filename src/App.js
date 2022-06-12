import React from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./Footer";
import './css/normalize.css';
import './css/Grid.css';
import './css/style.css';
import './css/responsive.css';

const App=()=>{
  return <div className={"container header-bg"}>
    <div className={"row"}>
      <div className={"col-2"}><Header/> </div>
      <div className={"col-7"}><Main/> </div>
      <div className={"col-3"}><Footer/> </div>
    </div>
  </div>
}
export default App;