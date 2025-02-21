import FactsheetMb from "../components/factsheetMobile/FactsheetMb";
import Image from "next/image"
import icon from '../../public/assests/Icon.png'


export const metadata = {
  title: "Factsheet",
};
function page() {
  return (
    <>
      <div className="mx-auto   w-full max-w-screen-2xl mt-36 pb-20">
        <div className="md:flex justify-center hidden ">
          <table align="center" className="w-[75%]  valign-top ">
            <tbody className="valign-top">
              <tr>
                <td
                  colSpan={3}
                  className="p-6  text-3xl font-semibold"
                  align="center"
                  cellpadding="0"
                >
                  Factsheet
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-400  leading-8">
                <td className="pt-2 pb-2">
                  <p> Exhibition Title </p>
                </td>
                <td className="pt-2 pb-2" colSpan={2}>
                  <p>WOFX - World Furniture Expo</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-400  leading-8">
                <td className="pt-2 pb-2">
                  <p> Date </p>
                </td>
                <td className="pt-2 pb-2" colSpan={2}>
                  <p>4-5-6 December 2025</p>
                </td>
              </tr>

              <tr className="border-b-[1px] border-gray-400  leading-8">
                <td style={{ verticalAlign: "top" }}>
                  <p> Exhibition Timings </p>
                </td>
                <td>
                  <p>Fair Date</p>
                  <p>4 Dec (Thu.)</p>
                  <p>5 Dec (Fri.)</p>
                  <p>6 Dec (Sat.)</p>
                </td>
                <td>
                  <p>Opening Hours</p>
                  <p>10.00 a.m. - 6.00 p.m.</p>
                  <p>10.00 a.m. - 6.00 p.m.</p>
                  <p>10.00 a.m. - 5.00 p.m.</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-400 p-4  ">
                <td className="pt-2 pb-2">
                  <p> Venue</p>
                </td>
                <td className="pt-2 pb-2" colSpan={2}>
                  <p>Bombay Exhibition Center, Mumbai, India</p>
                </td>
                <td />
              </tr>
              <tr className="border-b-[1px] border-gray-400   ">
                <td className="pt-2 pb-2">
                  <p> Organizer </p>
                </td>
                <td className="pt-2 pb-2" colSpan={2}>
                  <p> Worldex India Exhibition &amp; Promotion Pvt. Ltd.</p>
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-400   ">
                <td className="pt-2 pb-2">
                  <p> Format </p>
                </td>
                <td>
                  <p className="pt-2 pb-2">Business to Business</p>
                </td>
                <td />
              </tr>
              <tr className="border-b-[1px] border-gray-400 leading-8  ">
                <td
                  style={{ verticalAlign: "top" }}
                  className="pt-2 pb-2 valign-top"
                >
                  <p> Major Exhibit Categories</p>
                </td>
                <td className="pt-2 pb-2">
                  <ul className="list-ul">
                    <p>
                      <bold>FURNITURE</bold>
                    </p>
                    <p>• &nbsp; Home</p>
                    <p>• &nbsp; Office</p>
                    <p>• &nbsp; Outdoor</p>
                    <p>• &nbsp; Kitchen & Wardrobes</p>
                    <p>• &nbsp; Kids</p>
                  </ul>
                </td>
                <td className="pt-2 pb-2">
                  <ul className="list-ul">
                    <br />
                  
                    <p>• &nbsp; Handcrafted</p>

                    <p>• &nbsp; School/College</p>
                    <p>• &nbsp; Institutional</p>
                    <p>• &nbsp; Sleep Essentials</p>
              
                  
                  </ul>
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-400  leading-8 ">
                <td style={{ verticalAlign: "top" }} className="pt-2 pb-2">
                  Major Exhibiting Countries/ Regions
                </td>
                <td className="pt-2 pb-2">
                  <ul className="list-ul">
                    <p>• &nbsp; India</p>
                    <p>• &nbsp; Sri Lanka</p>
                    <p>• &nbsp; Bangladesh</p>
                    <p>• &nbsp; Malaysia</p>
                    <p>• &nbsp; Thailand</p>
                    <p>• &nbsp; Indonesia</p>
                    <p>• &nbsp; Vietnam</p>
                    <p>• &nbsp; Philippines</p>
                  </ul>
                </td>
                <td className="pt-2 pb-2">
                  <ul className="list-ul">
                    <p>• &nbsp; Hong Kong</p>
                    <p>• &nbsp; China</p>
                    <p>• &nbsp; Singapore</p>
                    <p>• &nbsp; Turkiye</p>
                    <p>• &nbsp; Italy</p>
                    <p>• &nbsp; France</p>
                    <p>• &nbsp; USA</p>
                    <p>amongst others</p>
                  </ul>
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-400  leading-8 ">
                <td className="pt-2 pb-2" style={{ verticalAlign: "top" }}>
                  Thematic Zones
                </td>
                <td className="pt-2 pb-2" colSpan={2}>
                  <ul className="list-ul">
                    <p>• &nbsp; Avante Garde - Hall of Fame</p>
                    <p>• &nbsp; Grand Galleria - Hall of Elegance</p>
                    <p>• &nbsp; Design Edge - Hall of Innovations</p>
                    <p>• &nbsp; ASEAN Panorama</p>
                    <p>• &nbsp; SOI - States of India</p>
                  </ul>
                </td>
                <td />
              </tr>
              <tr className="border-b-[1px] border-gray-400 leading-8  ">
                <td style={{ verticalAlign: "top" }} className="pt-2 pb-2">
                  Conferences, Design Ideas and Product Launches
                </td>
                <td className="pt-2 pb-2" colSpan={2}>
                  <ul className="list-ul">
                     <p>• &nbsp; Smart Talk</p>
                    <p>• &nbsp; Business Pulse</p>
                    <p>• &nbsp; F+D Awards</p>
                    <p>• &nbsp; FIRM</p>
                  </ul>
                </td>
                <td />
              </tr>
              <tr className="border-b-[1px] border-gray-400 leading-8  ">
                <td style={{ verticalAlign: "top" }} className="pt-2 pb-2">
                  Buyer Admission
                </td>
                <td className="pt-2 pb-2" colSpan={2}>
                  <ul className="list-ul">
                    <p>
                      • &nbsp; Entry strictly for trade buyers on production of
                      valid business cards.
                      <br /> &nbsp; &nbsp; (Pre-register online or
                      onsite)
                    </p>
                    <p>• &nbsp; Rights of admission reserved.</p>
                    <p>• &nbsp; No registration Fee</p>
                    <p>• &nbsp; Entry below 18 years will not be permitted.</p>
                    <p>• &nbsp; No retail sale.</p>
                  </ul>
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-400 leading-8  ">
                <td style={{ verticalAlign: "top" }}>
                  <p>
                    Buyer Profile <br />
                    
                  </p>
                </td>
               
              </tr>
              <tr>
              <td colSpan={3}>
                  <table
                    width="100%"
                    border={1}
                    className=" align-top border"
                    style={{
                      borderCollapse: "collapse",
                      verticalAlign: "top",
                      border: "1px solid gray",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <tbody>
                      <tr className="border-b-[1px] border-gray-400 pt-2 pb-2">
                        <td className="text-center p-2  w-1/5">
                          <img
                            src="/assests/blLogo1.png"
                            alt="Dealers"
                            style={{ width: 120 }}
                          />
                        </td>
                        <td className="p-2 text-center   w-1/5">
                          <img
                            src="/assests/blLogo4.png"
                            alt="Retailers"
                            style={{ width: 120 }}
                          />
                        </td>
                        <td className="p-2 text-center   w-1/6">
                          <img
                            src="/assests/blLogo3.png"
                            alt="Franchisees"
                            style={{ width: 120 }}
                          />
                        </td>
                        <td className="p-2 text-center   w-1/4">
                          <img
                            src="/assests/blLogo2.png"
                            alt="Architects"
                            style={{ width: 120 }}
                          />
                        </td>
                        <td className="p-2 text-center   w-1/5">
                          <img
                            src="/assests/Investor-link.png"
                            alt="Architects"
                            style={{ width: 120 }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-1/5 " style={{ verticalAlign: "top"}}>
                        <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span> Dealers</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Distributors</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Wholesalers</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Importers</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>
                            Trading &amp; Buying Houses
                          </div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Agents</div>
                     
                        </td>
                        <td className="w-1/5 " style={{  verticalAlign: "top" }}>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Retailers</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>E-Tailers</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Large Format Retailers</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Online Traders</div>
                        </td>
                        <td className="w-1/6 " style={{ verticalAlign: "top"}}>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Franchisees</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Entrepreneurs</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Agents</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Consultants</div>
                        </td>
                        <td className="w-1/4 " style={{ verticalAlign: "top"}}>
                          <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Project Management Consultant</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Architects & Interior Designers</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Real Estate Developers</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>HORECA</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Corporate Sourcing Heads</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Institutional</div>
                        </td>
                        <td className="w-1/5 " style={{verticalAlign: "top"}}>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Private Equity</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Family Offices</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Venture Capital</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Investment Consultants</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>International Companies</div>
                          <div className="flex items-center gap-1"><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Corporates</div>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="border-b-[1px] border-gray-400 leading-8  ">
                <td className="pt-2 pb-2">Website</td>
                <td className="pt-2 pb-2">
                  <p>
                    <a
                      className="text-black no-underline"
                      href="www.wofxworldexpo.com"
                    >
                      www.wofxworldexpo.com
                    </a>{" "}
                  </p>
                </td>
                <td />
              </tr>
              <tr className="border-b-[1px] border-gray-400 leading-8  ">
                <td style={{ verticalAlign: "top" }} className="pt-2 pb-2">
                  <p className="sp-line">
                    For Registrations, <br /> Enquiries contact
                  </p>
                </td>
                <td className="pt-2 pb-2">
                  <p className="sp-line">
                    Rampat Gupta <br />
                    <span>
                      <a className="contactDetail" href="tel: +91 9819567106">
                        +91 9819567106
                      </a>
                    </span>
                    <br />
                    <span>
                      <a
                        className="contactDetail mail"
                        href="mailto: rampatgupta@worldexindia.com"
                      >
                        rampatgupta@worldexindia.com
                      </a>
                    </span>
                  </p>
                </td>
                <td className="pt-2 pb-2">
                  <p className="sp-line">
                    Haider Ali Mirza <br />
                    <span>
                      <a className="contactDetail" href="tel: +91 9619095955">
                        +91 9619095955
                      </a>
                    </span>
                    <br />
                    <span>
                      <a
                        className="contactDetail mail"
                        href="mailto:haider@worldexindia.com"
                      >
                        haider@worldexindia.com
                      </a>
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div  className="flex justify-center  md:hidden">
        
                    <FactsheetMb />
        </div>

      </div>
    
      <center>
        <a
          className="hover:bg-white hover:text-black"
          href="/assests/pdf/WOFX-Fact-Sheet-2025.pdf"
          target="_blank"
        >
          <button className="bg-black text-white p-2 hover:bg-gray-500 hover:text-white ">
            Download
          </button>
        </a>
      </center>

      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </>
  );
}

export default page;
