
import Image from "next/image"
import aboutwofx from '../../public/assests/aboutwofx.jpg'


function page() {
  return (
    <>
      <div className='mx-auto   w-full max-w-screen-2xl '>
        <div className="mt-20  flex justify-center">
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




      </div>
    </>
  )
}

export default page