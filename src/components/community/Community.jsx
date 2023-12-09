import classes from "./Community.module.css";
import person from "../../../public/frame1.png";
import Image from "next/image";
import { poppins400 } from "@/utils/fonts";

export default function Community() {
  return (
    <div className={classes.community}>
      <div className={classes.content}>
        <h1 className={poppins400.className}>
          Join us at the TechLancerr Summit by The Islamia University of
          Bahawalpur—an opportunity to connect students with industry
          professionals and gurus. We invite tech companies to boost learning
          and employment opportunities in South Punjab!
        </h1>
      </div>
      <div className={classes.imageWrapper}>
        <Image src={person} className={classes.img} />
      </div>
    </div>
  );
}
