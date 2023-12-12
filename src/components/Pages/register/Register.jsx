import classes from "./Register.module.css";
import { poppinsLight } from "@/utils/fonts";

export default function Register() {
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
            </p>
            Featured Guest
          </h2>
          <div className={classes.lower}>
            <p className={`${classes.para}${poppinsLight.className}`}>
              Attend our networking sessions and meet industry professionals
            </p>
            <div className={classes.divider}></div>
            <a
              href="https://forms.gle/NpfTY12LyV6CN3Sw8"
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
              Showcase your
            </p>{" "}
            Success Story
          </h2>
          <div className={classes.lower}>
            <p className={`${classes.para}${poppinsLight.className}`}>
              Share your story and inspire students
            </p>
            <div className={classes.divider}></div>
            <a
              href="https://forms.gle/mT18384rw7HKJG2e6"
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

        <div className={classes.registrationSection}>
          <h2 className={classes.upper}>
            <p className={`${classes.para}${poppinsLight.className}`}>
              Apply for
            </p>{" "}
            Recognition Award
          </h2>
          <div className={classes.lower}>
            <p className={`${classes.para}${poppinsLight.className}`}>
              Get your hands on a special recognition award
            </p>
            <div className={classes.divider}></div>
            <a
              href="https://forms.gle/gsCc2JB69Wo7KBsT6"
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
              Attend as a
            </p>
            GDSC Lead
          </h2>
          <div className={classes.lower}>
            <p className={`${classes.para}${poppinsLight.className}`}>
              GDSC IUB invites leads all over Pakistan for a collaborative
              session
            </p>
            <div className={classes.divider}></div>
            <a
              href="https://forms.gle/rpwa76CadG5RHfES6"
              target="_blank"
              className={classes.registerButton}
            >
              Register
            </a>
          </div>
        </div>
      </div>
      <div className={classes.buttons}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfB8eHVRVZtIay7cjOMqG24Vrt3OOdfn_5UiVQz_j6ouMvSrA/viewform"
          target="_blank"
          className={classes.registerButton}
        >
          Apply for free Google Certification
        </a>
        <a
          href="https://forms.gle/JeubDLbWG3nbZirT8"
          target="_blank"
          className={classes.registerButton}
        >
          Register Your Company Stall
        </a>
      </div>
    </div>
  );
}
