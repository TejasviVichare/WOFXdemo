import Image from "next/image";

function page() {
  return (
    <>
      <div className="bg-gray-200 mb-16 w-[80%] text-center m-auto">
        <div className=" p-8 text-4xl"> Exhibitor Testimonials</div>
        <div className=" pb-16">
          <div
            id="row"
            className="md:pl-16 md:pr-16    flex flex-wrap justify-center  "
          >
            <div
              id="card"
              className="flex flex-col md:p-8   p-8 m-3 items-center md:w-[30%]  bg-white rounded-lg align-top"
            >
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/Varun kant.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-xl m-1">VARUN KANT</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                Country Head <br />
                HTL Marketing Pte. Ltd. Singapore
              </div>
              <div className="text-gray-600 text-[14px]">
                Last year we received a great response at WOFX and based on that
                experience we decided to participate again this year at WOFX
                2023. We were happy with the footfall we received at our booth
                during the exhibition from different countries and different
                types of buyers at our booth. Participating in the Design Talk
                and Business Pulse seminars provided actionable insights to
                better understand the India market.
              </div>
            </div>
            <div
              id="card"
              className="flex flex-col  md:w-[30%] p-8 m-3 items-center  bg-white rounded-lg  "
            >
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/venu gopal.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-xl m-1">Venugopal B</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                Chief Business Officer <br />
                Nilkamal Limited, India
              </div>
              <div className="text-gray-600 text-[14px]">
                Participating for the 1st time at WOFX to look for more trade
                partners, appoint distributors & agents, gain market
                insights/industry knowledge and meet existing customers in
                India. We have received quite a few enquiries for our products
                and franchise opportunities and hope it will turn out to be a
                success.
              </div>
            </div>
            <div
              id="card"
              className="flex flex-col md:w-[30%] p-8 m-3 items-center  md:w-[30%] bg-white rounded-lg  "
            >
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/Nilesh gala.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-xl m-1">Nilesh Gala</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                Director <br />
                Trezure Lifestyle Private Limited, India
              </div>
              <div className="text-gray-600 text-[14px]">
                Very pleased with WOFX&apos;s B2B concept! The exclusive focus
                on industry professionals like Dealers, Distributors, Architects
                & Designers enabled deep engagement and fostered valuable
                connections which was a resounding success for our company.
                Kudos to the organizers for such a well-executed and
                strategically planned event.
              </div>
            </div>
          </div>
          <div
            id="row"
            className="md:pl-16 md:pr-16 flex flex-wrap justify-center"
          >
            <div
              id="card"
              className="flex flex-col md:w-[30%]   p-8 m-3 items-center  bg-white rounded-lg"
            >
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/ben chen.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-xl m-1">Ben Chen</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                Business Head of India Region <br />
                DeRucci International Holding Ltd, Hong Kong
              </div>
              <div className="text-gray-600 text-[14px]">
                We exhibited at WOFX not only to meet existing customers but
                also secure new leads in India. The diverse visitor base,
                spanning various industry segments and from international
                markets, made it a truly valuable experience. We also received
                many more than what we expected along with many On-site orders.
              </div>
            </div>
            <div
              id="card"
              className="flex flex-col md:w-[30%]  p-8 m-3 items-center  bg-white rounded-lg"
            >
              {" "}
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/giacomo bardola.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-xl m-1">Giacomo Bardola</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                CEO <br />
                Indocasa Furniture Italy
              </div>
              <div className="text-gray-600 text-[14px]">
                We are exhibiting at the WOFX for the first time and we&apos;re
                connecting with a lot of potential buyers and our Indian
                customers. It is a great opportunity for us to showcase our
                latest collection which has grabbed attention from hotels,
                restaurants, and retailers from across India - not just Mumbai,
                but diverse regions! We had a great experience so far and we are
                planning to be back again next year with a larger space and more
                products.
              </div>
            </div>
            <div
              id="card"
              className="flex flex-col md:w-[30%]  p-8 m-3 items-center  bg-white rounded-lg"
            >
              {" "}
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/Louis.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-xl m-1">Louis Gossart</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                Director <br />
                Voila Paris France
              </div>
              <div className="text-gray-600 text-[14px]">
                This is our first time exhibiting in India. The response has
                exceeded our expectations with excellent buyer footfall at our
                booth comprising industry professionals. We have already
                received quite a few onsite orders and are looking forward to
                coming back to WOFX next year with a bigger booth.
              </div>
            </div>
          </div>
          <div
            id="row"
            className="md:pl-16 md:pr-16 flex flex-wrap justify-center"
          >
            <div
              id="card"
              className="flex flex-col md:w-[30%]  p-8 m-3 items-center  bg-white rounded-lg"
            >
              {" "}
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/Srinivasan.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />{" "}
              </div>
              <div className="text-xl m-1">P. Srinivasan</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                Managing Director <br />
                Comforts International (Assiento) India
              </div>
              <div className="text-gray-600 text-[14px]">
                Launching our new products at WOFX was the right move.
                We&apos;ve met enthusiastic buyers from Mumbai and Gujarat to
                Tamil Nadu, proving the show&apos;s immense reach across the
                country. Unlike other exhibitions, the high-quality B2B crowd at
                WOFX exceeded our expectations. Architects and institutional
                buyers loved our unique chairs, making our participation a
                resounding success and a truly rewarding experience.
              </div>
            </div>
            <div
              id="card"
              className="flex flex-col md:w-[30%]  p-8 m-3 items-center  bg-white rounded-lg"
            >
              {" "}
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/Mushfiqur.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />{" "}
              </div>
              <div className="text-xl m-1">Mushfiqur Rahman</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                Assistant Director <br />
                Hatil Complex Limited Bangladesh
              </div>
              <div className="text-gray-600 text-[14px]">
                We had a phenomenal time over the last few days and have met
                many architects, engineers, developers and potential franchise
                leads. We received an excellent number of visitors at the booth
                with many placing orders onsite. Overall, I would say this is a
                very successful event.
              </div>
            </div>
            <div
              id="card"
              className="flex flex-col md:w-[30%] p-8 m-3 items-center  bg-white rounded-lg"
            >
              {" "}
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/Suwan.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-xl m-1">Suwan Kongkhuthian</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                Managing Director <br />
                Yothaka International Co. Ltd Thailand
              </div>
              <div className="text-gray-600 text-[14px]">
                I am delighted to have the opportunity to participate in WOFX
                once again. The response from all the visitors has been truly
                amazing, and we are thrilled with the positive engagement
                we&apos;ve experienced. What&apos;s even more promising is the
                quality of leads we have received, which show significant
                potential for meaningful partnerships and collaborations. We
                look forward to taking part in the next edition as well.
              </div>
            </div>
          </div>
          <div
            id="row"
            className="md:pl-16 md:pr-16 flex flex-wrap justify-center"
          >
            <div
              id="card"
              className="flex flex-col md:w-[30%] p-8 m-3 items-center ml-auto  mr-auto bg-white rounded-lg"
            >
              <div className="mb-3">
                <Image
                  src="/assests/exhibitor-feedback/Fiona Ong.png"
                  alt="sdjfld"
                  width={120}
                  height={120}
                />
              </div>
              <div className="text-xl m-1">Fiona Ong</div>
              <div className="text-lg font-bold leading-6 m-1 mb-3">
                Marketing Manager <br />
                Vistawood Industries Sdn Bhd (Funbies), Malaysia
              </div>
              <div className="text-gray-600 text-[14px]">
                There are a lot of potential buyers we met during the
                exhibition. We were glad to meet a lot of Importers,
                Wholesalers, Interior Designers who visited our booth and showed
                interest in our products and designs. Looking at the tremendous
                response towards our products we are looking forward to being
                part of WOFX again next year.
              </div>
            </div>
            {/* <div
            id="card"
            className="flex flex-col  p-8 m-3 items-center  bg-white rounded-lg"
          >
            <div className="mb-3">
              <Image
                src="/assests/buyer-feedback/danube home.png"
                alt="sdjfld"
                width={120}
                height={120}
              />
            </div>
            <div className="text-xl m-1">Santosh Sonar</div>
            <div className="text-lg font-bold leading-6 m-1 mb-3">
              Senior Buyer, <br /> Danube Home, UAE
            </div>
            <div className="text-gray-600 text-[14px]">
              As a Furniture buyer from Dubai, I’m always on the lookout for
              fresh perspective and innovative designs. WOFX – World Furniture
              Expo provided that! The mix of international and domestic
              exhibitors was perfect. I met and placed orders with trendy
              furniture designers from Southeast Aisa and with established
              Indian manufacturers. This Expo is a must attend for any serious
              furniture buyer.
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col  p-8 m-3 items-center  bg-white rounded-lg"
          >
            <div className="mb-3">
              <Image
                src="/assests/buyer-feedback/urban ladder.png"
                alt="sdjfld"
                width={120}
                height={120}
              />
            </div>
            <div className="text-xl m-1">Pranal Kapadni</div>
            <div className="text-lg font-bold leading-6 m-1 mb-3">
              Design Consultant, <br /> Urban Ladder, India
            </div>
            <div className="text-gray-600 text-[14px]">
              I thoroughly enjoyed the meticulously organized WOFX 2023 event.
              It stood out as an exemplary showcase of excellence and innovation
              in the furniture industry.
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
