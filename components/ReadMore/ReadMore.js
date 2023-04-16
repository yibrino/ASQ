import { useState } from "react";
import styles from "./ReadMore.module.css";

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const content =
    "Molde University · Supply Chain Engineering Quantitative Modelling and Engineer-Scientist";

  return (
    <div className={styles.container}>
      {isExpanded ? (
        <div>
          <p className={styles.content}>{content}</p>
          <a
            href="https://www.researchgate.net/profile/Yohannes-Yebabe-Tesfay"
            target="_blank" className={styles.link}
          >
       https://www.researchgate.net/profile/Yohannes-Yebabe-Tesfay
          </a>
          <a
            href="https://www.flcompanyregistry.com/companies/persimmon-helois-asq-engineering-solutions-llc/
            "
            target="_blank" className={styles.link}
          >
            <br></br>
https://www.flcompanyregistry.com/companies/persimmon-helois-asq-engineering-solutions-llc/
          </a>
          <br></br>
          <a
            href="https://www.bizapedia.com/fl/persimmon-and-helois-asq-engineering-solutions-llc.html
            "
            target="_blank" className={styles.link}
          >
https://www.bizapedia.com/fl/persimmon-and-helois-asq-engineering-solutions-llc.html
          </a>
        </div>
      ) : (
        <div>
          <p className={styles.summary}>{content.slice(0, 40)}...</p>
          <button className={styles.button} onClick={() => setIsExpanded(true)}>
            Read More
          </button>
        </div>
      )}
    </div>
  );
};
export default ReadMore;
