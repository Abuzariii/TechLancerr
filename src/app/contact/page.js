import React from "react";
import ContactUsForm from "@/components/contactus/ContactUs";
import Navbar from "@/components/banner/navbar/Navbar";

export default function ContactUsPage() {
  return (
    <div>
      <Navbar />
      <h1 className="headingBg">Contact Us</h1>
      <ContactUsForm />
    </div>
  );
}
