
import Image from "next/image"
import NDIADESIGNDECOMARKET from '../../public/assests/NDIA DESIGN & DECOR MARKET.png'


function page() {
  return (
    <>
      <div className='mx-auto   w-full max-w-screen-2xl '>
        <div className="mt-40  flex justify-center">
          <section class="hero">
            <div class="left-side-under-hero">
              <h1 className="text-xl md:text-3xl py-2 font-medium">Indian Furniture Market</h1>



              <p>India&apos;s Home Decor Market (Home Textile, Floor Covering, Furniture) is estimated to be $33.45 billion in 2023 and is expected to reach $40.98 billion by 2028, growing at 4.14% CAGR.</p>
              <p>Interior design is booming due to the growing Indian real estate market, growing population, rising income levels, and urbanization.</p>
              <p>Designing services are also in high demand due to the influence of social media, and changes in the living standards and lifestyle of the people.</p>
              <p>People are choosing theme-based designs for their commercial and residential spaces and fusions of global influences like Mediterranean &amp; European styles mixed with ethnic Indian designs are increasingly common nowadays.</p>
              <p>While the overall India d&eacute;cor market is growing at 20%, the market in South India is developing at a faster clip of 25 to 30%.</p>
              <p>The home category&apos;s three broad segments - furnishings, furniture and d&eacute;cor, have been growing positively with a minor shift of market share from furniture to d&eacute;cor in the last few years due to more spend on upgrading interiors &amp; d&eacute;cor to revamp the look of homes and offices. India is one of the fastest growing markets for home furnishings in Asia-Pacific.</p>
              <p>Rising demand for home decor products such as bed linen products, wall hangings, rugs &amp; carpets, etc., along with increasing demand for handcrafted products is boosting the country&apos;s home furnishing market.</p>

            </div>
            <div class="right-side-under-hero">
              <Image src={NDIADESIGNDECOMARKET} alt="" loading="lazy" />
            </div>
          </section>
        </div>




      </div>
    </>
  )
}

export default page