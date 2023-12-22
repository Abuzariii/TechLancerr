"use client";

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
import Umair from "../../../public/Speakers-Guests/UmairMajeed2.png";
import Sharjeel from "../../../public/Speakers-Guests/sharjeel2.png";
import mahreen from "../../../public/Speakers-Guests/mahreen2.jpeg";
import samad from "../../../public/Speakers-Guests/samad2.jpeg";
import saifal from "../../../public/Speakers-Guests/saifal2.jpeg";
import farhan from "../../../public/Speakers-Guests/farhan2.png";
import annus from "../../../public/Speakers-Guests/AnnusBinZia2.jpg";
import adeel from "../../../public/Speakers-Guests/AdeelShahid2.jpg";
import adnan from "../../../public/Speakers-Guests/AdnanMajeed2.jpg";
import ahmadAslam from "../../../public/Speakers-Guests/AhmadIslamSyan2.jpg";
import aitzaz from "../../../public/Speakers-Guests/AitzazDaud2.jpg";
import asbar from "../../../public/Speakers-Guests/AsbarAli2.jpg";
import hamna from "../../../public/Speakers-Guests/HamnaQaseem2.jpg";
import hamzaRashid from "../../../public/Speakers-Guests/HamzaRashid2.jpg";
import hashirFaiz from "../../../public/Speakers-Guests/HashirFaiz2.jpg";
import hishamSarwar from "../../../public/Speakers-Guests/Hisham2.jpg";
import iqraAwais from "../../../public/Speakers-Guests/IqraAwais2.jpg";
import irfanMalik from "../../../public/Speakers-Guests/IrfanMalik2.jpg";
import javedIqbal from "../../../public/Speakers-Guests/JavedIqbal2.jpg";
import maazAliNadeem from "../../../public/Speakers-Guests/MaazAliNadeem2.jpg";
import muhammadWasif from "../../../public/Speakers-Guests/MohammadWasif2.jpg";
import muhammadAslam from "../../../public/Speakers-Guests/MuhammadAslam2.JPG";
import muneebJaved from "../../../public/Speakers-Guests/MuneebJaved2.jpeg";
import namraNasyr from "../../../public/Speakers-Guests/NamraNasyr2.png";
import naveedIqbal from "../../../public/Speakers-Guests/NaveedIqbal2.jpeg";
import ranaHamzaSaif from "../../../public/Speakers-Guests/RanaHamzaSaif2.jpg";
import rizwanMajeed from "../../../public/Speakers-Guests/RizwanMajeed2.jpg";
import sajidLatif from "../../../public/Speakers-Guests/SajidLatif2.jpg";
import shajeelAfzal from "../../../public/Speakers-Guests/ShajeelAfzal2.jpg";
import sobanTariq from "../../../public/Speakers-Guests/SobanTariq2.jpg";
import sultanMehmood from "../../../public/Speakers-Guests/SultanMehmood2.JPG";
import syedArslan from "../../../public/Speakers-Guests/SyedArsalanAliShah2.jpg";
import taimoorPardesi from "../../../public/Speakers-Guests/TaimoorPardesi2.jpg";
import tanveerNadla from "../../../public/Speakers-Guests/TanveerNadla2.jpeg";
import touseefSaeed from "../../../public/Speakers-Guests/TouseefSaeed2.jpg";
import zahidSaeed from "../../../public/Speakers-Guests/ZahidSaeed2.png";
import naveedAkhtar from "../../../public/Speakers-Guests/naveedAkhtar2.jpeg";

