import classes from "./Modal.module.css";
import React, { useState } from "react";

const modal = (props) => {
  if (props.open) {
    return (
      <div>
        <div className={classes.backdrop} onClick={props.close}></div>
        <div className={classes.ModalContent}>
          <h2>{props.title}</h2>
          <p>{props.message}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default modal;
