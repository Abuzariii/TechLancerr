import classes from "./Footer.module.css";
import techalncer from "../../../public/Techlancer logo.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.up}>
        <div>
          <h3>Quick Links</h3>
          <p>Contact Us</p>
          <p>Register</p>
          <p>Partners</p>
          <p>Speakers</p>
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
        </div>
      </div>

      <div className={classes.down}>
        <Image src={techalncer} height={100} />
        <p>IUB Science Promotion Society © 2023</p>
      </div>
    </div>
  );
}
