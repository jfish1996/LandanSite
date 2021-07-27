import React from "react";
import classes from "./FeedViewHolder.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

const feedViewHolder = (props) => {
  let blockColor;
  //basic css application to different art types
  if (props.section == "portfolio") {
    blockColor = "lightgreen";
  } else if (props.section == "shop") {
    blockColor = "lightpink";
  } else if (props.section == "social") {
    blockColor = "lightblue";
  }

  return (
    <div className={classes.viewBox} style={{ background: blockColor }}></div>
  );
};

export default feedViewHolder;
