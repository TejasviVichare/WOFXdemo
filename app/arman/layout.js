import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import PreHeader from "./component/PreheaderNew";

export default function HomeLayout({ children }) {
  return (
    <div>
      <PreHeader />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
