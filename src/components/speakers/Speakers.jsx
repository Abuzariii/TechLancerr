import classes from "./Speakers.module.css";
import { poppins400 } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";
import speaker1 from "public/speaker1.png";
import Image from "next/image";

export default function Speakers() {
  return (
    <div className={classes.speakers}>
      <h1 className={poppins.className}>SPEAKERS</h1>

      <div className={classes.main}>
        <div className={classes.keynote}>
          <h2 className={poppins400.className}>
            Global Experts in Distributed Work
          </h2>
          <p className={poppins400.className}>
            Join renowned distributed work experts​. Our speakers are industry
            practitioners with extensive experience leading, running, and
            managing remote-first and hybrid teams. Over 50 experts will share
            their industry insights, best practices, and learnings with you.
          </p>
          <button className={poppins400.className}>All Speakers</button>
        </div>

        <div className={classes.speaker}>
          <Image src={speaker1} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Siraj Munj</h3>
            <p className={poppins400.className}>MD PakWheels</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={speaker1} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Siraj Munj</h3>
            <p className={poppins400.className}>MD PakWheels</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={speaker1} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Siraj Munj</h3>
            <p className={poppins400.className}>MD PakWheels</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={speaker1} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Siraj Munj</h3>
            <p className={poppins400.className}>MD PakWheels</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={speaker1} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Siraj Munj</h3>
            <p className={poppins400.className}>MD PakWheels</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={speaker1} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Siraj Munj</h3>
            <p className={poppins400.className}>MD PakWheels</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={speaker1} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Siraj Munj</h3>
            <p className={poppins400.className}>MD PakWheels</p>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={speaker1} className={classes.spkrImg} height={250} />
          <div>
            <h3 className={poppins.className}>Siraj Munj</h3>
            <p className={poppins400.className}>MD PakWheels</p>
          </div>
        </div>
      </div>
    </div>
  );
}
