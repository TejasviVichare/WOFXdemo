import Image from "next/image"
import wofxLogo from '../../public/assests/logoforDownload.png'
import WORLDEX from '../../public/assests/WORLDEX.png'


function page() {
  return (
    <div className='mx-auto  mt-48  w-full max-w-screen-2xl '>
        <div className="flex justify-center flex-wrap gap-20">
          <div className="relative border px-4 py-4 rounded">
            <center className="h-32"><Image src={wofxLogo} width={300} height={150} alt="wofx-logo" /></center>
            <div className="w-full flex justify-center"><a className="text-center py-2 px-4  md:px-16 bg-orange-500 text-white font-semibold"  href="/assests/showSummeryLogo.png" download>Downlaod</a></div>
          </div>
          <div className="relative border px-4 py-4 rounded">
            <center className="h-32"> <Image src={WORLDEX} width={300} height={150} alt="wofx-logo" /></center>
            <div className="w-full flex justify-center"><a className="text-center py-2 px-2 md:px-16 bg-orange-500 text-white font-semibold"  href="/assests/WORLDEX.png" download>Downlaod</a></div>
          </div>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>

      </div>
  )
}

export default page