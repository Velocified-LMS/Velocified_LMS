import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./home.module.css";

const Home = () => {
  const router = useRouter();

  const onContainer2Click = useCallback(() => {
    router.push("/");
  }, [router]);

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
        <a className={styles.logInButton}>
          <Link
            className={styles.container2}
            href="/"
            onClick={onContainer2Click}
          />
          <div className={styles.logIn}>Log in</div>
        </a>
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

export default Home;
