"use client";

import { poppins, poppins400 } from "@/utils/fonts";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import classes from "./Speakers.module.css";

import adnan from "../../../public/Speakers-Guests/AdnanMajeed2.jpg";
import ahmadAslam from "../../../public/Speakers-Guests/AhmadIslamSyan2.jpg";
import aitzaz from "../../../public/Speakers-Guests/AitzazDaud2.jpg";
import Ammar from "../../../public/Speakers-Guests/AmmarJafferi2.jpg";
import annus from "../../../public/Speakers-Guests/AnnusBinZia2.jpg";
import asbar from "../../../public/Speakers-Guests/AsbarAli2.jpg";
import Hamid from "../../../public/Speakers-Guests/HamidJaved2.jpg";
import hamna from "../../../public/Speakers-Guests/HamnaQaseem2.jpg";
import hamzaRashid from "../../../public/Speakers-Guests/HamzaRashid2.jpg";
import Haroon from "../../../public/Speakers-Guests/HaroonRaja2.png";
import hashirFaiz from "../../../public/Speakers-Guests/HashirFaiz2.jpg";
import iqraAwais from "../../../public/Speakers-Guests/IqraAwais2.jpg";
import muhammadAslam from "../../../public/Speakers-Guests/MuhammadAslam2.JPG";
import muneebJaved from "../../../public/Speakers-Guests/MuneebJaved2.jpeg";
import naveedIqbal from "../../../public/Speakers-Guests/NaveedIqbal2.jpeg";
import ranaHamzaSaif from "../../../public/Speakers-Guests/RanaHamzaSaif2.jpg";
import rizwanMajeed from "../../../public/Speakers-Guests/RizwanMajeed2.jpg";
import sajidLatif from "../../../public/Speakers-Guests/SajidLatif2.jpg";
import Shehroz from "../../../public/Speakers-Guests/ShehrozAshraf2.png";
import sultanMehmood from "../../../public/Speakers-Guests/SultanMehmood2.JPG";
import syedArslan from "../../../public/Speakers-Guests/SyedArsalanAliShah2.jpg";
import taimoorPardesi from "../../../public/Speakers-Guests/TaimoorPardesi2.jpg";
import Tajumal from "../../../public/Speakers-Guests/TajumalHussain2.png";
import tanveerNadla from "../../../public/Speakers-Guests/TanveerNadla2.jpeg";
import touseefSaeed from "../../../public/Speakers-Guests/TouseefSaeed2.jpg";
import Umair from "../../../public/Speakers-Guests/UmairMajeed2.png";
import zahidSaeed from "../../../public/Speakers-Guests/ZahidSaeed2.png";
import Zulqarnain from "../../../public/Speakers-Guests/Zulqarnain2.jpeg";
import ahmadRaza from "../../../public/Speakers-Guests/ahmadRaza-modified.jpg";
import akhtar from "../../../public/Speakers-Guests/akhtarAli-modified.jpeg";
import amir from "../../../public/Speakers-Guests/amirFaisal-modified.jpeg";
import amjad from "../../../public/Speakers-Guests/amjad-modified.jpeg";
import awais from "../../../public/Speakers-Guests/awais-modified.jpg";
import batool from "../../../public/Speakers-Guests/batoolShamim-modified.jpg";
import burhan from "../../../public/Speakers-Guests/burhanTahir-modified.jpg";
import chandio from "../../../public/Speakers-Guests/chandio-modified.jpeg";
import dost from "../../../public/Speakers-Guests/dost-modified.jpg";
import farhan from "../../../public/Speakers-Guests/farhan2.png";
import haris from "../../../public/Speakers-Guests/harisYounas-modified.jpg";
import jawad from "../../../public/Speakers-Guests/jawadIqbal-modified.png";
import kainaat from "../../../public/Speakers-Guests/kainaat-modified.jpeg";
import khalidMansoor from "../../../public/Speakers-Guests/khalidMansoor-modified.jpg";
import mahreen from "../../../public/Speakers-Guests/mahreen2.jpeg";
import mansoorRana from "../../../public/Speakers-Guests/mansoorRana.png";
import umer from "../../../public/Speakers-Guests/muhammadUmer-modified.jpeg";
import nadeemAkhtar from "../../../public/Speakers-Guests/nadeemAkhtar-modified.jpg";
import nasir from "../../../public/Speakers-Guests/nasir.jpeg";
import naveedAkhtar from "../../../public/Speakers-Guests/naveedAkhtar2.jpeg";
import robina from "../../../public/Speakers-Guests/rubina.jpg";
import saeedAhmad from "../../../public/Speakers-Guests/saeedAhmad-modified.jpeg";
import buzdar from "../../../public/Speakers-Guests/saeedBuzdar-modified.jpeg";
import saifal from "../../../public/Speakers-Guests/saifal2.jpeg";
import salahuddin from "../../../public/Speakers-Guests/salahuddin-modified.jpeg";
import shafiqurRehman from "../../../public/Speakers-Guests/shafiqurRehman-modified.jpg";
import shahzadJameel from "../../../public/Speakers-Guests/shahzadJameel-modified.jpg";
import Sharjeel from "../../../public/Speakers-Guests/sharjeel2.png";
import shazia from "../../../public/Speakers-Guests/shazia-modified.jpg";
import sohailIdrees from "../../../public/Speakers-Guests/sohailIdrees-modified.jpg";
import sulemanAli from "../../../public/Speakers-Guests/sulemanAli-modified.jpeg";
import tanveerHussain from "../../../public/Speakers-Guests/tanveer.jpeg";
import tauqeer from "../../../public/Speakers-Guests/tauqeer.png";
import waleed from "../../../public/Speakers-Guests/waleed-modified.jpg";
import waseemkhan from "../../../public/Speakers-Guests/waseemkhan-modified.JPG";
import zafarAli from "../../../public/Speakers-Guests/zafarAli-modified.jpg";
import ziaAhmad from "../../../public/Speakers-Guests/ziaAhmad-modified.jpg";
import samad from "../../../public/Speakers-Guests/samad2.jpeg";
import shoaibManzoor from "../../../public/Speakers-Guests/shoaibManzoor-modified.jpeg";
import haroon from "../../../public/Speakers-Guests/haroon-modified.jpeg";
import haseeb from "../../../public/Speakers-Guests/haseeb-modified.jpeg";
import amnaAshraf from "../../../public/Speakers-Guests/amnaAshraf-modified.jpeg";
import zainKhalid from "../../../public/Speakers-Guests/zainKhalid-modified.jpeg";
import adnanBukhari from "../../../public/Speakers-Guests/adnanBukhari-modified.jpeg";
import abdulRauf from "../../../public/Speakers-Guests/abdulRauf-modified.jpeg";
import faheem from "../../../public/Speakers-Guests/faheem-modified.jpeg";

