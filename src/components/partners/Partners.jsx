import styles from "./Partners.module.css";
import PartnerCard from "./partnersCard/PartnerCard";

const Partners = () => {
  return (
    <div className={styles.partnersSection}>
      <h2 className="headingBg">Our Partners</h2>

      <div>
        <PartnerCard />
      </div>
    </div>
  );
};

export default Partners;
