import Image from "next/image"
import blLogo1 from '../../../public/assests/blLogo1.png'
import blLogo2 from '../../../public/assests/blLogo2.png'
import blLogo3 from '../../../public/assests/blLogo3.png'
import blLogo4 from '../../../public/assests/blLogo4.png'
import icon from '../../../public/assests/Icon.png'


import Link from "next/link"


function Buyer_lounges() {
  return (
    <>
    <div className='mx-auto  w-full max-w-screen-2xl bussinesLounchMain  pt-4 pb-8 px-3'>
      
      <h2  className="text-4xl text-center  pl-9"> Buyer Registration Form</h2>
      <p className="text-center text-red-600 text-lg">Please register as per your nature of business and profile.</p>
      <p className="text-center  text-lg">Based on your profile selection your entry badge will be generated and you can access the <br />

respective Buyers Lounge during your visit</p>
      <p style={{color:"#20c9ee"}} className="text-2xl text-center py-1">Buyers Lounges - For Business Meetings and Networking</p>
      <p></p>
      <div className="flex justify-between flex-wrap px-6 py-2 ">
        <div id="businessLounchCard" className="relative px-3  py-3">
           <div className="blImage"><Image   src={blLogo1} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Dealers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Distributors</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Wholesalers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Importers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Trading & Buying Houses</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Agents</div>
           </div>
          
        </div>
        <div id="businessLounchCard" className="relative px-3  py-3">
           <div className="blImage">
           <Image   src={blLogo4} width={160} height={160} alt="Dealers & Distributors" />
           </div>
           <div className="py-2">
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Retailers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> E-Tailers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Large Format Retailers</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Online Traders</div>
           </div>
           
        </div>
        <div id="businessLounchCard" className="relative px-3  py-3">
           <div className="blImage"><Image   src={blLogo3} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Franchisees</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Entrepreneurs</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Agents</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Consultants</div>
           </div>
          
        </div>
        <div id="businessLounchCard" className="relative px-3  py-3">
           <div className="blImage"><Image   src={blLogo2} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Project Management Consultant </div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Architects & Interior Designers </div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Real Estate Developers </div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> HORECA</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Corporate Sourcing Heads</div>
            <div className="flex items-center gap-1"><span className="wingdings"><Image   src={icon} width={15} height={15} alt="icons" /></span> Institutional</div>
           </div>
           
        </div>
      </div>
      <div>
      <div className="flex justify-center w-full mt-6">
      <Link className="BLButton w-60" href='https://www.bee2bee.asia/wofx/buyer-registration'><strong>Click Here To Regsiter</strong></Link>
      </div>
      </div>
    </div>
    <p>&nbsp;</p>
    </>
  )
}

export default Buyer_lounges
