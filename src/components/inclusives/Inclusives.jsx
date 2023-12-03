"use client";
import classes from "./Inclusives.module.css";
import { MdDoubleArrow } from "react-icons/md";

const Inclusives = () => {
  const inclusivesList = [
    "Opening Ceremony and Keynote Speech",
    "Networking Session",
    "Panel Discussions and Workshops",
    "Exhibition Area for Freelancers",
    "Networking and Socializing Activities",
    "Closing Ceremony and Award Distribution",
  ];

  return (
    <div className={classes.schedule}>
      <h1 className={`headingBg`}>EVENT INCLUSIVES</h1>

      <div className={classes.main}>
        <ul>
          {inclusivesList.map((inclusive, index) => (
            <li key={index}>
              <div className={classes.icon}>
                <MdDoubleArrow size={30} />
              </div>
              {inclusive}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inclusives;
