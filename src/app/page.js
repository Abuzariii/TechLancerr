import Banner from "@/components/banner/Banner";
import Community from "@/components/community/Community";
import Objectives from "@/components/objectives/Objectives";
import Schedule from "@/components/schedule/Schedule";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Community />
      <Objectives />
      <Schedule />
      <Footer />
    </>
  );
}
