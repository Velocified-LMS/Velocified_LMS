import styles from "./home.module.css";
import Navbar from "./navbar";
const Homepage = () => {


  return (
    <div >
      <Navbar />
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
      
    </div>
  );
};

export default Homepage;
