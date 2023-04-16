import styles from "./affiliateCompanies.module.css";

const CompanyCard = ({ logo, name, description, link }) => {
  return (
    <div className={styles.card}>
      <img src={logo} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Website
      </a>
    </div>
  );
};

export default CompanyCard;
