import techlancerrSmall from "public/techlancerr-small.png";
import classes from "./Navbar.module.css";
import Image from "next/image";
import { poppinsLight } from "@/utils/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.nav}>
        <Image src={techlancerrSmall} height={60} width={180}></Image>

        <div className={classes.pages}>
          <p className={poppinsLight.className}>SPEAKERS</p>
          <p className={poppinsLight.className}>SPONSORS</p>
          <p className={poppinsLight.className}>SCHEDULE</p>
          <p className={poppinsLight.className}>CONTACT US</p>
        </div>

        <button className={poppinsLight.className}>REGISTER</button>
      </div>
    </div>
  );
}
