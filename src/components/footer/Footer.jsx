import classes from "./Footer.module.css";
import techlancerrSmall from "public/techlancerr-small.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { poppins400, poppins } from "@/utils/fonts";
import { IoPin } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.up}>
        <div>
          <h3 className={poppins.className}>Quick Links</h3>
          <Link href={"/contact"} className="link">
            <p className={poppins400.className}>Contact Us</p>
          </Link>
          <Link href={"/partners"} className="link">
            <p className={poppins400.className}>Partners</p>
          </Link>
          <Link href={"/speakers"} className="link">
            <p className={poppins400.className}>Speakers</p>
          </Link>
        </div>

        <div className={classes.iconsDiv}>
          <a
            href="https://www.facebook.com/techlancerrr"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook color="white" size="25px" />
          </a>
          <a
            href="https://www.instagram.com/techlancerr"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram color="white" size="25px" />
          </a>
          <a
            href="https://twitter.com/techlancerr"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter color="white" size="25px" />
          </a>
          <a
            href="https://www.linkedin.com/company/techlancerr"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin color="white" size="25px" />
          </a>
          <a
            href="https://www.tiktok.com/@techlancerr"
            target="_blank"
            rel="noreferrer"
          >
            <BsTiktok color="white" size="25px" />
          </a>
        </div>
      </div>

      <div className={classes.down}>
        <Image src={techlancerrSmall} height={60} />
        <p className={poppins400.className}>
          <IoPin color="white" size="25px" className={classes.pin} />
          27th December, Main Auditorium, The Islamia University of Bahawalpur
        </p>
      </div>
    </div>
  );
}
