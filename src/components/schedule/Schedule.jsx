import classes from "./Schedule.module.css";
import { poppins400 } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import character from "../../../public/characterPhone.png";
import Image from "next/image";

export default function Schedule() {
  return (
    <div className={classes.schedule}>
      <h1 className={poppins.className}>OBJECTIVES</h1>

      <div className={classes.main}>
        <div className={classes.left}>
          <Image src={character} className={classes.character} />
        </div>

        <div className={classes.right}>
          <li className={poppins400.className}>
            Registration and Networking Session
          </li>
          <li className={poppins400.className}>
            Opening Ceremony and Keynote Speech
          </li>
          <li className={poppins400.className}>
            Panel Discussions and Workshops
          </li>
          <li className={poppins400.className}>
            Exhibition Area for Freelancers
          </li>
          <li className={poppins400.className}>
            Networking and Socializing Activities
          </li>
          <li className={poppins400.className}>
            Closing Ceremony and Award Distribution
          </li>
        </div>
      </div>
    </div>
  );
}
