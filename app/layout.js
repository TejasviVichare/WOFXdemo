import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import PreHeader from "./components/navbar/Preheader";
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
import NextTopLoader from "nextjs-toploader";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | WOFX Dedicated Furniture Expo, Dedicated Furniture Exhibition, Dedicated Furniture trade show, Dedicated Furniture sourcing show, Dedicated Furniture sourcing Expo, Dedicated Furniture sourcing Exhibition, Dedicated B2B Furniture sourcing Exhibition, Dedicated B2B Furniture sourcing Expo, Dedicated B2B Furniture sourcing show, Furniture Industry Sourcing Marketplace, Furniture Industry Sourcing Exhibition, Institutional Furniture, Plastic Furniture, Kids Furniture, Modular Furniture, Public Furniture, Furniture accessories, School Furniture, College Furniture, Furniture Dealer, Furniture Retailer, Furniture Wholesaler, Furniture Distributor, Architect, Interior Designer, Furniture Importer, Furniture Trader, Furniture Franchise, Furniture Agent, Furniture Sourcing, B2B Furniture Show, Furniture B2B trade show, Furniture Seminar, Furniture Conference, Furniture Interactive Business Forum, Indian Furniture Exhibition, Indian Furniture Expo',
    default: " WOFX Dedicated Furniture Expo, Dedicated Furniture Exhibition, Dedicated Furniture trade show, Dedicated Furniture sourcing show, Dedicated Furniture sourcing Expo, Dedicated Furniture sourcing Exhibition, Dedicated B2B Furniture sourcing Exhibition, Dedicated B2B Furniture sourcing Expo, Dedicated B2B Furniture sourcing show, Furniture Industry Sourcing Marketplace, Furniture Industry Sourcing Exhibition, Institutional Furniture, Plastic Furniture, Kids Furniture, Modular Furniture, Public Furniture, Furniture accessories, School Furniture, College Furniture, Furniture Dealer, Furniture Retailer, Furniture Wholesaler, Furniture Distributor, Architect, Interior Designer, Furniture Importer, Furniture Trader, Furniture Franchise, Furniture Agent, Furniture Sourcing, B2B Furniture Show, Furniture B2B trade show, Furniture Seminar, Furniture Conference, Furniture Interactive Business Forum, Indian Furniture Exhibition, Indian Furniture Expo"
  },
  description: "Furniture, Décor, Design, Furniture Expo, Furniture Exhibition, Furniture trade fair, Furniture fair, World Furniture Expo, Furniture brand, Home Furniture, Office Furniture, Outdoor Furniture, Decorative Furniture, International Furniture Expo, Dedicated Furniture Expo, Dedicated Furniture Exhibition, Dedicated Furniture trade show, Dedicated Furniture sourcing show, Dedicated Furniture sourcing Expo, Dedicated Furniture sourcing Exhibition, Dedicated B2B Furniture sourcing Exhibition, Dedicated B2B Furniture sourcing Expo, Dedicated B2B Furniture sourcing show, Furniture Industry Sourcing Marketplace, Furniture Industry Sourcing Exhibition, Institutional Furniture, Plastic Furniture, Kids Furniture, Modular Furniture, Public Furniture, Furniture accessories, School Furniture, College Furniture, Furniture Dealer, Furniture Retailer, Furniture Wholesaler, Furniture Distributor, Architect, Interior Designer, Furniture Importer, Furniture Trader, Furniture Franchise, Furniture Agent, Furniture Sourcing, B2B Furniture Show, Furniture B2B trade show, Furniture Seminar, Furniture Conference, Furniture Interactive Business Forum, Indian Furniture Exhibition, Indian Furniture Expo",
  keywords: ["Furniture", "Décor", "Design", "Furniture Expo", "Furniture Exhibition", "Furniture trade fair", "Furniture fair", "World Furniture Expo", "Furniture brand", "Home Furniture", "Office Furniture", "Outdoor Furniture", "Decorative Furniture", "International Furniture Expo", "Dedicated Furniture Expo", "Dedicated Furniture Exhibition", "Dedicated Furniture trade show", "Dedicated Furniture sourcing show", "Dedicated Furniture sourcing Expo", "Dedicated Furniture sourcing Exhibition", "Dedicated B2B Furniture sourcing Exhibition", "Dedicated B2B Furniture sourcing Expo", "Dedicated B2B Furniture sourcing show", "Furniture Industry Sourcing Marketplace", "Furniture Industry Sourcing Exhibition", "Institutional Furniture", "Plastic Furniture", "Kids Furniture", "Modular Furniture", "Public Furniture", "Furniture accessories", "School Furniture", "College Furniture", "Furniture Dealer", "Furniture Retailer", "Furniture Wholesaler", "Furniture Distributor", "Architect", "Interior Designer", "Furniture Importer", "Furniture Trader"],
  openGraph: {
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="script" type="text/javascript"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
        </Script>
      </head>
      <body>
        <GoogleTagManager gtmId="GTM-59M74NMS" />
        <div className={inter.className}>
          {/* <PreHeader />
          <Navbar /> */}
          <NextTopLoader
            color="#34d7e3"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #f2f2f3,0 0 5px #f4f4f4"
          />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