export default function Speakers() {
  return (
    <div className={classes.speakers}>
      <h1 className={`${poppins.className} headingBg`}>SPEAKERS & GUESTS</h1>

      <div className={classes.main}>
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
          <Image src={faheem} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Dr Faheem Mushtaq</h3>
            <p className={poppins400.className}>
              Assosiate Professor, Dept of Information Technology
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={abdulRauf} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Abdul Rauf</h3>
            <p className={poppins400.className}>
              Director Student Affairs, The Islamia University of Bahawalpur
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={adnanBukhari} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Dr Adnan Bukhari</h3>
            <p className={poppins400.className}>
              Additional DSA, IUB Student Societies
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={haseeb} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Mr Haseeb Ali</h3>
            <p className={poppins400.className}>
              Co-Advisor, IUB Freelancing Promotion Society
            </p>
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

        <div className={classes.speaker}>
          <Image src={zainKhalid} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Mr Muhammad Zain Khalid</h3>
            <p className={poppins400.className}>
              Co-Advisor, IUB Freelancing Promotion Society
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={amnaAshraf} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Ms Amna Ashraf</h3>
            <p className={poppins400.className}>
              Co-Advisor, IUB Freelancing Promotion Society
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={haroon} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Mr Haroon Mallana</h3>
            <p className={poppins400.className}>
              Co-Advisor, IUB Freelancing Promotion Society
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={shoaibManzoor} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Mr Shoaib Manzoor</h3>
            <p className={poppins400.className}>
              Mentor, Manager Regional Plan 9, Bahawalpur
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={dost} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Dost Muhammad Khan</h3>
            <p className={poppins400.className}>
              Dean Faculty of Computing, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={shazia} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Shazia Anjum</h3>
            <p className={poppins400.className}>
              Dean Faculty of Chemical & Biological Sciences, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={tanveerHussain} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>
              Prof Dr Tanveer Hussain Turrabi
            </h3>
            <p className={poppins400.className}>
              Dean Faculty of Agriculture and Environment, IUB
            </p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={samad} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Rao Imran Habib</h3>
            <p className={poppins400.className}>Dean Faculty of Law, IUB</p>
          </div>
        </div> */}

        <div className={classes.speaker}>
          <Image src={buzdar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Saeed Ahmad Buzdar</h3>
            <p className={poppins400.className}>
              Dean Faculty of Physical & Mathematical Sciences, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={jawad} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Jawad Iqbal</h3>
            <p className={poppins400.className}>
              Dean Faculty of Management Sciences & Commerce, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={robina} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Robina Bhatti</h3>
            <p className={poppins400.className}>
              Dean Faculty of Social Sciences, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={shafiqurRehman} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>
              Prof Dr Sheikh Shafiqur Rehman
            </h3>
            <p className={poppins400.className}>
              Dean Faculty of Islamic & Arabic Studies, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={chandio} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Jawed Hassan Chandio</h3>
            <p className={poppins400.className}>
              Dean Faculty of Arts & Languages, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={amjad} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Muhammad Amjad</h3>
            <p className={poppins400.className}>
              Dean Faculty of Engineering, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={khalidMansoor} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Khalid Mansoor</h3>
            <p className={poppins400.className}>
              Dean Faculty of Veternary & Animal Sciences, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={saeedAhmad} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Saeed Ahmad</h3>
            <p className={poppins400.className}>
              Dean Faculty of Medicine & Allied Health Sciences, IUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={akhtar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Akhtar Ali</h3>
            <p className={poppins400.className}>
              Dean Faculty of Online & Distance Education, IUB
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
          <Image src={rizwanMajeed} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Rizwan Majeed</h3>
            <p className={poppins400.className}>Founder Digital South Punjab</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={nasir} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Muhammad Nasir</h3>
            <p className={poppins400.className}>Additional Director IT</p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={sajidLatif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Mr Zawar Hussain</h3>
            <p className={poppins400.className}>Chairman Dept. of Statistics</p>
          </div>
        </div> */}

        {/* <div className={classes.speaker}>
          <Image src={sajidLatif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Dr Humera Arshad</h3>
            <p className={poppins400.className}>
              Chairperson Dept. of Computer Sciences
            </p>
          </div>
        </div> */}

        {/* <div className={classes.speaker}>
          <Image src={sajidLatif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Prof Dr Waqqar Aslam</h3>
            <p className={poppins400.className}>
              Chairman Dept of Information Security
            </p>
          </div>
        </div> */}

        {/* <div className={classes.speaker}>
          <Image src={sajidLatif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Dr Akmal Khan</h3>
            <p className={poppins400.className}>
              Incharge Dept. of Data Sciences
            </p>
          </div>
        </div> */}

        {/* <div className={classes.speaker}>
          <Image src={sajidLatif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Dr Wareesa Sharif</h3>
            <p className={poppins400.className}>
              Incharge Dept. of Artificial Intelligence
            </p>
          </div>
        </div> */}

        <div className={classes.speaker}>
          <Image src={nadeemAkhtar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Dr Nadeem Akhtar</h3>
            <p className={poppins400.className}>
              Chairman Dept of Software Engineering
            </p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={sajidLatif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Dr Ghulam Mustafa</h3>
            <p className={poppins400.className}>
              Chairman Dept. of Mathematics
            </p>
          </div>
        </div> */}

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
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Asbar Ali</h3>
            <p className={poppins400.className}>
              Digital Marketing Influencer | Commercial Blogger | Consultant &
              Trainer
            </p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Mr Mansoor Rana</h3>
            <p className={poppins400.className}>Director Operations BixiSoft</p>
          </div>
        </div> */}

        <div className={classes.speaker}>
          <Image src={mansoorRana} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Mansoor Rana</h3>
            <p className={poppins400.className}>
              Director Operations, BixiSoft
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={batool} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Ms Batool Shamim</h3>
            <p className={poppins400.className}>Managing Director BixiSoft</p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Muhammad Shafeeque</h3>
            <p className={poppins400.className}>
              CEO at RipeSol, Web Dev Trainer at E-Rozgar IUB
            </p>
          </div>
        </div> */}

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Zeeshan Ali</h3>
            <p className={poppins400.className}>
              NFTP Trainer, Top Rated Seller, CEO Remotivex
            </p>
          </div>
        </div> */}

        <div className={classes.speaker}>
          <Image src={zafarAli} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Zafar Ali</h3>
            <p className={poppins400.className}>
              CEO Letrank, SEO Expert, Trainer at NFTP
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
          <Image src={waseemkhan} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Waseem Khan</h3>
            <p className={poppins400.className}>
              Founder of Women in Tech RYK, South Punjab IT Expo
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={shahzadJameel} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Shehzad Jameel</h3>
            <p className={poppins400.className}>
              CTO at Eyecomm Technologies and GoodShopPK
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={awais} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Muhammad Awais</h3>
            <p className={poppins400.className}>CEO & Founder at Devicon</p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={haris} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Haris Younas</h3>
            <p className={poppins400.className}>
              CEO at RevoTech Learning, Resident Engineer at IG Prions Punjab
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={sohailIdrees} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Sohail Idrees</h3>
            <p className={poppins400.className}>
              Web Dev Trainer at South Punjab Institute of Skills Development
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={ziaAhmad} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Zia Ahmad</h3>
            <p className={poppins400.className}>
              Mobile App Developer, App Store Optimizer Expert
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={amir} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Aamir Faisal</h3>
            <p className={poppins400.className}>
              Co-Founder and CTO at XpertSoft
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={burhan} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Burhan Tahir</h3>
            <p className={poppins400.className}>
              Founder at RYK Freelancers HUB
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={sulemanAli} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Suleman Ali</h3>
            <p className={poppins400.className}>
              Owner and CEO Deminum, Sr Software Engineer at Khazana Enterprise
            </p>
          </div>
        </div>

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
          <Image src={tauqeer} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Tauqeer Ahmad</h3>
            <p className={poppins400.className}>
              Founder and Cheif Executive Officer at Enigmatix Pvt Ltd.
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
        </div>

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
          <Image src={ranaHamzaSaif} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Rana Hamza Saif</h3>
            <p className={poppins400.className}>Youtuber</p>
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
          <Image src={syedArslan} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Syed Arslan Ali Shah </h3>
            <p className={poppins400.className}>
              Founder and CEO Connected Pakistan
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
          <Image src={ahmadRaza} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Ahmad Raza</h3>
            <p className={poppins400.className}>
              Founder & CEO at DTOUB Limited
            </p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={hamna} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Ameer Hamza</h3>
            <p className={poppins400.className}>
              Top Rated Freelancer, Trainer at NFTP
            </p>
          </div>
        </div> */}

        <div className={classes.speaker}>
          <Image src={kainaat} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Kainaat Rajput</h3>
            <p className={poppins400.className}>
              Co-Founder and CEO of E-Universe, Executive Member Chamber of
              Women Empowerment
            </p>
          </div>
        </div>

        <div className={classes.speaker}>
          <Image src={salahuddin} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Salahuddin Rao</h3>
            <p className={poppins400.className}>
              Founder E-universe, Member of IT & Freelancing Society
            </p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Shaikh Rizwan</h3>
            <p className={poppins400.className}>
              CEo & Managing Director HPattern
            </p>
          </div>
        </div> */}

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>M Imran Hashmi</h3>
            <p className={poppins400.className}>
              Blogger, SEO Expert, CEO i-Tech
            </p>
          </div>
        </div> */}

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Waleed Raza</h3>
            <p className={poppins400.className}>
              Top Rated Plus Freelancer, CEO Bootcampofskills
            </p>
          </div>
        </div> */}

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Zeeshan Ali</h3>
            <p className={poppins400.className}>
              NFTP Trainer, Top Rated Seller, CEO Remotivex
            </p>
          </div>
        </div> */}

        <div className={classes.speaker}>
          <Image src={umer} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Muhammad Umer</h3>
            <p className={poppins400.className}>
              Co-founder QIWHOST, Cloud Computing Expert
            </p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Raza Ahmad Sukhera</h3>
            <p className={poppins400.className}>
              Chief Industry Development Officer, Pakistan Software Export Board
            </p>
          </div>
        </div> */}

        <div className={classes.speaker}>
          <Image src={waleed} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Muhammad Waleed Hassan</h3>
            <p className={poppins400.className}>
              AWS AI & ML Scholar, Google & IBM Certified Data Scientist
            </p>
          </div>
        </div>

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Hamid Mahmood Abbasi</h3>
            <p className={poppins400.className}>
              CEO and Founder Graphisco Creative Studio
            </p>
          </div>
        </div> */}

        {/* <div className={classes.speaker}>
          <Image src={asbar} className={classes.spkrImg} />
          <div>
            <h3 className={poppins.className}>Mr Abubakar</h3>
            <p className={poppins400.className}>UI/UX Designer</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
