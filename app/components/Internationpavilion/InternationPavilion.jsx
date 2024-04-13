import Image from "next/image"
import a from '../../../public/assests/internationalpavilion/1.webp'
import b from '../../../public/assests/internationalpavilion/2.webp'
import c from '../../../public/assests/internationalpavilion/3.webp'
import d from '../../../public/assests/internationalpavilion/4.webp'
import e from '../../../public/assests/internationalpavilion/5.webp'
import f from '../../../public/assests/internationalpavilion/6.webp'
import g from '../../../public/assests/internationalpavilion/7.webp'
 const logos = [a,b,c,d,e,f,g]





function InternationPavilion() {
  return (
    <>
    <div className="flex px-10, justify-center gap-5">
        {logos.map((item, index)=>(
          <>
          <Image src={item} width={140} priority={true} height='auto' alt={index} />
          </>
        ))}
    </div>
    
    </>
  )
}

export default InternationPavilion