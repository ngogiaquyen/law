import classNames from "classnames/bind";
import styles from "./ExperiencedLawyers.module.scss";

const cx = classNames.bind(styles);

function ExperiencedLawyers() {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <h2 className={cx("title")}>Our Experienced Lawyer</h2>
        <button className={cx("viewAllButton")}>View All Lawyers</button>
      </div>
      <div className={cx("grid")}>
        <div className={cx("card")}>
          <img
            className={cx("image")}
            src="https://storage.googleapis.com/a1aa/image/242c5ddc-a585-49e4-eb44-eb91d920fe8a.jpg"
            alt="John Peter Toman"
          />
          <h3 className={cx("name")}>John Peter Toman</h3>
          <p className={cx("role")}>Business Lawyer</p>
        </div>
        <div className={cx("card")}>
          <img
            className={cx("image")}
            src="https://storage.googleapis.com/a1aa/image/7621e1b5-cc61-45b4-117f-311f90a2897a.jpg"
            alt="Bradley Lewis Johnse"
          />
          <h3 className={cx("name")}>Bradley Lewis Johnse</h3>
          <p className={cx("role")}>Family Lawyer</p>
        </div>
        <div className={cx("card")}>
          <img
            className={cx("image")}
            src="https://storage.googleapis.com/a1aa/image/242c5ddc-a585-49e4-eb44-eb91d920fe8a.jpg"
            alt="John Sigh"
          />
          <h3 className={cx("name")}>John Sigh</h3>
          <p className={cx("role")}>Managing Partner</p>
        </div>
        <div className={cx("card")}>
          <img
            className={cx("image")}
            src="https://storage.googleapis.com/a1aa/image/23f2ca4e-1464-48ad-324f-5b127c6e8471.jpg"
            alt="Lyne Clooney"
          />
          <h3 className={cx("name")}>Lyne Clooney</h3>
          <p className={cx("role")}>Tax Attorney</p>
        </div>
      </div>
    </div>
  );
}

export default ExperiencedLawyers;
