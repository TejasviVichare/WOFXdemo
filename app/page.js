import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Wofxadvantage from "./components/wofxadvantage/Wofxadvantage.jsx";

import Industribody from "./components/industribodies/Industribody.jsx";
import Buyer_lounges from "./components/buyer-lounges/Buyer_lounges.jsx";
import FixedSocial from "./components/FixedSocial/FixedSocial.jsx";
import DropBox from './components/utils/DropBox.jsx';
import Margue from './components/marque/Margue.jsx';
import DropBoxPSR from './components/utils/DropBoxPSR.jsx';
const Industrypartnerslider = dynamic(() => import('./components/industrypartnerslider/Industrypartnerslider.jsx'), {
  suspense: true,
});
const Aboutwofx = dynamic(() => import('./components/aboutwofx/Aboutwofx.jsx'), {
  suspense: true,
});

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


      <Suspense fallback={<div>Loading...</div>}>
        <Aboutwofx />
      </Suspense>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <Wofxadvantage />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <center>
        <h1 className="text-3xl">Brands Connect @WOFX 2024 </h1>
      </center>
      <p>&nbsp;</p>
       <div className='relative -z-40'>
       <Margue />
       </div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <Buyer_lounges title="Buyer Registration Form"
     registrationLink="https://www.bee2bee.asia/wofx-2025/buyer-registration"/>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <center>
        <h3 className="text-3xl">Industry Bodies Endorsing WOFX</h3>
      </center>
      <p>&nbsp;</p>
      <Industribody />
      <p>&nbsp;</p>
      <h3 className='text-center mb-6'>Supporting Organsiations</h3>
      <Suspense fallback={<div>Loading...</div>}>
        <Industrypartnerslider />
      </Suspense>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <div className='relative'>
        <div className='fixed bottom-[95px] right-5'>
          <DropBoxPSR />
        </div>
      </div>
      <div className='relative'>
        <div className='fixed bottom-5 right-5'>
          <DropBox />
        </div>
      </div>
      <FixedSocial />
    </>
  );
}
