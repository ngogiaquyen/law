import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./FaqSection.module.scss";

const cx = classNames.bind(styles);

const faqData = [
  {
    id: "faq1",
    question: "How do you recover the scammed cryptocurrency?",
    answer:
      "To recover through legal means, you must keep the evidence that you were deceived. Please contact customer service for details.",
  },
  {
    id: "faq2",
    question: "I was cheated for a long time, can I get it back?",
    answer: "",
  },
  {
    id: "faq3",
    question: "Can I get all the money back no matter how much it is?",
    answer: "",
  },
];

function FaqSection() {
  const [activeId, setActiveId] = useState("faq1");

  const toggleFaq = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Frequently Asked Questions</h2>
      {faqData.map(({ id, question, answer }) => {
        const isOpen = activeId === id;
        return (
          <div
            key={id}
            className={cx("faqItem", {
              active: isOpen && id === "faq1",
            })}
          >
            <button
              onClick={() => toggleFaq(id)}
              className={cx("faqButton")}
              aria-expanded={isOpen}
              aria-controls={id}
              id={`${id}-btn`}
            >
              {question}
              <i
                className={cx("icon", {
                  open: isOpen,
                }, "fas", {
                  "fa-times": isOpen,
                  "fa-plus": !isOpen,
                })}
              />
            </button>
            <div
              id={id}
              className={cx("faqContent", { hidden: !isOpen })}
              role="region"
              aria-labelledby={`${id}-btn`}
            >
              {answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaqSection;
