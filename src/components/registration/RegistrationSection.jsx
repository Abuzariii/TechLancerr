import React from "react";
import classes from "./RegistrationSection.module.css";
import { poppinsLight } from "@/utils/fonts";

const RegistrationSections = () => {
  return (
    <div className={classes.bg} id="registrationSection">
      <div className="headingBg">REGISTER NOW</div>
      <div className={classes.registrationSections}>
        <div className={classes.registrationSection}>
          <h2 className={classes.upper}>
            <p className={`${classes.para}${poppinsLight.className}`}>
              Join as an
            </p>{" "}
            Attendee
          </h2>
          <div className={classes.lower}>
            <p className={`${classes.para}${poppinsLight.className}`}>
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
            <p className={`${classes.para}${poppinsLight.className}`}>
              Become a
            </p>{" "}
            Sponsor
          </h2>
          <div className={classes.lower}>
            <p className={`${classes.para}${poppinsLight.className}`}>
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
            <p className={`${classes.para}${poppinsLight.className}`}>
              Grace The Stage
            </p>
            as a Speaker
          </h2>
          <div className={classes.lower}>
            <p className={`${classes.para}${poppinsLight.className}`}>
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
