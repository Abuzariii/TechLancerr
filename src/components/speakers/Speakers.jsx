"use client";

import classes from "./Speakers.module.css";
import { poppins400 } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Zulqarnain from "../../../public/Speakers-Guests/Zulqarnain2.jpeg";
import Hamid from "../../../public/Speakers-Guests/HamidJaved2.jpg";
import Ammar from "../../../public/Speakers-Guests/AmmarJafferi2.jpg";
import Haroon from "../../../public/Speakers-Guests/HaroonRaja2.png";
import Shehroz from "../../../public/Speakers-Guests/ShehrozAshraf2.png";
import Tajumal from "../../../public/Speakers-Guests/TajumalHussain2.png";
import Tauqeer from "../../../public/Speakers-Guests/TauqeerAhmad2.png";
import Umair from "../../../public/Speakers-Guests/UmairMajeed2.png";
import Sharjeel from "../../../public/Speakers-Guests/sharjeel2.png";
import mahreen from "../../../public/Speakers-Guests/mahreen2.jpeg";
import samad from "../../../public/Speakers-Guests/samad2.jpeg";
import saifal from "../../../public/Speakers-Guests/saifal2.jpeg";
import farhan from "../../../public/Speakers-Guests/farhan2.png";

export default function Speakers() {
  const pathname = usePathname();
  return (
    <div className={classes.speakers}>
      <h1 className={`${poppins.className} headingBg`}>SPEAKERS</h1>

      <div className={classes.main}>
        {pathname == "/" && (
          <div className={classes.keynote}>
            <h2 className={poppins400.className}>
              Global Experts in Distributed Work
            </h2>
            <p className={poppins400.className}>
              Join renowned distributed work experts. Our speakers are industry
              practitioners with extensive experience leading, running, and
              managing remote-first and hybrid teams. Over 30 experts will share
              their industry insights, best practices, and learnings with you.
            </p>
            <Link href="/speakers" className="link">
              <button className={poppins400.className}>All Speakers</button>
            </Link>
          </div>
        )}

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

        <div className={classes.speaker}>
          <Image src={Sharjeel} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Sharjeel Yunus</h3>
            <p className={poppins400.className}>
              Senior Software Engineer @ Ensemble Technologies
            </p>
            <a
              href="https://www.linkedin.com/in/sharjeel-yunus"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="18px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={mahreen} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Mahreen Sarwar</h3>
            <p className={poppins400.className}>Graphics and UI/UX Designer</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={farhan} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Farhan Ashraf</h3>
            <p className={poppins400.className}>
              Co-Manager Manager Google Developer Group Cloud Lahore
            </p>
            <a
              href="https://www.linkedin.com/in/farhanashrafdev/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="18px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={samad} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Malik Abdul Samad</h3>
            <p className={poppins400.className}>
              Project Manager @ E-Rozgar IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={saifal} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Saifal Saeed</h3>
            <p className={poppins400.className}>
              CEO Lead Surface, Top Rated Plus Freelancer
            </p>
            <a
              href="https://www.linkedin.com/in/saifal-saeed-501771159/?originalSubdomain=pk"
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
