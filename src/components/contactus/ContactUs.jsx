// ContactForm.jsx
"use client";
import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Show a toast message or a modal here
        toast.success("Thank you for submission!", {
          position: "top-right",
          autoClose: 3000, // close the toast after 3000ms (3 seconds)
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
        });
      } else {
        toast.error("Failed to submit form. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      toast.error("Error submitting form. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Name:
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="phone">
              Phone:
            </label>
            <input
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
              <a
                href="https://maps.app.goo.gl/fSEPSAbKmbmzhpBa7"
                target="_blank"
              >
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
    </>
  );
};

export default ContactForm;
