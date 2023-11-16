import Navbar from "@/components/banner/navbar/Navbar";
import PartnerCard from "@/components/partners/partnersCard/PartnerCard";

const Partners = () => {
  return (
    <div>
      <Navbar />
      <h2 className="headingBg">Partners</h2>
      <div>
        <PartnerCard />
      </div>
    </div>
  );
};

export default Partners;

export const metadata = {
  title: "Partners",
  description:
    "Our partners are our success, from student-run clubs to some of the best software companies in Pakistan.",
};
