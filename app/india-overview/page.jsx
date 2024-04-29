
import Image from "next/image"
import INDIAGROWTHSTORY from '../../public/assests/INDIA GROWTH STORY.png'


function page() {
  return (
    <>
      <div className='mx-auto   w-full max-w-screen-2xl '>
        <div className=" mt-40  flex justify-center">
          <section class="hero">
            <div class="left-side-under-hero">
              <h1 className="text-xl md:text-3xl py-2 font-medium">India Growth Story</h1>
              <h2 className="text-lg md:text-xl py-1 font-medium">The India Advantage</h2>
              <p><strong>Fastest Growing Major Economy</strong>: Achieving 7.2% GDP in FY23 and projected to grow at 6.8% in 2024-25 has made India the fastest-growing major economy in the world. India&apos;s GDP currently stands at around US$ 3.7 trillion, and is expected to double to US$ 7 trillion by 2030.</p>
              <p><strong>Growing Disposable Income:</strong> Average household disposable income will grow an average 9.5% annually, from US$ 6,500 in 2022 to US$ 8,300 in 2026 with consumption to reach US$ 1.8 trillion by 2030.</p>
              <p><strong>Huge Untapped Potential:</strong>&nbsp;Per capita furniture spending of only $5 signifies a vast market waiting to be explored.</p>
              <p><strong>Urbanisation: </strong>37% of Indians are currently residing in urban areas and this number is expected to reach ~50% by 2047. MGI projects India&apos;s urban population soaring from 340 million in 2008 to 590 million in 2030.</p>
              <p><strong>Youth Population:</strong> World&apos;s largest Gen-Y population of 808 million youth below 35. With 65% of Indians below the age of 35, and 46.9% below 25, India&apos;s young millions are increasing spending on home improvement.</p>
              <p><strong>Real Estate Growth: </strong>In FY23, India&apos;s residential property market saw a 48% YoY increase with the value of home sales reaching an all-time high of US$ 42 billion.</p>
              <p><strong>Retail &amp; E-tail:</strong> The sector accounts for 10% of the GDP and forecast to touch US$ 1.8 trillion by 2030 with online retail projected to reach US$ 350 billion by 2030.</p>    </div>
            <div class="right-side-under-hero">
              <Image src={INDIAGROWTHSTORY} alt="" loading="lazy" />
            </div>
          </section>
        </div>




      </div>
    </>
  )
}

export default page