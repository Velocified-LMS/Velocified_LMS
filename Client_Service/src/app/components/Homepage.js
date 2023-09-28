import React from "react";
import styles from "./home.module.css";
import Navbar from "./navbar";

const Homepage = () => {
  return (
    <div >
      <Navbar />
      <div className={styles.homepagecontainer}>
      <div className={styles.explore}> <button >Explore</button> </div>
      </div>
    </div>
  );
};

export default Homepage;