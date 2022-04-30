import React, { useEffect } from "react";
import ImageSlider from "../Image Slider/ImageSlider";
// import Movies from "../Movies/Movies";
import Viewers from "../Viewers/Viewers";
import { motion } from "framer-motion";
import db from "../../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../../features/Movie/movieSlice";
import Originals from "../Originals/Originals";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        console.log(doc.data());
        return { id: doc.id, ...doc.data() };
      });
      // console.log(tempMovies);
      dispatch(setMovies(tempMovies));
    });
  });

  return (
    <div className="home__main__div">
      <div className="home__sidebar">
        <Originals />
      </div>
      <div className="home__container" style={{ overflow: "hidden" }}>
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="main__home__container">
            <ImageSlider />
            <Viewers />
            <Viewers />
            <Viewers />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
