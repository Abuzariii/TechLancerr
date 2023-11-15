import classes from "./Community.module.css";
import person from "../../../public/frame1.png";
import Image from "next/image";
import { poppins400 } from "@/utils/fonts";

export default function Community() {
  return (
    <div className={classes.community}>
      <div className={classes.content}>
        <h1 className={poppins400.className}>
          We are excited to introduce you to an exceptional opportunity to make
          a meaningful impact on the future of our students and the workforce.
          The Islamia University of Bahawalpur is organizing a flagship event,
          TechLancerr Summit. This event is designed to bridge the gap between
          education and industry, offering students valuable insights, career
          opportunities, and a clear path towards their future careers. To
          motivate our youth to shift from primitive methods of freelancing to
          introduce tech in freelancing. We are inviting tech companies to boost
          learning and employment opportunities for tech students in South
          Punjab.
        </h1>
      </div>
      <div className={classes.imageWrapper}>
        <Image src={person} className={classes.img} />
      </div>
    </div>
  );
}
