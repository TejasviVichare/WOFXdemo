import Image from "next/image"
import wofxbanner from '../../public/assests/wofxbanner.png'


function page() {
  return (
    <div className='mx-auto  mt-40  w-full max-w-screen-2xl '>
        <div className="flex justify-center flex-wrap gap-20">
          <div className="relative border px-4 py-4 rounded mb-16 m-4">
            <center >
                <Image src={wofxbanner} width={500} height={500} alt="wofx-logo"  className="mb-8"/>
            </center>
            <div className="w-full flex justify-center">
                <a className="text-center py-3 px-4  md:px-16  text-white font-semibold" style={{backgroundColor:'#E73E41'}}  href="/assests/wofxbanner.png" download>Downlaod</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default page
