import Aboutwofx from "./components/aboutwofx/Aboutwofx.jsx";
import Wofxadvantage from "./components/wofxadvantage/Wofxadvantage.jsx";
import CountrySlider from "./components/countryslider/CountrySlider.jsx";
import Industribody from "./components/industribodies/Industribody.jsx";
import InternationPavilion from "./components/Internationpavilion/InternationPavilion.jsx";
import Buyer_lounges from "./components/buyer-lounges/Buyer_lounges.jsx";
import Show_Summery from "./components/show-summery/Show_Summery.jsx";
import FixedSocial from "./components/FixedSocial/FixedSocial.jsx";


export default function Home() {
  return (
    <>
        <div className="videoContainer">
          <div className="bgvideo mx-auto  w-full max-w-screen-2xl">
            <video
              muted
              autoPlay
              playsInline
              loop
             
            >
              <source src="assests/WOFX_4_nifcf6.mp4" type="video/mp4" />
            </video>
            <source src="assests/WOFX_4_nifcf6.mp4" type="video/mp4" />
          </div>
        </div>
    
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
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
      <center>
        <h1 className="text-3xl">Past Featured Brands </h1>
      </center>
      <p>&nbsp;</p>
      <CountrySlider />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <center>
        <h1 className="text-3xl">Industry Bodies Endorsing WOFX</h1>
      </center>
      <p>&nbsp;</p>
      <Industribody />
      <p>&nbsp;</p>
      {/* <Industrypartnerslider /> */}

      {/* <center>
        <h1 className="text-3xl py-6">International Pavilion Organisers </h1>
      </center> */}
      <InternationPavilion />
      <p>&nbsp;</p>
      <FixedSocial />
    </>
  );
}
