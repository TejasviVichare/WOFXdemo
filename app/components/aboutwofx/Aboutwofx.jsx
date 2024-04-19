import { Suspense } from "react"

import Link from "next/link";


function Aboutwofx() {
  return (
    <>
      <div className='mx-auto   w-full max-w-screen-2xl aboutWofxMain '>
        <div className="grid grid-cols-1 border  md:grid-cols-2 py-6 md:py-12 px-4 md:px-6 gap-10">
          <div>
            <p className="text-justify"><strong>WOFX - World Furniture Expo</strong> is India &apos; s premier international B2B trade show dedicated to the furniture + design industry wherein the entire furniture + design industry from India and across the globe can converge, connect and collaborate. WOFX is your gateway into the vast Indian furniture & design market. </p>
            <div id="atWofx" className=" flex flex-wrap gap-4 mt-8">
              <div><p><span>&#x27A4; &nbsp;</span> Accelerate <strong className="text-xl">Brand Presence</strong></p></div>
              <div><p><span>&#x27A4; &nbsp;</span> Access Leading Buyers</p></div>
              <div><p><span>&#x27A4; &nbsp;</span> Generate Leads</p></div>
              <div><p><span>&#x27A4; &nbsp;</span> Expand <strong className="text-xl">Business Network</strong></p></div>
              <div><p><span>&#x27A4; &nbsp;</span> Gain Market Insights</p></div>
            </div>
            <div id="aboutwofxbut" className="flex flex-wrap gap-4 justify-center mt-10">
             <Link className="BLButton"  href=''><div>For Booth Participation - <span>Click Here</span></div></Link>
             <Link  className="BLButton" href=''><div>For Buyer Registration - <span>Click Here</span></div></Link>
            </div>
          </div>
          <div id="glimpsessVideo">
            <p className="text-2xl text-center">Glimpses of WOFX 2023 </p>
            <div className="pt-4">
            <Suspense fallback={"Loading...."}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/jCSVmpPf03E?si=RkXa8Bldjdp6JDKK"
                title="Embedded Video"
                allowFullScreen
                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
              />
            </div>
            </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutwofx