import { Suspense } from "react"
import Image from "next/image";
import  aboutHomePage from  '../../../public/assests/onhomepage.png'
import Link from "next/link";


function Aboutwofx() {
  return (
    <>
      <div className='mx-auto   w-full max-w-screen-2xl aboutWofxMain '>
        <div className="grid grid-cols-1 border  md:grid-cols-2 py-3 md:py-6 px-4 md:px-6 gap-10">
          <div>
            <p className="text-justify md:pl-8"><strong>WOFX - World Furniture Expo</strong> is India&apos;s premier international B2B trade show dedicated to the furniture + design industry wherein the entire furniture + design industry from India and across the globe can converge, connect and collaborate. WOFX is your gateway into the vast Indian furniture & design market. </p>
            <div id="atWofx" className=" flex flex-wrap gap-4 mt-8">
              <Image src={aboutHomePage} width='90%' height='auto' alt="something" />
              
            </div>
    
          </div>
          <div id="glimpsessVideo">
        
            <div className="pt-2">
            <Suspense fallback={"Loading...."}>
            <div className="rounded" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
              <iframe className="rounded"
                src="https://www.youtube.com/embed/iFVLLPsucw4?si=Kmvv0uqbZPv6H9Zx"
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