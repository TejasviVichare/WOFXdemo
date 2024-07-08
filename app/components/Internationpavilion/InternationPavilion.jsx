import Image from "next/image"
// import a from '../../../public/assests/internationalpavilion/A.png'
// import b from '../../../public/assests/internationalpavilion/B.png'
// import c from '../../../public/assests/internationalpavilion/C.png'
// import d from '../../../public/assests/internationalpavilion/D.png'
// import e from '../../../public/assests/internationalpavilion/E.png'
// import f from '../../../public/assests/internationalpavilion/F.png'
// import g from '../../../public/assests/internationalpavilion/G.png'
import bai from '../../../public/assests/orgnization/5.webp'
import HRAWI from '../../../public/assests/orgnization/8.webp'
import IICCI from '../../../public/assests/orgnization/12.webp'
import AESA from '../../../public/assests/orgnization/9.webp'
import CIE from '../../../public/assests/orgnization/11.webp'
import MHEA from '../../../public/assests/orgnization/13.webp'
import AFA from '../../../public/assests/orgnization/6.webp'



const logoses = [{
  logo: bai,
  link: "https://www.baionline.in/"
},
{
  logo: HRAWI,
  link: "https://www.hrawi.com/index.aspx"
},
{
  logo: IICCI,
  link: "https://www.indianimporterschambers.com/"
},
{
  logo: AESA,
  link: "https://aesapune.org/"
}
  ,
{
  logo: CIE,
  link: "https://cieonline.org/"
},
{
  logo: MHEA,
  link: "#"
},
{
  logo: AFA,
  link: "https://www.afa1983.com/"
}
]




function InternationPavilion() {
  return (
    <>
      <div className="flex  md:px-24  gap-x-2 flex-wrap justify-center">
        {logoses.map((item, index) => (
          <div key={index}>
            <a target="_blank" href={item.link}>
              <Image src={item.logo} width={220} priority={true} height='auto' alt={index} />
            </a>
          </div>
        ))}
      </div>

    </>
  )
}

export default InternationPavilion