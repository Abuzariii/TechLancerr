import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.formSection}>
        <h2 className={classes.formHeading}>Get in Touch</h2>
        <form className={classes.form}>
          <label className={classes.formLabel} htmlFor="name">
            Name:
          </label>
          <input
            className={classes.formInput}
            type="text"
            id="name"
            name="name"
            required
          />

          <label className={classes.formLabel} htmlFor="email">
            Email:
          </label>
          <input
            className={classes.formInput}
            type="email"
            id="email"
            name="email"
            required
          />

          <label className={classes.formLabel} htmlFor="message">
            Message:
          </label>
          <textarea
            className={classes.formTextarea}
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>

          <button className={classes.formButton} type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className={classes.contactInfoSection}>
        <div className={classes.contactInfo}>
          <FaMapMarkerAlt className={classes.icon} />
          <p>123 Main Street, Cityville</p>
        </div>
        <div className={classes.contactInfo}>
          <FaPhone className={classes.icon} />
          <p>+1 234 567 890</p>
        </div>
        <div className={classes.contactInfo}>
          <FaEnvelope className={classes.icon} />
          <p>info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
