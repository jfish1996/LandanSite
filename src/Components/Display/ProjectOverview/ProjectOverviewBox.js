import React, { useState } from "react";
import classes from "./ProjectOverviewBox.module.css";

const ProjectOverviewBox = (props) => {
  const [threadView, changeThreadView] = useState(false);

  const threadHandler = () => {
    if (!threadView) {
      changeThreadView(true);
      console.log(threadView);
    } else changeThreadView(true);
    console.log(threadView);
  };

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
    <div
      className={
        props.viewState ? classes.ThreadContainer : classes.ProjectContainer
      }
    >
      <div className={props.viewState ? classes.MainTitle : classes.NoDisplay}>
        {props.subSec}
      </div>
      <div
        onClick={props.clickHandle}
        className={props.viewState ? classes.BigBox : classes.Box}
        style={{ background: blockColor }}
      >
        <p>{props.subSec}</p>
      </div>

      <p className={props.viewState ? classes.NoDisplay : classes.NameSelector}>
        small amount of info
      </p>
      <p className={props.viewState ? classes.TextFeild : classes.NoDisplay}>
        This will be a large area of text.This will be a large area of text.This
        will be a large area of text.This will be a large area of text.This will
        be a large area of text.This will be a large area of text.This will be a
        large area of text.This will be a large area of text.This will be a
        large area of text.This will be a large area of text.This will be a
        large area of text.This will be a large area of text. This will be a
        large area of text.This will be a large area of text.This will be a
        large area of text.This will be a large area of text.This will be a
        large area of text.This will be a large area of text.This will be a
        large area of text.This will be a large area of text.This will be a
        large area of text.This will be a large area of text.This will be a
        large area of text.This will be a large area of text.
      </p>
      {props.children}
      <p className={classes.DateSelector}>Date Posted:{props.date}</p>
    </div>
  );
};

export default ProjectOverviewBox;
