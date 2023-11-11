import React from "react";
import partners from "@/utils/partners";
import styles from "./PartnerCard.module.css";
import Image from "next/image";

const Organizers = () => {
  const organizers = partners.filter(
    (partner) => partner.category === "organizers"
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
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <img src={partner.logo} alt={partner.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Sponsors = () => {
  const sponsors = partners.filter(
    (partner) => partner.category !== "organizers"
  );

  const subCategories = ["platinum", "gold", "silver"];

  const sponsorsPresent = subCategories.some((category) => {
    return sponsors.some((partner) => partner.category === category);
  });

  if (!sponsorsPresent) {
    return null;
  }

  return (
    <div className={styles.sponsors}>
      <h2>Sponsors</h2>
      {subCategories.map((category) => {
        const subCategorySponsors = sponsors.filter(
          (partner) => partner.category === category
        );
        if (subCategorySponsors.length > 0) {
          return (
            <div className={`${styles.subCategory}`} key={category}>
              <h3>{category}</h3>
              <div className={styles.partnerCards}>
                {subCategorySponsors.map((partner) => (
                  <div className={`${styles.partnerCard}`} key={partner.id}>
                    {/* <a
                      href={partner.link}
                      // target="_blank"
                      rel="noopener noreferrer"
                    > */}
                    <img src={partner.logo} alt={partner.name} />
                    {/* </a> */}
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
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
