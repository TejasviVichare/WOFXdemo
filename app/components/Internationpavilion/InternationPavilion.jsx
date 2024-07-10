import Image from "next/image"

import bai from '../../../public/assests/orgnization/5.webp'
import HRAWI from '../../../public/assests/orgnization/8.webp'
import IICCI from '../../../public/assests/orgnization/12.webp'
import AESA from '../../../public/assests/orgnization/9.webp'
import CIE from '../../../public/assests/orgnization/11.webp'
import MHEA from '../../../public/assests/orgnization/13.webp'
import AFA from '../../../public/assests/orgnization/6.webp'
import hawa from  '../../../public/assests/orgnization/hawa.png'
import hawaexpo from  '../../../public/assests/orgnization/hawaexpo.png'
import HIMKILogo from  '../../../public/assests/orgnization/HIMKILogo.png'
import ifx from  '../../../public/assests/orgnization/IFEXLogo.png'
import thti from  '../../../public/assests/internationalpavilion/F.png'
import designobject from  '../../../public/assests/orgnization/designobjects.png'












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
,
{
  logo: hawa,
  link: "https://www.hawaexpo.com/"
}
,
{
  logo: hawaexpo,
  link: "https://hawa.vn/"
}
,
{
  logo: HIMKILogo,
  link: "https://www.himki.id/"
}
,
{
  logo: ifx,
  link: "https://ifexindonesia.com/"
}
,
{
  logo: thti,
  link: "https://www.thaitextile.org/th/home/"
},
{
  logo:designobject,
  link:"https://www.designandobjects.com/"
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