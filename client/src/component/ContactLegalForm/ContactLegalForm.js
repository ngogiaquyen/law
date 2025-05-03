// ContactLegalForm.js
import classNames from "classnames/bind";
import styles from "./ContactLegalForm.module.scss";

const cx = classNames.bind(styles);

function ContactLegalForm() {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div className={cx("infoSection")}>
          <h1 className={cx("heading")}>
            Take Control of<br />Your Legal Matters
          </h1>
          <p className={cx("subheading")}>Don’t hesitate to contact us</p>

          <div className={cx("contactList")}>
            <div className={cx("contactItem")}>
              <div className={cx("iconBox")}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className={cx("label")}>Location</p>
                <p className={cx("text")}>375 Park Avenue, Suite 2607, New York</p>
              </div>
            </div>

            <div className={cx("contactItem")}>
              <div className={cx("iconBox")}>
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className={cx("label")}>Email</p>
                <p className={cx("text")}>riesger@riesgerlegal.com</p>
              </div>
            </div>

            <div className={cx("contactItem")}>
              <div className={cx("iconBox")}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <p className={cx("label")}>Phone</p>
                <p className={cx("text")}>+1(646)2457677</p>
              </div>
            </div>
          </div>
        </div>

        <form className={cx("form")} method="POST" action="#">
          <label htmlFor="name" className={cx("labelTitle")}>Name</label>
          <input type="text" id="name" name="name" placeholder="Name" className={cx("input")} />

          <label htmlFor="email" className={cx("labelTitle")}>Email</label>
          <input type="email" id="email" name="email" placeholder="Email" className={cx("input")} />

          <label htmlFor="whatsapp" className={cx("labelTitle")}>WhatsApp</label>
          <input type="text" id="whatsapp" name="whatsapp" placeholder="WhatsApp" className={cx("input")} />

          <label htmlFor="message" className={cx("labelTitle")}>Message</label>
          <textarea id="message" name="message" placeholder="Message" rows="5" className={cx("textarea")} />

          <button type="submit" className={cx("button")}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactLegalForm;
