import Navbar from "@/components/banner/navbar/Navbar";
import Register from "@/components/Pages/register/Register";

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <Register />
    </div>
  );
};

export default RegisterPage;

export const metadata = {
  title: "Register",
  description:
    "Register for this event and grab a one time opportunity to partner, learn, network and grow.",
};
