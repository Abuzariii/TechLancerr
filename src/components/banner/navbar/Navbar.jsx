import techlancerrSmall from "public/techlancerr-small.png";
import classes from "./Navbar.module.css";
import Image from "next/image";
import { poppinsLight } from "@/utils/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.nav}>
        <Image src={techlancerrSmall} height={60}></Image>

        <div className={classes.pages}>
          <Link href={"/speakers"} className="link">
            <p className={poppinsLight.className}>SPEAKERS</p>
          </Link>

          <Link href={"/sponsors"} className="link">
            <p className={poppinsLight.className}>SPONSORS</p>
          </Link>
          <Link href={"/schedule"} className="link">
            <p className={poppinsLight.className}>SCHEDULE</p>
          </Link>
          <Link href={"/contact"} className="link">
            <p className={poppinsLight.className}>CONTACT US</p>
          </Link>
        </div>

        <button className={poppinsLight.className}>REGISTER</button>
      </div>
    </div>
  );
}
