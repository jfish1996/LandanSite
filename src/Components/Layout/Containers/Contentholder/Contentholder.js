import React, { useState, useEffect } from "react";
import classes from "./Contentholder.module.css";
import ProjectOverviewBox from "../../../Display/ProjectOverview/ProjectOverviewBox";
import ImageCard from "../../../Display/ImageCard/ImageCard";
import homePicture from "../../../../assets/images/spaceLandingPoint.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../../../Display/Header/Header";
import FeedBar from "../FeedBar/FeedBar";
import FeedViewHolder from "../../../Display/FeedViewHolder/FeedViewHolder";
// import { Link, animateScroll as scroll } from "react-scroll";

const ContentHolder = (props) => {
  //State Area--------
  let stateCopy = {
    1: {
      id: "1",
      project: "example1",
      date: "4/20/20",
      section: "portfolio",
      subSec: "pitchbook",
      currentTarget: false,
    },
    2: {
      id: "2",
      project: "example2",
      date: "4/21/20",
      section: "portfolio",
      subSec: "casestudies",
      currentTarget: false,
    },
    3: {
      id: "3",
      project: "example3",
      date: "4/22/20",
      section: "portfolio",
      subSec: "illustrations",
      currentTarget: false,
    },
    4: {
      id: "4",
      project: "example1",
      date: "4/20/20",
      section: "shop",
      subSec: "apparel",
      currentTarget: false,
    },
    5: {
      id: "5",
      project: "example2",
      date: "4/21/20",
      section: "shop",
      subSec: "stickers",
      currentTarget: false,
    },
    6: {
      id: "6",
      project: "example2",
      date: "4/21/20",
      section: "social",
      subSec: "stuffimake",
      currentTarget: false,
    },
    7: {
      id: "7",
      project: "example2",
      date: "4/21/20",
      section: "social",
      subSec: "touchey",
      currentTarget: false,
    },
    8: {
      id: "8",
      project: "example2",
      date: "4/21/20",
      section: "social",
      subSec: "alien",
      currentTarget: false,
    },
    // 9: { project: "example3", date: "4/22/20" },
    // 10: { project: "example1", date: "4/20/20" },
    // 11: { project: "example2", date: "4/21/20" },
    // 12: { project: "example3", date: "4/22/20" },
    // 13: { project: "example1", date: "4/20/20" },
    // 24: { project: "example2", date: "4/21/20" },
    // 32: { project: "example3", date: "4/22/20" },
    // 42: { project: "example1", date: "4/20/20" },
    // 52: { project: "example2", date: "4/21/20" },
    // 62: { project: "example3", date: "4/22/20" },
    // 72: { project: "example1", date: "4/20/20" },
    // 82: { project: "example2", date: "4/21/20" },
    // 92: { project: "example3", date: "4/22/20" },
    // 102: { project: "example1", date: "4/20/20" },
    // 112: { project: "example2", date: "4/21/20" },
    // 122: { project: "example3", date: "4/22/20" },
  };

  const [currentTitle, changeTitle] = useState("Landan Earley");
  const [threadFeed, changeFeed] = useState(false);

  //end of State Area-------

  //Variable Testing Area--------
  let containgArea;
  //End of Variable testing Area-------

  //function Handlers---------
  function threadViewHandler() {
    if (!threadFeed) {
      changeFeed(true);
    } else {
      changeFeed(false);
    }
  }

  const displayChange = (headerValue) => {
    return Object.keys(stateCopy).map((currentValue) => {
      if (stateCopy[currentValue].section === headerValue) {
        return (
          // <div id={stateCopy[currentValue].id}>
          <ProjectOverviewBox
            key={Math.random()}
            name={stateCopy[currentValue].project}
            date={stateCopy[currentValue].date}
            section={stateCopy[currentValue].section}
            subSec={stateCopy[currentValue].subSec}
            clickHandle={threadViewHandler}
            beingViewed={stateCopy[currentValue].currentTarget}
            viewState={threadFeed}
          />
          // </div>
        );
      }
    });
  };

  const feedBarHanlder = (feedValue) => {
    return Object.keys(stateCopy).map((currentValue) => {
      if (stateCopy[currentValue].section === feedValue) {
        return (
          // <Link
          //   activeClass="active"
          //   to={stateCopy[currentValue].id}
          //   spy={true}
          //   smooth={true}
          //   offset={-70}
          //   duration={500}
          // >
          <FeedViewHolder
            key={Math.random()}
            section={stateCopy[currentValue].section}
          />
          // </Link>
        );
      }
    });
  };
  const subHeaderDisplayChange = (headerValue, subHeaderValue) => {
    return Object.keys(stateCopy).map((currentValue) => {
      if (
        stateCopy[currentValue].section === headerValue &&
        stateCopy[currentValue].subSec === subHeaderValue
      ) {
        return (
          <ProjectOverviewBox
            key={Math.random()}
            name={stateCopy[currentValue].project}
            date={stateCopy[currentValue].date}
            section={stateCopy[currentValue].section}
            subSec={stateCopy[currentValue].subSec}
            clickHandle={threadViewHandler}
            beingViewed={stateCopy[currentValue].currentTarget}
            viewState={threadFeed}
          />
        );
      }
    });
  };

  // end of function Handlers---------

  return (
    <React.Fragment>
      <div className={classes.ContentHolder}>
        {/* Heading Name */}
        <div className={classes.Header}>
          <Header headerName={props.storedHeader} />
        </div>
        {/* Heading Name End */}

        {/* Blurb Start */}
        <div className={classes.blurb}>
          <p>
            {" "}
            I am writing some words to fill the page to display text. Im hoping
            the words will wrap in a nice way When I type them out. and blah
            blah blah blahblah blahblah blah blah blah
          </p>
        </div>
        {/* Blurb End */}
        <div
          className={threadFeed ? classes.ThreadFeed : classes.ProjectsOverview}
        >
          <FeedBar viewingThread={threadFeed}>
            {feedBarHanlder(props.storedHeader.toLowerCase())}
          </FeedBar>
          <Switch>
            {/* Home Route */}
            <Route exact path="/">
              <div>
                <ImageCard imageSrc={homePicture}> Space Stuff </ImageCard>
              </div>
            </Route>
            <Route exact path="/home">
              <div>
                <ImageCard imageSrc={homePicture}> Space Stuff </ImageCard>
              </div>
            </Route>
            {/* Portfolio Paths */}
            <Route exact path="/portfolio">
              {displayChange("portfolio")}
            </Route>
            <Route exact path="/pitchbook">
              {subHeaderDisplayChange("portfolio", "pitchbook")}
            </Route>
            <Route exact path="/illustrations">
              {subHeaderDisplayChange("portfolio", "illustrations")}
            </Route>
            <Route exact path="/casestudies">
              {subHeaderDisplayChange("portfolio", "casestudies")}
            </Route>
            {/* Portfolio Paths */}
            {/* Shop Paths */}
            <Route exact path="/shop">
              {displayChange("shop")}
            </Route>
            <Route exact path="/apparel">
              {subHeaderDisplayChange("shop", "apparel")}
            </Route>
            <Route exact path="/stickers">
              {subHeaderDisplayChange("shop", "stickers")}
            </Route>
            {/* Shop Paths */}
            <Route exact path="/social">
              {displayChange("social")}
            </Route>
            <Route exact path="/stuffimake">
              {subHeaderDisplayChange("social", "stuffimake")}
            </Route>
            <Route exact path="/toucheyfeelys">
              {subHeaderDisplayChange("social", "touchey")}
            </Route>
            <Route exact path="/alienstuff">
              {subHeaderDisplayChange("social", "alien")}
            </Route>
            {/* Shop Paths */}
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ContentHolder;
