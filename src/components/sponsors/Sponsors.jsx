import classes from "./Partners.module.css";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import fps from "../../../public/techlancerr-small.png";

export default function Sponsors() {
  return (
    <div className={classes.partners}>
      <h1 className={poppins.className}>GOLD SPONSORS</h1>
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
