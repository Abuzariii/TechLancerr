import Banner from "@/components/banner/Banner";
import Community from "@/components/community/Community";
import Objectives from "@/components/objectives/Objectives";
import Inclusives from "@/components/inclusives/Inclusives";
import speakersData from "@/utils/speakers";
import Speakers from "@/components/speakers/Speakers";
import Partners from "@/components/partners/Partners";
import RegistrationSection from "@/components/registration/RegistrationSection";

export default function Home() {
  return (
    <>
      <Banner />
      <Community />
      <Inclusives />
      <Objectives />
      <Speakers speakers={speakersData} />
      <Partners />
      <RegistrationSection />
    </>
  );
}
