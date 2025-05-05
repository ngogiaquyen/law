// TetherCase.js
import classNames from "classnames/bind";
import styles from "./TetherCase.module.scss";

const cx = classNames.bind(styles);

function TetherCase() {
  return (
    <div className={cx("container")}>
      <div className={cx("card")}>
        <div className={cx("head")}>
          <img
            src="https://storage.googleapis.com/a1aa/image/3615af5a-5e33-499b-49ab-51c74778c3b6.jpg"
            alt="Tether logo"
            className={cx("logo")}
          />
          <h1 className={cx("title")}>tether</h1>
        </div>
        <p className={cx("subtitle")}>Emotional investment fraud case</p>
        <p className={cx("highlight")}>Riesger Law Firm Successfully Recovered $196,000</p>
        <a href="#" className={cx("link")}>
          <span>Service Details</span>
          <i className="fas fa-arrow-right" />
        </a>
      </div>
    </div>
  );
}

export default TetherCase;
