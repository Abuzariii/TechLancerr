import techlancerrSmall from "public/techlancerr-small.png";
import classes from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.nav}>
        <Image src={techlancerrSmall} height={80} width={250}></Image>
      </div>
    </div>
  );
}
