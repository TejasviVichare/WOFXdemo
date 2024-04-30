import Image from "next/image";
import INDIAFURNITUREMARKET from "../../public/assests/INDIA FURNITURE MARKET.png";

export const metadata = {
  title: "Furniture Market",
};

function page() {
  return (
    <>
      <div className="mx-auto   w-full max-w-screen-2xl ">
        <div className=" mt-40 flex justify-center">
          <section class="hero">
            <div class="left-side-under-hero">
              <h1 className="text-xl md:text-3xl py-2 font-medium">
                Indian Furniture Market
              </h1>

              <p>
                The Indian furniture market shows enormous promise for global
                furniture suppliers and brands. Growing at 10.9% p.a., India is
                the 4th largest furniture consuming country and 14th largest
                furniture market globally.
              </p>
              <p>
                Per capita income is expected to rise by 2.5x from 2016-2027
                while consumption will triple to $4 trillion by 2025 as rising
                affluence drives changes in consumer behaviour and spending
                patterns.
              </p>
              <p>
                At the same time, the proportion of nuclear families who spend
                30% more than joint families is expected to reach 74% by 2025.
              </p>
              <p>
                Other than a blip due to Covid, this growth is expected to
                continue into the future supported by a strong economy, real
                estate, IT &amp; service sectors and increasing affluence in
                urban &amp; rural areas.
              </p>
              <p>
                The home d&eacute;cor market is also expanding year on year. As
                per Statista, revenue in the Indian home d&eacute;cor market
                amounts to $1.69 billion in 2023. The market is expected to grow
                annually at 6.08% CAGR from 2023 to 2028.
              </p>
              <p>
                India&rsquo;s real estate market is one of the most dynamic and
                fastest-growing in the world. According to a recent industry
                report, there will be $1 trillion of real estate sales in India
                by 2030, contributing 13% to the GDP by 2025. This is supported
                by the housing market which is expected to continue its momentum
                with sales growing 9% y-o-y in 2023-24, supported by stable and
                healthy demand according to India Ratings and Research.
              </p>
              <p>
                According to CBRE South Asia, major hospitality projects are
                underway in India and looking to add over 12,000 rooms in 2023
                itself. CBRE also states that the sector is projected to attract
                over $2.3 billion in investments over the next 2-5 years.
              </p>
              <p>
                The continued demand for high-end and bespoke design within the
                construction, hospitality, commercial and residential sector is
                a testament to the resilience of the Indian market. The fact
                that India&rsquo;s real estate and hospitality industry is
                making a comeback is a positive sign for the furniture and
                design industry.
              </p>
              <p>
                <strong>India Market Size:</strong> Valued at $23.12 billion in
                2022, India&rsquo;s furniture market is anticipated to grow at
                10.9% CAGR during 2023-28 to reach $32.7 billion by 2026.
              </p>
              <p>
                <strong>Growth in Furniture Rentals:</strong> India&rsquo;s
                furniture rental industry valued currently at $2 billion is
                estimated to skyrocket by 2030.
              </p>
              <p>
                <strong>Home D&eacute;cor:</strong> The d&eacute;cor category
                alone is expected to cross $5.62 billion by 2022-23, from $735
                million in 2019-20.
              </p>
              <p>
                <strong>E-Commerce Market:</strong> Indian online home sales
                (incl. furniture sales) expected to grow 18% p.a. from $2.3
                billion in 2020 to $5.2 billion in 2025.
              </p>
              <p>
                <strong>Global Imports:</strong> Imports of wood, wood products
                and wood furniture from around the world jumped 10.4%, from
                $2.14 billion in 2022 to $2.37 billion in 2023. Similarly,
                imports of wood, wood products and wood furniture from ASEAN
                countries viz. Vietnam, Indonesia, Malaysia, Singapore &amp;
                Thailand jumped 42.59% to $626.54 million in 2023 from $439.38
                million in 2022.
              </p>
              <p>
                As projects and travel in the region are significantly
                upscaling, the confidence for the industry is growing. Likewise,
                the hospitality and retail industry is moving into a new era,
                catering to the next generation of consumers, with more global
                perspectives on design while also addressing the technological
                and sustainability evolution. WOFX will help suppliers to
                capitalise on India&rsquo;s market demands. As a show singularly
                dedicated to the Indian furniture and design industry, WOFX is
                currently the best regional business platform for this industry.
              </p>
            </div>
            <div class="right-side-under-hero">
              <Image src={INDIAFURNITUREMARKET} alt="" loading="lazy" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default page;
