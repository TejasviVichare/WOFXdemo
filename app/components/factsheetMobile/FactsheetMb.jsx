import React from "react";
import Image from "next/image"
import icon from '../../../public/assests/Icon.png'

function FactsheetMb() {
  return (
    <div className="w-full ">
   
        <center>
          <p className="font-bold text-2xl ">Factsheet</p>
          </center>
      <br />
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2 ">
        <div>
          <span className="font-semibold">Exhibition Title</span>
        </div>
        <div>
          <span> WOFX - World Furniture Expo</span>
        </div>
      </div>
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Date</span>
        </div>
        <div>
          <span>5-6-7 December 2024</span>
        </div>
      </div>
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Exhibition Timings</span>
        </div>
        <div className="flex ">
          <div>
            <p> Fair Date</p>
            <p>5 Dec (Thu.)</p>
            <p>6 Dec (Fri.)</p>
            <p>7 Dec (Sat.)</p>
            <br />
            <p>Opening Hours</p>
            <p>10.00 a.m. - 6.00 p.m.</p>
            <p>10.00 a.m. - 6.00 p.m.</p>
            <p>10.00 a.m. - 5.00 p.m.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Venue</span>
        </div>
        <div>
          <span>Bombay Exhibition Center, Mumbai, India</span>
        </div>
      </div>
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Organizer</span>
        </div>
        <div>
          <span>Worldex India Exhibition & Promotion Pvt. Ltd.</span>
        </div>
      </div>
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Format</span>
        </div>
        <div>
          <span> Business to Business</span>
        </div>
      </div>
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Major Exhibit Categories</span>
        </div>
        <div>
          <div>FURNITURE</div>
          <div>
              <p>&bull; &nbsp; Home</p>
              <p>&bull; &nbsp; Office</p>
              <p>&bull; &nbsp; Outdoor</p>
              <p>&bull; &nbsp; Modular</p>
              <p>&bull; &nbsp; Kids</p>
              <p>&bull; &nbsp; Handcrafted</p>
          
              <p>&bull; &nbsp; Plastic</p>
              <p>&bull; &nbsp; School/College</p>
              <p>&bull; &nbsp; Institutional</p>
              <p>&bull; &nbsp; Mattresses</p>
              <p>&bull; &nbsp; D&eacute;cor</p>
          
          </div>
        </div>
      </div>

      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Major Exhibiting Countries/ Regions</span>
        </div>
        <div>
          <div>
          
              <p>&bull; &nbsp; India</p>
              <p>&bull; &nbsp; Sri Lanka</p>
              <p>&bull; &nbsp; Bangladesh</p>
              <p>&bull; &nbsp; Malaysia</p>
              <p>&bull; &nbsp; Thailand</p>
              <p>&bull; &nbsp; Indonesia</p>
              <p>&bull; &nbsp; Vietnam</p>
              <p>&bull; &nbsp; Philippines</p>
           
              <p>&bull; &nbsp; Hong Kong</p>
              <p>&bull; &nbsp; China</p>
              <p>&bull; &nbsp; Singapore</p>
              <p>&bull; &nbsp; Turkiye</p>
              <p>&bull; &nbsp; Italy</p>
              <p>&bull; &nbsp; France</p>
              <p>&bull; &nbsp; USA</p>
              <p>amongst others</p>
        
          </div>
        </div>
      </div>

      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Thematic Zones</span>
        </div>
        <div >
          <p>&bull; &nbsp; Avante Garde - Hall of Fame</p>
          <p>&bull; &nbsp; Grand Galleria - Hall of Elegance</p>
          <p>&bull; &nbsp; Design Edge - Hall of Innovations</p>
          <p>&bull; &nbsp; ASEAN Panorama</p>
          <p>&bull; &nbsp; SOI - States of India</p>
        </div>
      </div>

      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Conferences, Design Ideas and Product Launches</span>
        </div>
        <div>
          <p>&bull; &nbsp; Design Walk</p>
          <p>&bull; &nbsp; Design Talk</p>
          <p>&bull; &nbsp; Business Pulse</p>
        </div>
      </div>
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Buyer Admission</span>
        </div>
        <div>
          <p>
            &bull; &nbsp; Entry strictly for trade buyers on production of valid
            business cards.
            <br />
            &nbsp; &nbsp; (Pre-register online or onsite)
          </p>
          <p>&bull; &nbsp; Rights of admission reserved.</p>
          <p>&bull; &nbsp; No registration Fee</p>
          <p>&bull; &nbsp; Entry below 18 years will not be permitted.</p>
          <p>&bull; &nbsp; No retail sale.</p>
        </div>
      </div>
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div className="font-semibold">
          <span className="font-semibold">Buyer Profile</span>
        </div>
        <div >
          <div>
          
              <img src="/assests/blLogo1.png" alt="" style={{ width: 120 }} />
            
              <br />
              <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Dealers
              </div>
              <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Distributors
              </div>
              <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Wholesalers
              </div>
              <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Importers
              </div>
              <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>
                Trading &amp; Buying Houses
              </div>
              <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Agents
              </div>
         
          </div>
          <div>
         
            <img src="/assests/blLogo4.png" alt="" style={{ width: 120 }} />
       
            <br />
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Retailers
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>E-Tailers
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Large Format Retailers
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Online Traders
            </div>
          
          </div>
          <div>
          
            <img src="/assests/blLogo3.png" alt="" style={{ width: 120 }} />{" "}
            
            <br />
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Franchisees
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Entrepreneurs
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Agents
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Consultants
            </div>
           
          </div>
          <div>
      
            <img src="/assests/blLogo2.png" alt="" style={{ width: 120 }} />
          
            <br />
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Architects
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Interior Designers
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Real Estate
              Developers
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>HORECA
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Corporate Sourcing
              Heads
            </div>
            <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Institutional
            </div>
          </div>
          <div>
      
      <img src="/assests/Investor-link.png" alt="" style={{ width: 120 }} />
    
      <br />
      <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Private Equity
      </div>
      <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Family Offices
      </div>
      <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Venture Capital
      </div>
      <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Investment Consultants
      </div>
      <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>International Companies   
      </div>
      <div className="flex items-center gap-1 "><span className="wingdings self-start pt-1"><Image src={icon} width={15} height={15} alt="icons" /></span>Corporates
      </div>
    </div>
        </div>
      </div>

      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">Website</span>
        </div>
        <div>
          <p>
            <a href="https://www.wofxworldexpo.com/">www.wofxworldexpo.com</a>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col px-2 mb-4 border-b-2  pb-2 mx-2">
        <div>
          <span className="font-semibold">For Registrations, Enquiries contact</span>
        </div>
        <div>
          <p className="sp-line">
            Rampat Gupta
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
        </div>
        <br />
        <div>
          <p className="sp-line">
            Haider Ali Mirza
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
        </div>
      </div>
    </div>
  );
}

export default FactsheetMb;