export default function Speakers() {
  return (
    <div className={classes.speakers}>
      <h1 className={`${poppins.className} headingBg`}>SPEAKERS & GUESTS</h1>

      <div className={classes.main}>
        <div className={classes.speaker}>
          <Image src={Zulqarnain} className={classes.spkrImg} />
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
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div>
        <div className={classes.speaker}>
          <Image src={Hamid} className={classes.spkrImg} />
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
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Ammar} className={classes.spkrImg} />
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
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={farhan} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Farhan Ashraf</h3>
            <p className={poppins400.className}>
              DevSecOps Engineer and GitHub Campus Expert
            </p>
            <a
              href="https://www.linkedin.com/in/farhanashrafdev/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={naveedAkhtar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof. Dr Naveed Akhtar</h3>
            <p className={poppins400.className}>
              Vice Chancellor, The Islamia Univeristy of Bahawalpur
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Haroon} className={classes.spkrImg} />
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
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={hishamSarwar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Hisham Sarwar</h3>
            <p className={poppins400.className}>
              Freelancer, Blogger, SEO Specialist, Digital & Social Media
              Marketer
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Shehroz} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Shehroz Ashraf</h3>
            <p className={poppins400.className}>Digital Content Creator</p>
            <a
              href="https://www.linkedin.com/in/shehroz-ashraf-04bab0116"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Tajumal} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Tajumal Hussain</h3>
            <p className={poppins400.className}>CEO The Search Advisors</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={javedIqbal} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Dr Javed Iqbal</h3>
            <p className={poppins400.className}>
              Surgeon and Influential Speaker
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Sharjeel} className={classes.spkrImg} />
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
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={mahreen} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Mahreen Sarwar</h3>
            <p className={poppins400.className}>Graphics and UI/UX Designer</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={samad} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Malik Abdul Samad</h3>
            <p className={poppins400.className}>
              Project Manager @ E-Rozgar IUB
            </p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={saifal} className={classes.spkrImg} />
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
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div> */}

        <div className={classes.speaker}>
          <Image src={annus} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Annus Bin Zia</h3>
            <p className={poppins400.className}>
              Founder & Owner Dee Generations | Top Rated Freelancer
            </p>
            <a
              href="http://www.linkedin.com/in/annusbinzia/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={hashirFaiz} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Hashir Faiz</h3>
            <p className={poppins400.className}>
              SEO Specialist | Top Rated Website Developer
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={sultanMehmood} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Sultan Mehmood</h3>
            <p className={poppins400.className}>
              Founder & CEO of Infinite IT Solutions
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={hamzaRashid} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Hamza Rashid</h3>
            <p className={poppins400.className}>
              Digital Marketing Trainer @ PITB | B2B Marketing Strategist
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={taimoorPardesi} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Taimoor Pardesi</h3>
            <p className={poppins400.className}>
              Youtuber 1 Million+ subscribers | Earning Consultant
              Extraordinaire
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={tanveerNadla} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Tanveer Nadla</h3>
            <p className={poppins400.className}>
              CEO iSkills | Pride of Pakistan
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={aitzaz} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Aitzaz Daud</h3>
            <p className={poppins400.className}>
              Founder TECHKOR | Top-rated seller on Fiverr
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={Umair} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Umair Majeed</h3>
            <p className={poppins400.className}>Founder and CEO Datics</p>
            <a
              href="https://www.linkedin.com/in/umairmajeedrana"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color="black" size="15px" />
            </a>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={touseefSaeed} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Touseed Saeed</h3>
            <p className={poppins400.className}>CEO Pinomz Technologies</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={naveedIqbal} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>M Naveed Iqbal</h3>
            <p className={poppins400.className}>
              CEO Ntech | Founder installcpm.com
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={muhammadAslam} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Muhammad Aslam</h3>
            <p className={poppins400.className}>
              Trainer NFTP | Top rated freelancer
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={muneebJaved} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Muneeb Javed</h3>
            <p className={poppins400.className}>Founder and CEO SkillsUp</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={rizwanMajeed} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Rizwan Majeed</h3>
            <p className={poppins400.className}>Founder Digital South Punjab</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={ranaHamzaSaif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Rana Hamza Saif</h3>
            <p className={poppins400.className}>Youtuber</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={muhammadWasif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Muhammad Wasif</h3>
            <p className={poppins400.className}>
              Youtuber | Photographer | Artist - Art by Wasif
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={ahmadAslam} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Ahmad Islam Syan</h3>
            <p className={poppins400.className}>
              Joint Director Freelancing Wing at PITB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={sajidLatif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Sajid Latif</h3>
            <p className={poppins400.className}>
              Director General e-governance PITB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={maazAliNadeem} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Maaz Ali Nadeem</h3>
            <p className={poppins400.className}>CEO of Vector Inc.</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={irfanMalik} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Irfan Malik</h3>
            <p className={poppins400.className}>
              Founder and CEO of Xeven Solutions
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={shajeelAfzal} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Shajeel Afzal</h3>
            <p className={poppins400.className}>Founder UpAlert | Youtuber</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={sobanTariq} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Soban Tariq</h3>
            <p className={poppins400.className}>
              Founder Lets Uncover | Freelancer | Youtuber | Digital Marketer
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={adeel} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Adeel Shahid</h3>
            <p className={poppins400.className}>
              Co-Founder Audeel | Broadcaster | Video Editor | Audio Engineer
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={syedArslan} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Syed Arslan Ali Shah </h3>
            <p className={poppins400.className}>
              Founder and CEO Connected Pakistan
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={adnan} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Adnan Majeed</h3>
            <p className={poppins400.className}>
              CEO & Founder at Dev Castle | MD Builtin Soft
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={iqraAwais} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Iqra Awais</h3>
            <p className={poppins400.className}>
              CEO IQ Writes, Digital Content Writer
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={namraNasyr} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Namra Nasyr</h3>
            <p className={poppins400.className}>
              Creative Head at Devsinc | Gen AI & Soft Skills Trainer | Film
              Maker
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={zahidSaeed} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Zahid Saeed</h3>
            <p className={poppins400.className}>
              Founder AZ Marketer | Top rated seller | Software Engineer
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={hamna} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Hamna Qasem</h3>
            <p className={poppins400.className}>
              Global Womentech Network Ambassador | WebGPU Hackathon winner
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Asbar Ali</h3>
            <p className={poppins400.className}>
              Digital Marketing Influencer | Commercial Blogger | Consultant &
              Trainer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
