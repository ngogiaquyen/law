import React from "react";
import classNames from "classnames/bind";
import styles from "./PracticeAreas.module.scss";

const cx = classNames.bind(styles);

function PracticeAreas() {
  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Law Services - Practice Areas</h2>
      <div className={cx("grid")}>
        <div className={cx("item")}>
          <i className={cx("icon", "fa-file-alt")}></i>
          <h3 className={cx("heading")}>Criminal Law</h3>
          <p className={cx("description")}>
            Everything will be alright; it is not that bad.
          </p>
          <a href="#" className={cx("link")}>Learn More</a>
        </div>
        <div className={cx("item")}>
          <i className={cx("icon", "fa-balance-scale")}></i>
          <h3 className={cx("heading")}>Family Law</h3>
          <p className={cx("description")}>
            Family is not just important; it means everything.
          </p>
        </div>
        <div className={cx("item")}>
          <i className={cx("icon", "fa-search")}></i>
          <h3 className={cx("heading")}>Travel Accident</h3>
          <p className={cx("description")}>
            Life happens to you while you are busy making other plans.
          </p>
        </div>
        <div className={cx("item")}>
          <i className={cx("icon", "fa-money-bill-wave")}></i>
          <h3 className={cx("heading")}>Identity Theft</h3>
          <p className={cx("description")}>
            Theft is not just about taking things. It is about taking away the sense of security.
          </p>
        </div>
        <div className={cx("item")}>
          <i className={cx("icon", "fa-gavel")}></i>
          <h3 className={cx("heading")}>Legal Advice</h3>
          <p className={cx("description")}>
            If you have a legal problem, it is important to seek the help of a qualified attorney.
          </p>
        </div>
        <div className={cx("item")}>
          <i className={cx("icon", "fa-briefcase")}></i>
          <h3 className={cx("heading")}>Fraud</h3>
          <p className={cx("description")}>
            Trust is the cornerstone of a market economy and must be protected from fraud.
          </p>
        </div>
      </div>

      <button
        aria-label="Scroll to top"
        className={cx("scrollButton")}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className={cx("scrollIcon", "fa-chevron-up")}></i>
      </button>
      <button aria-label="Messenger chat" className={cx("messengerButton")}>
        <img
          alt="Messenger icon"
          className={cx("messengerIcon")}
          src="https://storage.googleapis.com/a1aa/image/f9e817f8-34f9-459a-ed70-632bb34676aa.jpg"
        />
      </button>
    </div>
  );
}

export default PracticeAreas;
