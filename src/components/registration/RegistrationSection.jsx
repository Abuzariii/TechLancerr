import React from "react";
import classes from "./RegistrationSection.module.css";

const RegistrationSections = () => {
  return (
    <div className={classes.bg} id="registrationSection">
      <div className="headingBg">REGISTER NOW</div>
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
            <a
              href="https://forms.gle/iN9RkJGK1QsB7B3X8"
              target="_blank"
              className={classes.registerButton}
            >
              Register
            </a>
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
            <a
              href="https://forms.gle/PEBWrYzgdCBaWnyY9"
              target="_blank"
              className={classes.registerButton}
            >
              Register
            </a>
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
            <a
              href="https://forms.gle/NnggsMGx2m1DQx5X6"
              target="_blank"
              className={classes.registerButton}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSections;
