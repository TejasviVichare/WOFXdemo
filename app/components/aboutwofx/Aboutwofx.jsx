import { Suspense } from "react"
import Videocomponent from "../video/Videocomponent"
import ReactPlayer from "react-player";
import Link from "next/link";


function Aboutwofx() {
  return (
    <>
      <div className='mx-auto   w-full max-w-screen-2xl '>
        <div className="grid grid-cols-1 border  md:grid-cols-2 py-6 md:py-12 px-4 md:px-6 gap-10">
          <div>
            <p className="text-justify"><strong>WOFX - World Furniture Expo</strong> is India &apos; s premier international B2B trade show dedicated to the furniture + design industry wherein the entire furniture + design industry from India and across the globe can converge, connect and collaborate. WOFX is your gateway into the vast Indian furniture & design market. </p>
            <div id="atWofx" className="flex justify-evenly flex-wrap mt-8">
              <div><p style={{ background: "#65C4E1" }}>Accelerate Brand Presence</p></div>
              <div><p style={{ background: "#E63E42" }}>Access Leading Buyers</p></div>
              <div style={{ borderTop: "none" }}><p>Generate Leads</p></div>
              <div style={{ borderTop: "none" }}><p style={{ background: "#65C4E1" }}>Expand Business Network</p></div>
              <div style={{ borderTop: "none" }}><p>Gain Market Insights</p></div>
            </div>
            <div id="aboutwofxbut" className="flex flex-wrap gap-2 justify-center mt-6">
             <Link  href=''><strong>For Booth Participation - <span style={{color:"#65C4E1"}}>Click Here</span></strong></Link>
             <Link  href=''><strong>For Buyer Registration - <span style={{color:"#65C4E1"}}>Click Here</span></strong></Link>
            </div>
          </div>
          <div id="glimpsessVideo">
            <p className="text-xl font-bold text-center">Glimpses of WOFX 2023 </p>
            <Suspense fallback={"Loading...."}>
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://ik.imagekit.io/m8ncplvbq/WhatsApp%20Video%202024-04-13%20at%2012.09.07%20(1)%20(1).mp4?updatedAt=1712997534075;"
                title="Embedded Video"
                allowFullScreen
                style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
              />
            </div>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutwofx