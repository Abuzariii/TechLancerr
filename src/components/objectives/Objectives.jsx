import classes from "./Objectives.module.css";
import { PiBagFill } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoMdFlashlight } from "react-icons/io";
import { GiBrain } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { poppins400 } from "@/utils/fonts";
import { poppins } from "@/utils/fonts";

export default function Objectives() {
  return (
    <div className={classes.objectives}>
      <h1 className={poppins.className}>OBJECTIVES</h1>

      <div className={classes.main}>
        <div>
          <PiBagFill size={50} />
          <h1 className={poppins400.className}>Job Opportunities</h1>
          <p className={poppins400.className}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae nam dolorem eos assumenda, est ratione sequi atque.
            Quaerat, obcaecati aperiam!
          </p>
        </div>
        <div>
          <AiOutlineDollar size={50} />
          <h1 className={poppins400.className}>Financial Empowerment</h1>
          <p className={poppins400.className}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae nam dolorem eos assumenda, est ratione sequi atque.
            Quaerat, obcaecati aperiam!
          </p>
        </div>
        <div>
          <HiOutlineDocumentText size={50} color="white" />
          <h1 className={poppins400.className}>High Success Stories</h1>
          <p className={poppins400.className}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae nam dolorem eos assumenda, est ratione sequi atque.
            Quaerat, obcaecati aperiam!
          </p>
        </div>
        <div>
          <IoMdFlashlight size={50} />
          <h1 className={poppins400.className}>Skill Development</h1>
          <p className={poppins400.className}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae nam dolorem eos assumenda, est ratione sequi atque.
            Quaerat, obcaecati aperiam!
          </p>
        </div>
        <div>
          <GiBrain size={50} />
          <h1 className={poppins400.className}>Marketing Mastery</h1>
          <p className={poppins400.className}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae nam dolorem eos assumenda, est ratione sequi atque.
            Quaerat, obcaecati aperiam!
          </p>
        </div>
        <div>
          <AiOutlineShoppingCart size={50} />
          <h1 className={poppins400.className}>Media Buying </h1>
          <p className={poppins400.className}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae nam dolorem eos assumenda, est ratione sequi atque.
            Quaerat, obcaecati aperiam!
          </p>
        </div>
      </div>
    </div>
  );
}
