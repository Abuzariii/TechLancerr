import classes from "./Footer.module.css";
import techlancerrSmall from "public/techlancerr-small.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { poppins400, poppins } from "@/utils/fonts";
import { IoPin } from "react-icons/io5";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.up}>
        <div>
          <h3 className={poppins.className}>Quick Links</h3>
          <p className={poppins400.className}>Contact Us</p>
          <p className={poppins400.className}>Register</p>
          <p className={poppins400.className}>Partners</p>
          <p className={poppins400.className}>Speakers</p>
        </div>

        <div className={classes.iconsDiv}>
          <a
            href="https://www.facebook.com/Iubsps"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook color="white" size="25px" />
          </a>
          <a
            href="https://www.instagram.com/iubsps/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram color="white" size="25px" />
          </a>
          <a href="https://twitter.com/iubsps" target="_blank" rel="noreferrer">
            <FaXTwitter color="white" size="25px" />
          </a>
          <a href="https://twitter.com/iubsps" target="_blank" rel="noreferrer">
            <BsLinkedin color="white" size="25px" />
          </a>
          <a href="https://twitter.com/iubsps" target="_blank" rel="noreferrer">
            <BsTiktok color="white" size="25px" />
          </a>
        </div>
      </div>

      <div className={classes.down}>
        <Image src={techlancerrSmall} height={60} />
        <p className={poppins400.className}>
          <IoPin color="white" size="20px" className={classes.pin} />
          13th December, Main Auditorium, The Islamia University of Bahawalpur
        </p>
      </div>
    </div>
  );
}
