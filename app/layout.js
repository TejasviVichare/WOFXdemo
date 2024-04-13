import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WOFX - World Furniture Expo",
  description: "Furniture show in mumbai maharastra india",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
