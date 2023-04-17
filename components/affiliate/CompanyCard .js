import styles from "./affiliateCompanies.module.css";
import SectionSubtitle from "../UI/SectionSubtitle";

const CompanyCard = ({ logo, name, description, link }) => {
  return (
    <div className={styles.card}>
      <img src={logo} alt={name} />
      <SectionSubtitle subtitle={name} />

      {/* <h3>{name}</h3> */}
      <p className={styles.description}>{description}</p>
      <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">
        Website
      </a>
    </div>
  );
};

export default CompanyCard;
