
import Image from "next/image"
import aboutwofx from '../../public/assests/aboutwofx.jpg'
import featureicon1 from '../../public/assests/feature-icon-1.png'
import featureicon4 from '../../public/assests/feature-icon-4.png'
import hand from '../../public/assests/hand.png'



function page() {
  return (
    <>
      <div className='mx-auto   w-full max-w-screen-2xl '>
        <div className=" mt-36 flex justify-center">
          <section class="hero">
            <div class="left-side-under-hero">
              <h1 className="text-xl md:text-3xl py-2 font-medium">WOFX - World Furniture Expo</h1>
              <h2 className="text-lg md:text-2xl py-1 font-medium">Your Business Connection</h2>
              <p>WOFX-World Furniture Expo is your gateway to opportunities in the domestic and global furniture &amp; design market. WOFX connects you with the essential tools, resources, and key players you need to navigate the industry&apos;s dynamic landscape.</p>
              <p>WOFX capitalizes on India&apos;s projected 10.9% CAGR furniture market growth (2023-2028) and the significant increase in furniture imports. As a strategic hub for furniture, design, and d&eacute;cor, WOFX positions you to tap into India&apos;s booming market - now the 4th largest furniture consumer globally.</p>
              <p>WOFX will see companies present the latest trends, designs and innovative concepts to a market expected to reach $32.7 billion by 2026 from $23.12 billion in 2022 and where overall imports of wood, wood products &amp; furniture grew 10.4%, from $2.14 billion in 2022 to $2.37 billion in 2023.</p>
              <p>We enable suppliers and brands to showcase products to a global audience of leading brands, buyers, and decision-makers from India, South Asia, and beyond. In India&rsquo;s huge domestic market, WOFX assists participants identify potential business partners by directly connecting them with dealers, distributors, importers, real estate developers, buying houses, retail chains, e-commerce platforms and industry professionals.</p>
              <p>Most importantly, WOFX enables you to forge lasting partnerships, network with industry veterans and thought leaders, sparking collaborations that will propel your business from the regional to the national and from the national to the international stage.</p>
              <p>The show will be held in Mumbai - the financial and retail capital of India to take advantage of ease of travel, communications and logistics for exhibitors from across the globe as well as buyers arriving from different parts of India to connect with global and Indian brands and suppliers.</p>
              <p className="font-bold">WOFX - Connecting you to a World of Furniture</p>
            </div>
            <div class="right-side-under-hero">
              <Image src={aboutwofx} alt="" loading="lazy" />
            </div>
          </section>
        </div>
        <center className="mt-7"><p className="text-xl md:text-3xl py-2 font-bold">In short, WOFX brings you…</p></center>

        <center >
          <div className="w-4/5  mt-5">
            <div className="grid grid-cols-1  md:grid-cols-3 py-3 md:py-6 px-3 md:px-10 gap-10">
              <div>
                <center>
                  <Image src={hand} width={80} alt="Industry Focused Trade Fair" />
                </center>
                <p className="font-bold text-center">Industry Focused Trade Fair</p>
                <p className="text-center py-2">A strategic, dedicated expo specialising in all categories of the furniture & décor industry</p>
              </div>
              <div>
                <center>
                  <Image src={featureicon1} width={80} alt="Industry Focused Trade Fair" />
                </center>
                <p className="font-bold text-center">Business Networking, Forums & Conferences</p>
                <p className="text-center py-2">Interactive business forums, conferences and networking activities for latest market intelligence and strengthen industry connections.</p>
              </div>
              <div>
                <center>
                  <Image src={featureicon4} width={60} alt="Industry Focused Trade Fair" />
                </center><br />
                <p className="font-bold text-center">Gateway to Indian Market</p>
                <p className="text-center py-2">WOFX is your entry to India - one of the most promising and growing furniture markets in the world.</p>
              </div>
            </div>
          </div>
        </center>


      </div>
    </>
  )
}

export default page