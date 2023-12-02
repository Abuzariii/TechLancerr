import React from "react";
import classes from "./Objectives.module.css";
import { PiBagFill } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoMdFlashlight } from "react-icons/io";
import { GiBrain } from "react-icons/gi";
import { CgCommunity } from "react-icons/cg";
import { poppins400 } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";

const objectivesData = [
  {
    icon: <PiBagFill size={50} />,
    title: "Job Opportunities",
    description:
      "Providing students with rewarding career opportunities to unlock their potential.",
  },
  {
    icon: <AiOutlineDollar size={50} />,
    title: "Financial Empowerment",
    description:
      "Empowering students with the skills and knowledge to achieve financial stability through freelancing.",
  },
  {
    icon: <HiOutlineDocumentText size={50} color="white" />,
    title: "High Success Stories",
    description:
      "Showcasing the achievements of freelancers from South Punjab to inspire and motivate students.",
  },
  {
    icon: <IoMdFlashlight size={50} />,
    title: "Skill Development",
    description:
      "Discussing various skills and technologies crucial for success in the freelancing industry",
  },
  {
    icon: <GiBrain size={50} />,
    title: "Marketing Mastery",
    description:
      "Providing insights into effective freelancing skill marketing and brand building.",
  },
  {
    icon: <CgCommunity size={55} />,
    title: "Community Building",
    description:
      "Develop your own community of like minded people through our platform.",
  },
];

const Objectives = () => {
  return (
    <div className={classes.objectives}>
      <h1 className={`${poppins.className} headingBg`}>OBJECTIVES</h1>
      <div className={classes.main}>
        {objectivesData.map((objective, index) => (
          <div key={index}>
            {objective.icon}
            <h1 className={poppins400.className}>{objective.title}</h1>
            <p className={poppins400.className}>{objective.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
