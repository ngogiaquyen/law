import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./MapWithInfoBox.module.scss";

const cx = classNames.bind(styles);

function MapWithInfoBox() {
  const [showInfoBox, setShowInfoBox] = useState(false);

  const handleMapClick = () => {
    setShowInfoBox(true);
  };

  const handleCloseClick = () => {
    setShowInfoBox(false);
  };

  return (
    <div className={cx("wrapper")}>
      {!showInfoBox && (
        <iframe
          title="Google map showing Legends Diner location in Secaucus, NJ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.927927927927!2d-74.0600002845933!3d40.78900017932444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b7a0a1a1a1%3A0x123456789abcdef!2sLegends%20Diner!5e0!3m2!1sen!2sus!4v1698652800000!5m2!1sen!2sus"
          className={cx("mapFrame")}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onClick={handleMapClick}
        />
      )}

      {showInfoBox && (
        <div className={cx("infoBox")}>
          <div className={cx("infoTitle")}>Legends Diner</div>
          <div className={cx("infoAddress")}>
            130 County Ave, Secaucus, NJ<br />
            07094, Hoa Kỳ
          </div>
          <div className={cx("infoRating")}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className={cx("starIcon")}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
            </svg>
            <span className={cx("ratingValue")}>4,3</span>
            <span className={cx("reviewCount")}>1.073 bài viết</span>
          </div>
          <a
            href="https://www.google.com/maps/place/Legends+Diner/@40.789,-74.056"
            target="_blank"
            rel="noopener noreferrer"
            className={cx("mapLink")}
          >
            Xem bản đồ lớn hơn
          </a>
          <button onClick={handleCloseClick} className={cx("closeBtn")}>
            Đóng
          </button>
        </div>
      )}
    </div>
  );
}

export default MapWithInfoBox;
