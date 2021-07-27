import React, { useState } from "react";
import Sidebar from "../Containers/Sidebar/Sidebar";
import classes from "./Layout.module.css";
import Contentholder from "../Containers/Contentholder/Contentholder";

function Layout(props) {
  const [currentHeader, changeHeader] = useState("Landan Earley");
  let storedValue = currentHeader;

  let headerClickHandler = (event) => {
    storedValue = event.target.innerText;
    console.log(storedValue);
    changeHeader(storedValue);
  };

  return (
    <div className={classes.Layout}>
      <Sidebar onHeaderClick={headerClickHandler} />
      <Contentholder storedHeader={currentHeader} />
    </div>
  );
}

export default Layout;
