
import Suspencevideo from "./components/video/Suspencevideo.jsx";
import Aboutwofx from "./components/aboutwofx/Aboutwofx.jsx";
import Wofxadvantage from "./components/wofxadvantage/Wofxadvantage.jsx";
import Buyertestimonial from "./components/buyertestimonial/Buyertestimonial.jsx";
import Exhibitortestinomial from "./components/exhibitortestimonial/Exhibitortestinomial.jsx";
import CountrySlider from "./components/countryslider/CountrySlider.jsx";
import Industribody from "./components/industribodies/Industribody.jsx";
import Industrypartnerslider from "./components/industrypartnerslider/Industrypartnerslider.jsx";
import InternationPavilion from "./components/Internationpavilion/InternationPavilion.jsx";

export default function Home() {
  return (
    <>
    <Suspencevideo />
    <Aboutwofx />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <Wofxadvantage />

    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <center><h1 className="text-2xl font-extrabold">Past Featured Brands </h1></center>
    <p>&nbsp;</p>
    <CountrySlider />
    <center><h1 className="text-2xl font-extrabold">Industry Bodies Endorse WOFX </h1></center>
    <p>&nbsp;</p>
    <Industribody />
    <p>&nbsp;</p>
    <Industrypartnerslider />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
 
    <center><h1 className="text-2xl font-extrabold">International Pavilion organizations </h1></center>
    <InternationPavilion />
    <p>&nbsp;</p>
    </>
  );
}
