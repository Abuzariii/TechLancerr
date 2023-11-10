import Banner from "@/components/banner/Banner";
import Objectives from "@/components/objectives/Objectives";
import Speakers from "@/components/speakers/Speakers";
import speakersData from "@/utils/SpeakersData";

export default function Home() {
  return (
    <>
      <Banner />
      <Objectives />
      <Speakers speakers={speakersData} />
    </>
  );
}
