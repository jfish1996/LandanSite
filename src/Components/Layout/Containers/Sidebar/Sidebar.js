import React from "react";
import classes from "./Sidebar.module.css";
// import MenuItem from "./MenuItem/MenuItem";
import Media from "react-media";
import { Link } from "react-router-dom";
const sidebar = (props) => {
  let data = [
    { link: "HOME", subLink: ["Home Archive"] },
    {
      link: "PORTFOLIO",
      subLink: ["PitchBook", "Case Studies", "Illustrations"],
    },
    {
      link: "SHOP",
      subLink: ["apparel", "posters", "stickers", "downloads"],
    },
    {
      link: "SOCIAL",
      subLink: [
        "stuff i make",
        "touchey feelys",
        "cool found type",
        "alien stuff",
      ],
    },
    {
      link: "LINKS",
      subLink: [
        "Instagram",
        "LinkedIn",
        "Myspace",
        "totally legit reviews",
        "join the email list?",
      ],
    },
  ];

  const AllItems = data.map((HeaderItem, index) => {
    return (
      <div className={classes.NavList}>
        <ul>
          <li key={index}>
            <div className={classes.Header} onClick={props.onHeaderClick}>
              <div className={classes.MainGroup}>
                <Link to={HeaderItem.link.toLowerCase()}>
                  {HeaderItem.link}
                </Link>
              </div>
            </div>

            {HeaderItem.subLink.map((arrayItem, index) => {
              return (
                <div className={classes.Sublinks}>
                  <ul className={classes.Sublinks}>
                    <li>
                      {" "}
                      <Link to={arrayItem.toLowerCase().replaceAll(" ", "")}>
                        {arrayItem}
                      </Link>
                    </li>
                  </ul>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  });

  const allSmallScreenItems = data.map((dataItem, index) => {
    return (
      <li key={index}>
        <a href="/">{dataItem.link}</a>
      </li>
    );
  });

  const test = (
    <ul className={classes.MainOptionHolder}>
      <div>{allSmallScreenItems}</div>
    </ul>
  );
  //THIS IS WHERE IM RETURING THE WHOLE SIDE BAR
  return (
    <React.Fragment>
      <div className={classes.Sidebar}>
        <span className={classes.MainName}>
          <p>
            LANDY <br></br> PANDYY
          </p>
        </span>
        {AllItems}
      </div>
    </React.Fragment>
  );
};
export default sidebar;
