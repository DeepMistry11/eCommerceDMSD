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
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   db.collection("movies").onSnapshot((snapshot) => {
  //     let tempMovies = snapshot.docs.map((doc) => {
  //       console.log(doc.data());
  //       return { id: doc.id, ...doc.data() };
  //     });
  //     // console.log(tempMovies);
  //     dispatch(setMovies(tempMovies));
  //   });
  // });
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      // setUser(foundUser);
      history.push("/login");
    }
  }, [localStorage]);
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

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                className="prof__section jDcTkg"
                style={{ marginTop: "50px", width: "23%" }}
              >
                <div className="prof__head">
                  <p class="body-copy margin--0 truncate text-color--section-header">
                    Computers
                  </p>
                </div>
                <div className="prof__mail">
                  <div
                    class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell"
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="https://cdn.mos.cms.futurecdn.net/3tQfZWCFCLVbkQ5ZyaPaTc.jpg"
                      alt="logo"
                      style={{ width: "-webkit-fill-available" }}
                    />
                  </div>
                </div>
                <div className="prof__logout">
                  <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell prof__logout__in">
                    <Link
                      to="/allComputers"
                      class="sc-fNHLbd enGimF"
                      style={{ textDecoration: "none" }}
                    >
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        Shop Computers
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="prof__section jDcTkg"
                style={{ marginTop: "50px", width: "23%" }}
              >
                <div className="prof__head">
                  <p class="body-copy margin--0 truncate text-color--section-header">
                    Laptops
                  </p>
                </div>
                <div className="prof__mail">
                  <div
                    class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell"
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaRm1itz1U9toa5osK5Os9QmAv7pOfQ-_lz56ZAR4N4IH3aaEndAxz1l-lsvBtEvFDqg&usqp=CAU"
                      alt="logo"
                      style={{ width: "-webkit-fill-available" }}
                    />
                  </div>
                </div>
                <div className="prof__logout">
                  <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell prof__logout__in">
                    <Link
                      to="/viewer"
                      class="sc-fNHLbd enGimF"
                      style={{ textDecoration: "none" }}
                    >
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        Shop Laptops
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="prof__section jDcTkg"
                style={{ marginTop: "50px", width: "23%" }}
              >
                <div className="prof__head">
                  <p class="body-copy margin--0 truncate text-color--section-header">
                    Printers
                  </p>
                </div>
                <div className="prof__mail">
                  <div
                    class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell"
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tIfMT9nMXo3gltRCky_ZIqCIoH0VJ1JDnw&usqp=CAU"
                      alt="logo"
                      style={{ width: "-webkit-fill-available" }}
                    />
                  </div>
                </div>
                <div className="prof__logout">
                  <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell prof__logout__in">
                    <Link
                      to="/allPrinters"
                      class="sc-fNHLbd enGimF"
                      style={{ textDecoration: "none" }}
                    >
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        Shop Printers
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="prof__section jDcTkg"
                style={{ marginTop: "50px", width: "23%" }}
              >
                <div className="prof__head">
                  <p class="body-copy margin--0 truncate text-color--section-header">
                    Accessories
                  </p>
                </div>
                <div className="prof__mail">
                  <div
                    class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell"
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="https://cdn.thewirecutter.com/wp-content/media/2022/04/gaming-mouse-2048px-4725-2x1-1.jpg?auto=webp&quality=60&crop=2:1&width=1024"
                      alt="logo"
                      style={{ width: "-webkit-fill-available" }}
                    />
                  </div>
                </div>
                <div className="prof__logout">
                  <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell prof__logout__in">
                    <Link
                      to="/allAcc"
                      class="sc-fNHLbd enGimF"
                      style={{ textDecoration: "none" }}
                    >
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        Shop Accessories
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <Viewers /> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
