import classes from "./Community.module.css";
import person from "../../../public/frame1.png";
import Image from "next/image";
import { poppins400 } from "@/utils/fonts";

export default function Community() {
  return (
    <div className={classes.community}>
      <div className={classes.left}>
        <h1 className={poppins400.className}>
          6,500 AFFILIATES, ADVERTISERS, ECOM SELLERS, NETWORKS, AND TECH
          SUPPLIERS WILL GATHER IN LAS VEGAS AT AFFILIATE SUMMIT WEST 2024, THE
          BIGGEST AFFILIATE MARKETING EVENT IN THE WORLD. ASW IS THE HOME OF
          AFFILIATE MARKETING... IN FACT OF AFFILIATES PREFER ASW OVER ANY OTHER
          EVENT*. SEE YOU THERE.
        </h1>
      </div>
      <div className={classes.right}>
        <Image src={person} className={classes.img} />
      </div>
    </div>
  );
}
