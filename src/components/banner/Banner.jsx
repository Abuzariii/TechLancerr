"use client";

import classes from "./Banner.module.css";
import code from "../../../public/code.png";
import { poppins, poppinsLight } from "@/utils/fonts";
import { FaRegCalendarAlt } from "react-icons/fa";
import fps from "../../../public/fps.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import iub from "../../../public/partners/iub.png";
import dsa from "../../../public/partners/DSA.png";

export default function Banner() {
  const [timerData, setTimerData] = useState([
    { value: ["0", "0"], label: "DAYS" },
    { value: ["0", "0"], label: "HOURS" },
    { value: ["0", "0"], label: "MINUTES" },
    { value: ["0", "0"], label: "SECONDS" },
  ]);

  useEffect(() => {
    const endDate = new Date("2023-12-27T10:30:00"); // Your specified end date

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimerData([
          { value: days.toString().padStart(2, "0").split(""), label: "DAYS" },
          {
            value: hours.toString().padStart(2, "0").split(""),
            label: "HOURS",
          },
          {
            value: minutes.toString().padStart(2, "0").split(""),
            label: "MINUTES",
          },
          {
            value: seconds.toString().padStart(2, "0").split(""),
            label: "SECONDS",
          },
        ]);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.banner}>
      <Navbar isIndexPage />

      <div className={classes.main}>
        <div className={classes.left}>
          <p className={poppinsLight.className}>
            <FaRegCalendarAlt className={classes.calendar} />
            27th December, 2023, The Islamia University of Bahawalpur
          </p>
          <h1 className={poppins.className}>
            Bridging Tomorrow's Innovators with Today's Tech Titans
          </h1>

          <div className={classes.timer}>
            {timerData.map((data, index) => (
              <div className={poppinsLight.className} key={index}>
                <div className={classes.up}>
                  {data.value.map((value, i) => (
                    <h1 key={i}>{value}</h1>
                  ))}
                </div>
                <div className={classes.down}>
                  <h1>{data.label}</h1>
                </div>
              </div>
            ))}
          </div>

          <div className={classes.organizer}>
            <p className={poppinsLight.className}>
              Organized by
              <Image
                src={fps}
                className={classes.fps}
                height={23}
                style={{ color: "white" }}
              />
            </p>
            <Image src={iub} height={60} className={classes.iubLogos} />
            <Image src={dsa} height={60} className={classes.iubLogos} />
          </div>
        </div>

        <div className={classes.right}>
          <Image src={code} className={classes.code} />
        </div>
      </div>
    </div>
  );
}
