import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div>

      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
