import Image from "next/image"
import a from '../../../public/assests/internationalpavilion/A.png'
import b from '../../../public/assests/internationalpavilion/B.png'
import c from '../../../public/assests/internationalpavilion/C.png'
import d from '../../../public/assests/internationalpavilion/D.png'
import e from '../../../public/assests/internationalpavilion/E.png'
import f from '../../../public/assests/internationalpavilion/F.png'
import g from '../../../public/assests/internationalpavilion/G.png'
 const logos = [a,b,c,d,e,f,g]





function InternationPavilion() {
  return (
    <>
    <div className="flex  md:px-24  gap-x-12 flex-wrap justify-center">
        {logos.map((item, index)=>(
          <div   key={index}>
          <Image   src={item} width={180} priority={true} height='auto' alt={index} />
          </div>
        ))}
    </div>
    
    </>
  )
}

export default InternationPavilion