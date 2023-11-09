"use client";

import classes from "./Banner.module.css";
import Navbar from "./navbar/Navbar";
import { FaPersonDress } from "react-icons/fa6";
import { poppins, poppinsLight } from "@/utils/fonts";
import { FaRegCalendarAlt } from "react-icons/fa";
import fps from "../../../public/fps.png";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <Navbar></Navbar>

      <div className={classes.main}>
        <div className={classes.left}>
          <p className={poppinsLight.className}>
            <FaRegCalendarAlt className={classes.calendar} />
            13th December, 2023, Islamia University of Bahawalpur
          </p>
          <h1 className={poppins.className}>
            Bridging Tomorrow's Innovators with Today's Tech Titans
          </h1>

          <div className={classes.timer}>
            <div className={poppinsLight.className}>
              <div className={classes.up}>
                <h1>2</h1>
                <h1>9</h1>
              </div>
              <div className={classes.down}>
                <h1>DAYS</h1>
              </div>
            </div>

            <div className={poppinsLight.className}>
              <div className={classes.up}>
                <h1>2</h1>
                <h1>9</h1>
              </div>
              <div className={classes.down}>
                <h1>HOURS</h1>
              </div>
            </div>
            <div className={poppinsLight.className}>
              <div className={classes.up}>
                <h1>2</h1>
                <h1>9</h1>
              </div>
              <div className={classes.down}>
                <h1>MINUTES</h1>
              </div>
            </div>
            <div className={poppinsLight.className}>
              <div className={classes.up}>
                <h1>2</h1>
                <h1>9</h1>
              </div>
              <div className={classes.down}>
                <h1>SECONDS</h1>
              </div>
            </div>
          </div>

          <p className={poppinsLight.className}>
            Organized by
            <Image
              src={fps}
              className={classes.fps}
              height={20}
              width={130}
              style={{ color: "white" }}
            ></Image>
          </p>
        </div>

        <div className={classes.right}>
          <FaPersonDress color="green" size={400} />
        </div>
      </div>
    </div>
  );
}
