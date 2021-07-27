import React from "react";
import classes from "./ImageCard.module.css";

const imageCard = (props) => {
  return (
    <div className={classes.Container}>
      <img className={classes.ImgContainer} src={props.imageSrc}></img>
      <div className={classes.Centered}>{props.children}</div>
    </div>
  );
};

export default imageCard;
