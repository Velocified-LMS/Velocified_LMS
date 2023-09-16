import { useCallback } from "react";
import Link from "next/link";
import styles from "./home.module.css";

const Homepage = () => {


  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <button className={styles.exploreButton}>
          <div className={styles.container} />
          <div className={styles.explore}>Explore</div>
        </button>
        <div className={styles.textBox}>
          <div className={styles.container1} />
          <div className={styles.placeholder}>
            <span className={styles.placeholderTxt}>
              <p className={styles.p}>
                _________________________________________________________
              </p>
              <p className={styles.p}>
                __________________________________________________________________________________________
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.logInButton}>
        <Link href="/login" >
          <div className={styles.logIn}>
          Log in</div></Link>
        </div>
        <button className={styles.fr}>FR</button>
        <button className={styles.news}>News</button>
        <button className={styles.training}>Training</button>
        <button className={styles.about}>About</button>
        <button className={styles.home1}>{`Home `}</button>
        <input
          className={styles.search}
          name="search"
          placeholder="Search"
          type="text"
        />
        <div className={styles.velocified}>VELOCIFIED</div>
      </div>
    </div>
  );
};

export default Homepage;
