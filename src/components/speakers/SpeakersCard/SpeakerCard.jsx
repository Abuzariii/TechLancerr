import React from "react";
import styles from "./SpeakerCard.module.css";
import Image from "next/image";

const SpeakerCard = ({ name, title, image }) => {
  return (
    <div className={styles.speakerCard}>
      <Image
        className={styles.speakerImage}
        src={image}
        alt={`Speaker ${name}`}
        width={180}
        height={270}
      />
      <div className={styles.speakerDetails}>
        <div className={styles.speakerName}>{name}</div>
        <div className={styles.speakerTitle}>{title}</div>
      </div>
    </div>
  );
};

export default SpeakerCard;
