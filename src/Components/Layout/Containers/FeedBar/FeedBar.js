import React from "react";
import classes from "./FeedBar.module.css";
const feedBar = (props) => {
  if (!props.viewingThread) {
    return <div></div>;
  } else {
    return <div className={classes.MainBar}>{props.children}</div>;
  }
};

export default feedBar;
