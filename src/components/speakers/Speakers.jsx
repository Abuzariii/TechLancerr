import React from "react";
import styles from "./Speakers.module.css";
import SpeakerCard from "./SpeakersCard/SpeakerCard";

const Speakers = ({ speakers }) => {
  return (
    <div className={styles.speakersMain}>
      <div className="headingBg">
        <div className={styles.speakersHeadingTitle}>Global Experts in Distributed Work</div>
        <div className={styles.speakersHeadingPara}>
          Join renowned distributed work experts​. Our speakers are industry
          practitioners with extensive experience leading, running, and managing
          remote-first and hybrid teams. Over 50 experts will share their
          industry insights, best practices, and learnings with you.
        </div>
      </div>
      <div className={styles.speakersContainer}>
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
