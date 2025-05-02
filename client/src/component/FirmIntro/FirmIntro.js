import React from "react";
import classNames from "classnames/bind";
import styles from "./FirmIntro.module.scss";

const cx = classNames.bind(styles);

function FirmIntro() {
  return (
    <main className={cx("main")}>
      <div className={cx("image-container")}>
        <img
          alt="Statue of Lady Justice wearing gold armor holding scales and sword, standing on white background"
          className={cx("image-main")}
          height="600"
          src="https://storage.googleapis.com/a1aa/image/556aaa4e-25cc-4194-e849-2090bfa1ec37.jpg"
          width="400"
        />
        <img
          alt="Large light gray letter J behind the statue"
          className={cx("image-overlay")}
          height="400"
          src="https://storage.googleapis.com/a1aa/image/384c461f-55a9-40cf-a07e-0b4f3feb2977.jpg"
          width="300"
        />
      </div>
      <section className={cx("text-section")}>
        <p className={cx("subheading")}>Make history and make a difference</p>
        <h2 className={cx("heading-main")}>Diverse global team</h2>
        <p className={cx("paragraph")}>
          It’s unprecedented: In 2022, Riesger was named “Law Firm of the Year” by The American Lawyer, ranked #1 on
          The American Lawyer’s elite A-list of law firms, and ranked #1 on Law.com International’s A-List for the UK.
          These honors are a testament not only to our best-in-class legal work, but also to our commitment to other core
          areas of our firm’s identity—diversity, equity and inclusion, and pro bono work.
        </p>
        <h3 className={cx("heading-sub")}>Riesger Law Firm</h3>
        <button className={cx("cta-button")}>About Us</button>
      </section>
    </main>
  );
}

export default FirmIntro;
