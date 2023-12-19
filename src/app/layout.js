import Navbar from "@/components/banner/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "TechLancerr",
  description:
    "TechLancerr is first of its kind event in South Punjab which aims to bridge the gap between freelancing and technology, come join us for an informative session with some of Pakistan's top IT minds and professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}