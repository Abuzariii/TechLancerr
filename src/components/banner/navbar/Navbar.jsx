"use client";

import techlancerrSmall from "public/techlancerr-small.png";
import techlancerrWhite from "public/techlancerr-small- white.svg";
import classes from "./Navbar.module.css";
import Image from "next/image";
import { poppinsLight } from "@/utils/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ isIndexPage }) {
  const pathname = usePathname();
  const logoSrc = isIndexPage ? techlancerrSmall : techlancerrWhite;
  return (
    <div
      className={`${classes.navbar} ${
        isIndexPage ? "" : classes.otherPagesNavbar
      }`}
    >
      <div className={classes.nav}>
        <Link href="/" passHref>
          <Image src={logoSrc} height={60} alt="Techlancerr Logo" />
        </Link>

        <div className={classes.pages}>
          <Link href="/speakers" className="link">
            <p className={poppinsLight.className}>REGISTER</p>
          </Link>

          <Link href="/partners" className="link">
            <p className={poppinsLight.className}>PARTNERS</p>
          </Link>
          <Link href="/contact" className="link">
            <p className={poppinsLight.className}>CONTACT US</p>
          </Link>
        </div>

        {pathname !== "/register" && (
          <Link href="/#registrationSection">
            <button className={poppinsLight.className}>REGISTER</button>
          </Link>
        )}
      </div>
    </div>
  );
}
