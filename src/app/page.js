import Banner from "@/components/banner/Banner";
import Community from "@/components/community/Community";
import Objectives from "@/components/objectives/Objectives";
import Schedule from "@/components/schedule/Schedule";
import speakersData from "@/utils/speakers";
import Speakers from "@/components/speakers/Speakers";
import Partners from "@/components/partners/Partners";
import Footer from "@/components/footer/Footer";
import RegistrationSection from "@/components/registeration/RegistrationSection";

export default function Home() {
  return (
    <>
      <Banner />
      <Community />
      <Objectives />
      <Schedule />
      <Speakers speakers={speakersData} />
      <Partners />
      <RegistrationSection />
      <Footer />
    </>
  );
}
