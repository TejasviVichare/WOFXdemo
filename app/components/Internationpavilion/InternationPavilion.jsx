import Image from "next/image"
import a from '../../../public/assests/internationalpavilion/A.png'
import b from '../../../public/assests/internationalpavilion/B.png'
import c from '../../../public/assests/internationalpavilion/C.png'
import d from '../../../public/assests/internationalpavilion/D.png'
import e from '../../../public/assests/internationalpavilion/E.png'
import f from '../../../public/assests/internationalpavilion/F.png'
import g from '../../../public/assests/internationalpavilion/G.png'
import bai from '../../../public/assests/orgnization/5.webp'
import HRAWI from '../../../public/assests/orgnization/8.webp'
import IICCI from '../../../public/assests/orgnization/12.webp'
import AESA from '../../../public/assests/orgnization/9.webp'
import CIE from '../../../public/assests/orgnization/11.webp'







 const logos = [bai,HRAWI,IICCI,AESA,CIE]





function InternationPavilion() {
  return (
    <>
    <div className="flex  md:px-24  gap-x-4 flex-wrap justify-center">
        {logos.map((item, index)=>(
          <div   key={index}>
          <Image   src={item} width={220} priority={true} height='auto' alt={index} />
          </div>
        ))}
    </div>
    
    </>
  )
}

export default InternationPavilion