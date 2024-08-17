import Image from "next/image"
import blLogo1 from '../../../public/assests/blLogo1.png'
import blLogo2 from '../../../public/assests/blLogo2.png'
import blLogo3 from '../../../public/assests/blLogo3.png'
import blLogo4 from '../../../public/assests/blLogo4.png'
import Link from "next/link"


function Buyer_lounges() {
  return (
    <>
    <div className='mx-auto  w-full max-w-screen-2xl bussinesLounchMain  pt-4 pb-8 px-3'>
      
      <h1  className="text-4xl text-center  pl-9"> Buyer Registration Form</h1>
      <p className="text-center text-red-600 text-lg">Please register as per your nature of business and profile.</p>
      <p className="text-center  text-lg">Based on your profile selection your entry badge will be generated and you can access the <br />

respected Buyers Lounge during your visit</p>
      <p style={{color:"#20c9ee"}} className="text-2xl text-center py-1">Buyers Lounges - For Business Meetings and Networking</p>
      <p></p>
      <div className="flex justify-between flex-wrap px-6 py-2 ">
        <div id="businessLounchCard" className="relative px-3  py-3">
           <div className="blImage"><Image   src={blLogo1} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
            <div><span className="wingdings">&#x1F7C2;</span> Dealers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Distributors</div>
            <div><span className="wingdings">&#x1F7C2;</span> Wholesalers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Importers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Trading & Buying Houses</div>
            <div><span className="wingdings">&#x1F7C2;</span> Agents</div>
           </div>
          
        </div>
        <div id="businessLounchCard" className="relative px-3  py-3">
           <div className="blImage">
           <Image   src={blLogo4} width={160} height={160} alt="Dealers & Distributors" />
           </div>
           <div className="py-2">
            <div><span className="wingdings">&#x1F7C2;</span> Retailers</div>
            <div><span className="wingdings">&#x1F7C2;</span> E-Tailers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Large Format Retailers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Online Traders</div>
           </div>
           
        </div>
        <div id="businessLounchCard" className="relative px-3  py-3">
           <div className="blImage"><Image   src={blLogo3} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
            <div><span className="wingdings">&#x1F7C2;</span> Franchisees</div>
            <div><span className="wingdings">&#x1F7C2;</span> Entrepreneurs</div>
            <div><span className="wingdings">&#x1F7C2;</span> Agents</div>
            <div><span className="wingdings">&#x1F7C2;</span> Consultants</div>
           </div>
          
        </div>
        <div id="businessLounchCard" className="relative px-3  py-3">
           <div className="blImage"><Image   src={blLogo2} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
            <div><span className="wingdings">&#x1F7C2;</span> Architects</div>
            <div><span className="wingdings">&#x1F7C2;</span> Interior Designers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Real Estate Developers</div>
            <div><span className="wingdings">&#x1F7C2;</span> HORECA</div>
            <div><span className="wingdings">&#x1F7C2;</span> Corporate Sourcing Heads</div>
            <div><span className="wingdings">&#x1F7C2;</span> Institutional</div>
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