import Navbar from "@/components/banner/navbar/Navbar";
import Speakers from "@/components/speakers/Speakers";
import speakersData from "@/utils/speakers";

function page() {
  return (
    <div>
      <Navbar />
      {" "}
      <Speakers speakers={speakersData} />
    </div>
  );
}

export default page;

export const metadata = {
  title: "Speakers",
  description:
    "Meet our speakers, some of the top IT professionals nationwide, from tech makers to e com sellers, entrepreneurs and student success stories, you have a chance to meet em all",
};
