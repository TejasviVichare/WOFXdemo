import Image from "next/image";
import blLogo1 from "../../public/assests/blLogo1.png";
import blLogo2 from "../../public/assests/blLogo2.png";
import blLogo3 from "../../public/assests/blLogo3.png";
import blLogo4 from "../../public/assests/blLogo4.png";
import blLogo5 from "../../public/assests/blLogo5.png";

import Link from "next/link";
import icon from '../../public/assests/Icon.png'


export const metadata = {
  title: "Buyer Profile",
};
function Buyer_lounges() {
  return (
    <div className="mx-auto  w-full max-w-screen-2xl   mt-32 pt-4 pb-8 ">
    
      <p></p>
      <div className="flex justify-center gap-3 flex-wrap px-5 py-2  lg:flex-nowrap">
        <div  className="relative   py-5  w-72 ">
           <div className="w-40  flex items-center justify-center h-44"><Image   src={blLogo1} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">


           <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Dealers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Distributors</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Wholesalers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Importers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Trading & Buying Houses</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Agents</div>
           

           
           </div>

        </div>
        <div  className="relative   py-5  w-72">
           <div className="w-40  flex items-center justify-center h-44">
           <Image   src={blLogo4} width={160} height={160} alt="Dealers & Distributors" />
           </div>
           <div className="py-2">
           <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Retailers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> E-Tailers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Large Format Retailers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Online Traders</div>
           </div>
        </div>
        <div  className="relative   py-5  w-72">
           <div className="w-40  flex items-center justify-center h-44"><Image   src={blLogo3} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
           <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Franchisees</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Entrepreneurs</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Agents</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Consultants</div>
          </div>
        </div>
        <div  className="relative   py-5  w-72">
           <div className="w-40  flex items-center justify-center h-44"><Image   src={blLogo2} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
           <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Project Management Consultant </div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Architects & Interior Designers </div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Real Estate Developers </div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> HORECA</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Corporate Sourcing Heads</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Institutional</div>
          </div>
        </div>
        <div  className="relative   py-5  w-72">
           <div className="w-40  flex items-center justify-center h-44"><Image   src={blLogo5} width={160} height={160} alt="Dealers & Distributors" /></div>
            <div className="py-2">
             <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Private Equity </div>
              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Family Offices </div>
              <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Venture Capital </div>
               <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Investment Consultants</div>
               <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> International Companies</div>
             <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Corporates</div>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Buyer_lounges;
