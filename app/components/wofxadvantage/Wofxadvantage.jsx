
import Image from "next/image"
import style from '../timer/Timer.module.css'
import a from '../../../public/assests/1.png'
import b from '../../../public/assests/2.png'
import c from '../../../public/assests/3.png'
import d from '../../../public/assests/4.png'

const wofxadvantagedata = [{
    img : a,
    haeding:"Gateway to Business Opportunities",
    text:'Explore new opportunities, new markets, expand your retail and distribution network.'
},
{
    img :  b,
    haeding:"Global Platform",
    text:'International platform showcasing over 400 leading brands and manufacturers from South Asia, China, East Asia, ASEAN, Turkiye and Europe.'
},
{
    img :  c,
    haeding:"Business & Networking",
    text:`Connect with India's leading builders, importers, dealers, distributors, large format retailers, e-tailers, architects, designers and other buyer groups.`
},
{
    img :  d,
    haeding:"Industry Focused Trade Fair",
    text:'WOFX is an industry trade show dedicated to the entire furniture and design industry. More global, more varied, more buyers and more business!.'
}]


export default function Wofxadvantage() {
  return (
    <>
    <center><h1 className="text-2xl py-3 font-extrabold">WOFX Advantage - Your Business Connection</h1></center>
    <div className="grid items-center px-5 py-5  row-start-4 grid-flow-row gap-4 md:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gridAutoRows: '1fr' }}>
        {wofxadvantagedata?.map((item, index)=>(
           <div className={`border px-2 h-80  py-2 rounded-2xl ${style.wofxadvantagecard}`}
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
            <div>{item.text}</div>
            </center>
           </div>
        ))}
    </div>
    
    </>
  )
}
