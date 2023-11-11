import classes from "./Partners.module.css";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import css from "../../../public/partners/css.png";
import devhack from "../../../public/partners/Devhack.png";
import dsa from "../../../public/partners/DSA-03.png";
import eroz from "../../../public/partners/e Rozgar.png";
import graphicsco from "../../../public/partners/Graphics Co 2nd Logo.png";
import gdsc from "../../../public/partners/Gdsc.png";
import sps from "../../../public/partners/IUB Social Media.png";
import oneAPI from "../../../public/partners/logo-oneapi-rwd.png";
import microsoft from "../../../public/partners/Microsoft.png";
import nftp from "../../../public/partners/NFTP.png";
import pitb from "../../../public/partners/PITB.png";
import rp9 from "../../../public/partners/Regional Plane 9.png";
import stufreelancer from "../../../public/partners/Student Freelancer.png";

export default function Partners() {
  return (
    <div className={classes.partners}>
      <h1 className={poppins.className}>OUR PARTNERS</h1>
      <div className={classes.main}>
        <Image src={pitb} height={120} />
        <Image src={nftp} height={120} />
        <Image src={eroz} height={120} />
        <Image src={rp9} height={120} />
        <Image src={stufreelancer} height={120} />
        <Image src={gdsc} height={120} />
        <Image src={microsoft} height={120} />
        <Image src={css} height={120} />
        <Image src={devhack} height={120} />
        <Image src={graphicsco} height={120} />
        <Image src={dsa} height={120} />
        <Image src={oneAPI} height={120} />
        <Image src={sps} height={120} />
      </div>
    </div>
  );
}
