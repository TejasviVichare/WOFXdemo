import Image from "next/image";
import whyvisit from "../../public/assests/whyvisit.jpg";

export const metadata = {
  title: "Why Visit",
};
function page() {
  return (
    <>
      <div className="mx-auto   w-full max-w-screen-2xl ">
        <div className=" mt-40 flex justify-center">
          <section style={{ flexDirection: "row-reverse" }} class="hero">
            <div class="left-side-under-hero">
              <h1 className="text-xl md:text-3xl py-2 font-medium">Discover</h1>
              <h2 className="text-lg md:text-xl py-1 font-medium">
                WOFX - World Furniture Expo
              </h2>
              <p>
                WOFX is where furniture meets opportunity. Experience a dynamic
                hub of global brands, international suppliers, a curated mix of
                contemporary &amp; traditional design, and boundless potential.
              </p>
              <p>Grab the chance to experience the magic of WOFX to&hellip;</p>
              <p>
                <strong>Explore a spectrum of possibilities:</strong> Explore
                diverse furniture styles, materials and innovations from across
                the globe.
              </p>
              <p>
                <strong>Create lasting connections:</strong> Network with key
                industry players, build strategic partnerships, and expand your
                business footprint from national to international.
              </p>
              <p>
                <strong>Global Gateway: </strong>Discover premium products,
                cutting-edge innovations, and a global design language from
                countries across ASEAN, China, Europe, and more at this dynamic
                hub for networking and collaboration.
              </p>
              <p>
                <strong>Unleash your creative potential:</strong> Gain valuable
                insights and discover new trends from renowned industry thought
                leaders at Business Pulse, Design Talk and Design Walk events to
                ignite your creative thinking and take your vision to the next
                level.
              </p>
              <p>
                <strong>Discover international pavilions:</strong> Connect with
                global brands and discover a diverse range of products.
              </p>
              <p>
                <strong>Stellar brands:</strong> Discover unique offerings from
                leading domestic and international brands.
              </p>
            </div>
            <div class="right-side-under-hero">
              <Image src={whyvisit} alt="" loading="lazy" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default page;
