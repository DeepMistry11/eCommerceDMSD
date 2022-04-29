import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Tab } from "semantic-ui-react";
import Movies from "../Movies/Movies";
import db from "../../firebase";
import "./Details.css";
import GoBack from "../Back Button/GoBack";

const panes = [
  {
    menuItem: "Episodes",
    render: () => (
      <Tab.Pane attached={false}>
        <Movies className="movies__list" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Suggested",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "Extras",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "Details",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
];

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
        }
      });
  }, [id]);

  console.log("details: ", movie);

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
    <div className="details__container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {movie && (
          <>
            <div className="details__background">
              <img src={movie.backgroundImg} alt="img" />
            </div>
            <div className="details__content">
              <motion.div
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="item"
                  variants={item}
                  transition={{ duration: 1.2 }}
                >
                  <GoBack />
                  <div className="image__title">
                    <img src={movie.titleImg} alt="img" />
                  </div>
                </motion.div>
                <motion.div
                  className="item"
                  variants={item}
                  transition={{ duration: 1.2 }}
                >
                  <div className="details__controls">
                    <div className="play__button">
                      <button>
                        <img src="/images/play-icon-black.png" alt="button" />
                        <span>PLAY</span>
                      </button>
                    </div>
                    <div className="trailer__button">
                      <button>
                        <img src="/images/play-icon-white.png" alt="button" />
                        <span>Trailer</span>
                      </button>
                    </div>
                    <div className="add__button">
                      <button>
                        <span>+</span>
                      </button>
                    </div>
                    <div className="group__watch__button">
                      <button>
                        <img src="/images/group-icon.png" alt="button" />
                      </button>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="item"
                  variants={item}
                  transition={{ duration: 1.2 }}
                >
                  <div className="details__subtitles">
                    <img src="/images/pg13.png" alt="logo" />
                    <div>{movie.subTitle}</div>
                  </div>
                </motion.div>
                <motion.div className="item" variants={item}>
                  <div className="details__description">
                    <div>{movie.description}</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
        <div className="details__episodes">
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
      </motion.div>
    </div>
  );
}

export default Detail;
