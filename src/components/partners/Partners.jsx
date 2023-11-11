import classes from "./Partners.module.css";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import fps from "../../../public/techlancerr-small.png";

export default function Partners() {
  return (
    <div className={classes.partners}>
      <h1 className={poppins.className}>OUR PARTNERS</h1>
      <div className={classes.main}>
        <Image src={fps} height={80} />
        <Image src={fps} height={80} />
        <Image src={fps} height={80} />
        <Image src={fps} height={80} />
        <Image src={fps} height={80} />
        <Image src={fps} height={80} />
      </div>
    </div>
  );
}
