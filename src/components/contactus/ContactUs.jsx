// ContactForm.jsx

import React from "react";
import styles from "./ContactUs.module.css";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">
            Message:
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            rows="8"
            required
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className={styles.contactInfo}>
        <h3>Contact Information</h3>
        <div className={styles.card}>
          <FaMapLocationDot size={90} className={styles.icon} />
          <h4>Address</h4>
          <p>
            <a href="https://maps.app.goo.gl/fSEPSAbKmbmzhpBa7" target="_blank">
              Auditorium, IUB BJC
            </a>
          </p>
        </div>
        <div className={styles.card}>
          <FaPhone size={90} className={styles.icon} />
          <h4>Contact No</h4>
          <p>
            <a href="tel:+92 303 0797702">+92 303 0797702</a>
          </p>
        </div>
        <div className={styles.card}>
          <IoMailOpen size={90} className={styles.icon} />
          <h4>Email</h4>
          <p>
            <a href="mailto:techlancerr@iub.edu.pk" target="_blank">
              techlancerr@iub.edu.pk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
