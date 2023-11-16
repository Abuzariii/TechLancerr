import React from "react";
import partners from "@/utils/partners";
import styles from "./PartnerCard.module.css";

const Organizers = () => {
  const organizers = partners.filter(
    (partner) => partner.category === "organizer"
  );

  if (organizers.length === 0) {
    return null;
  }

  return (
    <div className={styles.organizers}>
      <h2>Organizers</h2>
      <div className={styles.partnerCards}>
        {organizers.map((partner) => (
          <div className={`${styles.partnerCard}`} key={partner.id}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Sponsors = () => {
  const sponsors = partners.filter(
    (partner) => partner.category !== "organizer"
  );

  if (sponsors.length === 0) {
    return null;
  }

  return (
    <div className={styles.sponsors}>
      <h2>Sponsors</h2>
      <div className={styles.partnerCards}>
        {sponsors.map((partner) => (
          <div className={`${styles.partnerCard}`} key={partner.id}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const PartnerCard = () => {
  return (
    <div className={styles.partnersSection}>
      <Organizers />
      <Sponsors />
    </div>
  );
};

export default PartnerCard;
