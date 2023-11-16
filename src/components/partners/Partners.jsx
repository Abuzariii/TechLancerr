import styles from "./Partners.module.css";
import PartnerCard from "./partnersCard/PartnerCard";

const Partners = () => {
  return (
    <div className={styles.partnersSection}>
      <h2 className="headingBg">OUR PARTNERS</h2>

      <div>
        <PartnerCard />
      </div>
    </div>
  );
};

export default Partners;
