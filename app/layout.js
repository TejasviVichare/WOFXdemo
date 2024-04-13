import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import PreHeader from "./components/navbar/Preheader";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WOFX - World Furniture Expo",
  description: "Furniture show in mumbai maharastra india",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <Script type="text/javascript"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
        </Script>
      </head>
      <body>
        <div className={inter.className}>
          <PreHeader />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
