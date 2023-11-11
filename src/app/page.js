import Banner from "@/components/banner/Banner";
import Objectives from "@/components/objectives/Objectives";
import Partners from "@/components/partners/Partners";
import Speakers from "@/components/speakers/Speakers";
import speakersData from "@/utils/speakers";

export default function Home() {
  return (
    <>
      <Banner />
      <Objectives />
      <Speakers speakers={speakersData} />
      <Partners />
    </>
  );
}
