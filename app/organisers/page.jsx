
import Image from "next/image"
import WORLDEXPAGE from '../../public/assests/WORLDEX PAGE 2.png'
import WORLDEX from '../../public/assests/Worldex-Logo.png'



function page() {
  return (
    <>
      <div className='mx-auto   w-full max-w-screen-2xl '>
      <div className=" mt-40">
      <center>
      <Image src={WORLDEX} width={320} height='auto' alt="orgniser Image" />
      </center>
        <div className="flex mt-2 justify-center">
          
          <section class="hero">
            <div class="left-side-under-hero">
              <h1 className="text-xl md:text-3xl py-2 font-medium">Worldex India</h1>
              <p className="font-bold">Your Gateway to Global Trade &amp; International Markets</p>
              <p>Worldex India Exhibition &amp; Promotion Pvt. Ltd. is one of the leading trade promotion organisations in India and South Asia. As a vertically integrated company Worldex offers the complete package from concept creation to final implementation, delivering success through our in-house teams with specialized functional expertise and domain exposure in the field of exhibition operations &amp; management, trade promotion &amp; marketing services and on-ground production.</p>
              <p>Incorporated in 2004, Worldex India is headquartered in Mumbai with a branch office in New Delhi. With over 20 years of global experience, we specialise in bridging the gap between suppliers and buyers by connecting them through our trade initiatives such as international trade shows, summits, forums, buyer-seller meets and inbound &amp; outbound trade missions.</p>
              <p>We facilitate expansion of international trade networks and empower businesses to expand into new, emerging, and developed markets by building dynamic trade platforms that connect them with potential partners and unlock international trade opportunities.</p>
            </div>
            <div class="right-side-under-hero">
              <Image src={WORLDEXPAGE} alt="" loading="lazy" />
            </div>
          </section>
        </div>

      </div>
      <div className="flex  flex-wrap gap-6 justify-center py-8">
        <a className="bg-orange-600 px-3 py-2 text-white rounded hover:bg-black" href="https://www.worldexindia.com/internal/pdf/worldexindia/WORLDEX-INDIA-PROFILE.pdf">DOWNLOAD BROCHURE</a>
        <a className="bg-orange-600 px-3 py-2 text-white rounded hover:bg-black" href="https://www.worldexindia.com/">VISIT WEBSITE</a>
      </div>



      </div>
    </>
  )
}

export default page