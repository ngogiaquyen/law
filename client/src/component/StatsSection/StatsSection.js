import React from "react";
import classNames from "classnames/bind";
import styles from "./StatsSection.module.scss";

const cx = classNames.bind(styles);

function StatsSection() {
  return (
    <div className={cx("container")}>
      <div className={cx("grid")}>
        <div>
          <p className={cx("statNumber")}>
            17<span className={cx("highlight")}>+</span>
          </p>
          <p className={cx("text")}>Years of experience</p>
        </div>
        <div>
          <p className={cx("statNumber")}>
            59<span className={cx("highlight")}>+</span>
          </p>
          <p className={cx("text")}>Best attorneys</p>
        </div>
        <div>
          <p className={cx("statNumber")}>
            98<span className={cx("highlight")}>%</span>
          </p>
          <p className={cx("text")}>Cases won</p>
        </div>
        <div>
          <p className={cx("statNumber")}>
            850<span className={cx("highlight")}>+</span>
          </p>
          <p className={cx("text")}>Trusted clients</p>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
