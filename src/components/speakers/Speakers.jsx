import classes from "./Speakers.module.css";
import { poppins400 } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";

import Zulqarnain from "../../../public/Speakers-Guests/Zulqarnain2.jpeg";
import Hamid from "../../../public/Speakers-Guests/HamidJaved2.jpg";
import Ammar from "../../../public/Speakers-Guests/AmmarJafferi2.jpg";
import Haroon from "../../../public/Speakers-Guests/HaroonRaja2.png";
import Shehroz from "../../../public/Speakers-Guests/ShehrozAshraf2.png";
import Tajumal from "../../../public/Speakers-Guests/TajumalHussain2.png";
import Tauqeer from "../../../public/Speakers-Guests/TauqeerAhmad2.png";
import Umair from "../../../public/Speakers-Guests/UmairMajeed2.png";

export default function Speakers() {
  return (
    <div className={classes.speakers}>
      <h1 className={`${poppins.className} headingBg`}>SPEAKERS</h1>

      <div className={classes.main}>
        <div className={classes.keynote}>
          <h2 className={poppins400.className}>
            Global Experts in Distributed Work
          </h2>
          <p className={poppins400.className}>
            Join renowned distributed work experts. Our speakers are industry
            practitioners with extensive experience leading, running, and
            managing remote-first and hybrid teams. Over 50 experts will share
            their industry insights, best practices, and learnings with you.
          </p>
          <button className={poppins400.className}>All Speakers</button>
        </div>

        <div className={classes.speaker}>
          <Image src={Zulqarnain} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Zulqarnain Abbas</h3>
            <p className={poppins400.className}>
              SAPM E-commerce, Ministry of Commerce
            </p>
            <a
              href="https://www.linkedin.com/in/zulqarnainabbasofficial/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="18px" />
            </a>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={Hamid} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Hamid Javed</h3>
            <p className={poppins400.className}>
              Digital Marketing Expert and Trainer
            </p>
            <a
              href="https://www.linkedin.com/in/hamidjavedch"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="18px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Ammar} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Ammar Jafri</h3>
            <p className={poppins400.className}>
              Director General Center of Information Technology
            </p>
            <a
              href="https://www.linkedin.com/in/ammar-jaffri-3510217"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="18px" />
            </a>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={Umair} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Umair Majeed</h3>
            <p className={poppins400.className}>Founder and CEO Datics</p>
            <a
              href="https://www.linkedin.com/in/umairmajeedrana"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="18px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Shehroz} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Shehroz Ashraf</h3>
            <p className={poppins400.className}>Digital Content Creator</p>
            <a
              href="https://www.linkedin.com/in/shehroz-ashraf-04bab0116"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="18px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Tajumal} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Tajumal Hussain</h3>
            <p className={poppins400.className}>CEO The Search Advisors</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Haroon} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Haroon Q Raja</h3>
            <p className={poppins400.className}>
              Founder Happy Cloud, SVP PAFLA
            </p>
            <a
              href="https://www.linkedin.com/in/hqraja/?originalSubdomain=pk"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="18px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Tauqeer} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Tauqeer Ahmad</h3>
            <p className={poppins400.className}>Founder and CEO Enigmatix</p>
            <a
              href="https://www.linkedin.com/in/tauqeer-ahmed-51b97a28"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="18px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
