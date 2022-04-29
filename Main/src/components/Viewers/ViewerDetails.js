import React, { useState } from "react";
import Movies from "../Movies/Movies";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GoBack from "../Back Button/GoBack";
import "./Viewers.css";

function ViewerDetails() {
  const [hovered, setHovered] = useState(false);

  function onMouseEnter() {
    setHovered(!hovered);
  }

  // function onMouseExit() {
  //   setHovered({ hovered: false });
  // }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="viewer__detail__bg">
          <img
            src={hovered ? "/images/giphy.gif" : "/images/av1.jpg"}
            alt="banner"
          />
        </div>
      </motion.div>
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4 }}
      >
        <div className="viewer__details__container">
          <motion.div
            className="item"
            variants={item}
            transition={{ duration: 0.4 }}
          >
            <GoBack />
            <div className="viewer__logo">
              <img src="/images/marvel_logo.svg" alt="logo" />
            </div>
            <div className="viewer__movie__container">
              <Movies enter={onMouseEnter} exit={onMouseEnter} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ViewerDetails;
