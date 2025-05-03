import classNames from "classnames/bind";
import styles from "./HeroSection.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function HeroSection() {
  return (
    <div className={cx("wrapper")}>
        <section className={cx("textSection")}>
          <h1 className={cx("heading")}>
            A Lawyer Dedicated
            <br />
            to Protecting The
            <br />
            Rights of All
          </h1>
          <p className={cx("description")}>
            Experienced and knowledgeable lawyer offering top notch legal
            representation and advocacy services.
          </p>
          <button className={cx("consultationBtn")}>Schedule Consultation</button>
          <div className={cx("clientInfo")}>
            <div className={cx("avatars")}>
              <img
                src="https://storage.googleapis.com/a1aa/image/eee94214-4ecf-46d2-9115-7210e19003ef.jpg"
                alt="Client 1"
              />
              <img
                src="https://storage.googleapis.com/a1aa/image/bd3ef656-42d1-468f-b7ee-5af857b53d8f.jpg"
                alt="Client 2"
              />
              <img
                src="https://storage.googleapis.com/a1aa/image/f999bae7-ffef-4c48-b1ff-6d739621ea9b.jpg"
                alt="Client 3"
              />
              <img
                src="https://storage.googleapis.com/a1aa/image/e0ac1c7c-ae14-4408-4f28-9f3742ce6851.jpg"
                alt="Client 4"
              />
            </div>
            <div className={cx("clientStats")}>
              <span className={cx("clientCount")}>13<span>k</span></span>
              <span className={cx("plus")}>+</span>
              <div className={cx("clientLabel")}>Satisfied clients</div>
            </div>
          </div>
        </section>
        <div className={cx("imageSection")}>
          <img
            src={images.herorImg}
            alt="Lawyer"
          />
        </div>

      {/* <div className={cx("chatIcon")}>
        <img
          src="https://storage.googleapis.com/a1aa/image/f35c91c0-9238-4fff-2a06-016ac77441de.jpg"
          alt="Messenger icon"
        />
      </div>

      <button className={cx("scrollTop")}>
        <i className="fas fa-angle-up"></i>
      </button> */}
    </div>
  );
}

export default HeroSection;
