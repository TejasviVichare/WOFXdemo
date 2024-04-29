import Image from "next/image"
import blLogo1 from '../../public/assests/blLogo1.png'
import blLogo2 from '../../public/assests/blLogo2.png'
import blLogo3 from '../../public/assests/blLogo3.png'
import blLogo4 from '../../public/assests/blLogo4.png'
import Link from "next/link"


function Buyer_lounges() {
  return (
    <div className='mx-auto   w-full max-w-screen-2xl bussinesLounchMain mt-40 pb-20'>
      <center>
      <h1 className="text-3xl  py-6">WOFX Connect - Industry Specific Business Lounges</h1>
      </center>
      <p></p>
      <div className="flex justify-between flex-wrap px-6 py-2 ">
        <div id="businessLounchCard" className="relative px-3  py-5">
           <div className="blImage"><Image   src={blLogo1} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
            <div><span className="wingdings">&#x1F7C2;</span> Dealers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Distributors</div>
            <div><span className="wingdings">&#x1F7C2;</span> Wholesalers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Importers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Trading & Buying Houses</div>
            <div><span className="wingdings">&#x1F7C2;</span> Agents</div>
           </div>
           <div className="BLButton"><Link href='/'>Click Here To Regsiter</Link></div>
        </div>
        <div id="businessLounchCard" className="relative px-3  py-5">
           <div className="blImage">
           <Image   src={blLogo4} width={160} height={160} alt="Dealers & Distributors" />
           </div>
           <div className="py-2">
            <div><span className="wingdings">&#x1F7C2;</span> Retailers</div>
            <div><span className="wingdings">&#x1F7C2;</span> E-Tailers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Large Format Retailers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Online Traders</div>
           </div>
           <div className="BLButton"><Link href='/'>Click Here To Regsiter</Link></div>
        </div>
        <div id="businessLounchCard" className="relative px-3  py-5">
           <div className="blImage"><Image   src={blLogo3} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
            <div><span className="wingdings">&#x1F7C2;</span> Franchisees</div>
            <div><span className="wingdings">&#x1F7C2;</span> Entrepreneurs</div>
            <div><span className="wingdings">&#x1F7C2;</span> Agents</div>
            <div><span className="wingdings">&#x1F7C2;</span> Consultant</div>
           </div>
           <div className="BLButton"><Link href='/'>Click Here To Regsiter</Link></div>
        </div>
        <div id="businessLounchCard" className="relative px-3  py-5">
           <div className="blImage"><Image   src={blLogo2} width={160} height={160} alt="Dealers & Distributors" /></div>
           <div className="py-2">
            <div><span className="wingdings">&#x1F7C2;</span> Architects</div>
            <div><span className="wingdings">&#x1F7C2;</span> Interior Designer</div>
            <div><span className="wingdings">&#x1F7C2;</span> Real Estate Developers</div>
            <div><span className="wingdings">&#x1F7C2;</span> HORECA</div>
            <div><span className="wingdings">&#x1F7C2;</span> Corporate Sourcing Heads</div>
            <div><span className="wingdings">&#x1F7C2;</span> Institutional</div>
           </div>
           <div className="BLButton"><Link href='/'>Click Here To Regsiter</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Buyer_lounges