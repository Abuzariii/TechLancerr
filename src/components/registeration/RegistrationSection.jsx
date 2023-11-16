import React from "react";
import classes from "./RegistrationSection.module.css";

const RegistrationSections = () => {
  return (
    <div className={classes.bg}>
      <div className="headingBg">Register Yourself</div>
      <div className={classes.registrationSections}>
        <div className={classes.registrationSection}>
          <h2 className={classes.upper}>
            <p className={classes.para}>Join as</p> Attendee
          </h2>
          <div className={classes.lower}>
            <p className={classes.para}>
              Experience innovation and connect with industry leaders.
            </p>
            <div className={classes.divider}></div>
            <button className={classes.registerButton}>Register</button>
          </div>
        </div>

        <div className={classes.registrationSection}>
          <h2 className={classes.upper}>
            <p className={classes.para}>Become a</p> Sponsor
          </h2>
          <div className={classes.lower}>
            <p className={classes.para}>
              Showcase your brand and support the future of tech.
            </p>
            <div className={classes.divider}></div>
            <button className={classes.registerButton}>Register</button>
          </div>
        </div>

        <div className={classes.registrationSection}>
          <h2 className={classes.upper}>
            <p className={classes.para}>Grace The Stage as</p> Speaker
          </h2>
          <div className={classes.lower}>
            <p className={classes.para}>
              Share your expertise and inspire the tech community.
            </p>
            <div className={classes.divider}></div>
            <button className={classes.registerButton}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSections;
