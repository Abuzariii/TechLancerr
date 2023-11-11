import Speakers from "@/components/speakers/Speakers";
import speakersData from "@/utils/speakers";
import styles from "./page.module.css";

function page() {
  return (
    <div>
      <Speakers speakers={speakersData} />
    </div>
  );
}

export default page;
