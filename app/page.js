
import Suspencevideo from "./components/video/Suspencevideo.jsx";
import Aboutwofx from "./components/aboutwofx/Aboutwofx.jsx";
import Wofxadvantage from "./components/wofxadvantage/Wofxadvantage.jsx";
import CountrySlider from "./components/countryslider/CountrySlider.jsx";
import Industribody from "./components/industribodies/Industribody.jsx";
import Industrypartnerslider from "./components/industrypartnerslider/Industrypartnerslider.jsx";
import InternationPavilion from "./components/Internationpavilion/InternationPavilion.jsx";
import Buyer_lounges from "./components/buyer-lounges/Buyer_lounges.jsx";
import Show_Summery from "./components/show-summery/Show_Summery.jsx";


export default function Home() {
  return (
    <>
    <Suspencevideo />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <Aboutwofx />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <Show_Summery />
    <p>&nbsp;</p>
    <p>&nbsp;</p>

    <Wofxadvantage />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    
 
    <Buyer_lounges />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <center><h1 className="text-3xl">Past Featured Brands </h1></center>
    <p>&nbsp;</p>
    <CountrySlider />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <center><h1 className="text-3xl">Industry Bodies Endorsing WOFX</h1></center>
    <p>&nbsp;</p>
    <Industribody />
    <p>&nbsp;</p>
    <Industrypartnerslider />
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <center><h1 className="text-3xl py-6">International Pavilion Organizations </h1></center>
    <InternationPavilion />
    <p>&nbsp;</p>
    </>
  );
}
