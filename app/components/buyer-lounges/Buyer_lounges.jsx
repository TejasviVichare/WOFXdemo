import Image from "next/image"
import blLogo1 from '../../../public/assests/blLogo1.png'
import blLogo2 from '../../../public/assests/blLogo2.png'
import blLogo3 from '../../../public/assests/blLogo3.png'
import blLogo4 from '../../../public/assests/blLogo4.png'


function Buyer_lounges() {
  return (
    <div className='mx-auto   w-full max-w-screen-2xl '>
      <center>
      <h1 className="text-2xl font-extrabold">WOFX Connect - Industry Specific Business Lounges</h1>
      </center>
      <p></p>
      <div className="flex justify-between flex-wrap px-6 mt-32">
        <div id="businessLounchCard" className="relative pl-6">
           <Image  style={{border:"2px solid #e8bd2b"}} className="relative bg-white -mt-24 px-3 py-3" src={blLogo1} width={170} height={170} alt="Dealers & Distributors" />
           <div className="mt-4">
            <div><span className="wingdings">&#x1F7C2;</span> Dealers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Distributors</div>
            <div><span className="wingdings">&#x1F7C2;</span> Wholesalers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Importers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Trading & Buying Houses</div>
            <div><span className="wingdings">&#x1F7C2;</span> Agents</div>
           </div>
           
        </div>
        <div id="businessLounchCard" className="relative pl-6">
           <Image  style={{border:"2px solid #e8bd2b"}} className="relative bg-white -mt-24 px-3 py-3" src={blLogo4} width={170} height={170} alt="Dealers & Distributors" />
           <div className="mt-4">
            <div><span className="wingdings">&#x1F7C2;</span> Retailers</div>
            <div><span className="wingdings">&#x1F7C2;</span> E-Tailers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Large Format Retailers</div>
            <div><span className="wingdings">&#x1F7C2;</span> Online Traders</div>
           </div>
          
        </div>
        <div id="businessLounchCard" className="relative pl-6">
           <Image  style={{border:"2px solid #e8bd2b"}} className="relative bg-white -mt-24 px-3 py-3" src={blLogo3} width={170} height={170} alt="Dealers & Distributors" />
           <div className="mt-4">
            <div><span className="wingdings">&#x1F7C2;</span> Franchisees</div>
            <div><span className="wingdings">&#x1F7C2;</span> Entrepreneurs</div>
            <div><span className="wingdings">&#x1F7C2;</span> Agents</div>
            <div><span className="wingdings">&#x1F7C2;</span> Consultant</div>
           </div>
          
        </div>
        <div id="businessLounchCard" className="relative pl-6">
           <Image  style={{border:"2px solid #e8bd2b"}} className="relative bg-white -mt-24 px-3 py-3" src={blLogo2} width={170} height={170} alt="Dealers & Distributors" />
           <div className="mt-4">
            <div><span className="wingdings">&#x1F7C2;</span> Architects</div>
            <div><span className="wingdings">&#x1F7C2;</span> Interior Designer</div>
            <div><span className="wingdings">&#x1F7C2;</span> Real Estate Developers</div>
            <div><span className="wingdings">&#x1F7C2;</span> HORECA</div>
            <div><span className="wingdings">&#x1F7C2;</span> Corporate Sourcing Heads</div>
            <div><span className="wingdings">&#x1F7C2;</span> Institutional</div>
           </div>
         
        </div>
      </div>
    </div>
  )
}

export default Buyer_lounges