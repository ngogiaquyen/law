// LawServices.js
import classNames from "classnames/bind";
import styles from "./LawServices.module.scss";

const cx = classNames.bind(styles);

function LawServices() {
  const services = [
    {
      img: "https://storage.googleapis.com/a1aa/image/ff666d2d-6ba8-453c-7006-af5022150ff0.jpg",
      title: "Family Lawyer",
      desc: "From Devastation to Recovery: How Riesger Law Firm Helped Me Reclaim $60,000 After a Cryptocurrency Scam",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/5cbad115-5654-4b48-fa10-3d849f2ce673.jpg",
      title: "Family Lawyer",
      desc: "Cross-Border ETH Recovery: How Riesger Law Firm Helped Me Reclaim $280,000 in Stolen Crypto Assets",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/51d151f0-b0b9-4ad6-a9dc-c168cc7b8ff5.jpg",
      title: "Frontier dispute",
      desc: "How is Jack’s cryptocurrency investment?",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/d91c864b-e120-4b17-c969-f17bd3c12f0f.jpg",
      title: "Stock investment case",
      desc: "Riesger Law Firm recovered $126,000 for me",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      {services.map((item, index) => (
        <div className={cx("card")} key={index}>
          <img src={item.img} alt={item.title} className={cx("image")} />
          <h3 className={cx("title")}>{item.title}</h3>
          <p className={cx("description")}>{item.desc}</p>
          <a href="#" className={cx("link")}>
            Service Details <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      ))}
    </div>
  );
}

export default LawServices;
