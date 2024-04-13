
import Image from "next/image"
import style from '../timer/Timer.module.css'
import a from '../../../public/assests/1.png'
import b from '../../../public/assests/2.png'
import c from '../../../public/assests/3.png'
import d from '../../../public/assests/4.png'

const wofxadvantagedata = [{
    img : d,
    haeding:"Industry Focused B2B Trade Fair",
    text:'A focused B2B trade show dedicated to the furniture and design industry.'
},
{
    img :  c,
    haeding:"Business & Networking",
    text:'Directly connect with leading importers, dealers, wholesalers, distributors, builders, large format retailers, e-tailers, architects, designers and industry professionals. Providing excellent networking opportunities through Business Forums, Seminars, Networking Events and Awards.'
},
{
    img :  b,
    haeding:"Global Platform",
    text:`Leading International and Indian brands showcasing latest collections to volume buyers.`
},
{
    img :  a,
    haeding:"Gateway to India Market",
    text:'Explore business opportunities in the high growth India market'
}]


export default function Wofxadvantage() {
  return (
    <>
     <div className='mx-auto   w-full max-w-screen-2xl '>
    <center><h1 className="text-2xl py-3 font-extrabold">WOFX Advantage - Unlock a World of Opportunities </h1></center>
    <div className="grid items-center px-5 py-5  row-start-4 grid-flow-row gap-4 md:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridAutoRows: '1fr' }}>
        {wofxadvantagedata?.map((item, index)=>(
           <div className={`border px-2 h-80  py-3 rounded-2xl ${style.wofxadvantagecard}`}
           key={index}>
            <center>
            <Image
            src={item.img}
            alt="logo"
            width={70}
            height={70}
            priority={true}
            className="logo"
          />
            <div className="text-xl font-bold py-2 px-2">{item.haeding}</div>
            <div className="text-sm font-medium">{item.text}</div>
            </center>
           </div>
        ))}
    </div>
    </div>
    
    </>
  )
}
