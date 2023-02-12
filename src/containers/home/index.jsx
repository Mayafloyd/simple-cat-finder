import Searcher from "../../components/Searcher";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.App}>
      <h1>Simple Cat Finder</h1>
      <div className={styles.divMobileCats}>
        <img
          src="./images/mobile_cats.png"
          alt="mobile_cats.png"
          className={styles.img}
        />
      </div>
      <div className={styles.divSearcher}>
        <Searcher />
      </div>
    </div>
  );
};

export default Home;
