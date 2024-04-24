import Image from "next/image"
import preImage1 from '../../public/assests/preview1.jpg'
import preImage2 from '../../public/assests/preview2.jpg'

function page() {
  return (
    <div className='mx-auto   w-full max-w-screen-2xl py-16'>
      <h1 className="text-center text-3xl font-semibold mt-12  py-10">Preview 2023</h1>
      <div className="flex justify-center">
        <div className="w-4/5 flex justify-center gap-8 mb-8">

          <div className="border py-4 hover:bg-slate-900">
            <Image className="post-show-img" src={preImage1} width={400} height='auto' alt='previe-1' />
            <p className="text-center my-6"><a className="text-center py-4 px-0 md:px-2 bg-orange-500 text-white font-semibold" href='/assets/pdf/WOFX-PREVIEW-1_press.pdf'>Preview 1</a></p>
          </div>
          <div className="border py-4 hover:bg-slate-900">
            <Image className="post-show-img" src={preImage2} width={400} height='auto' alt='previe-1' />
            <p className="text-center my-6"><a className="text-center py-4 px-0 md:px-2 bg-orange-500 text-white font-semibold" href='/assets/pdf/WOFX-PREVIEW-2_press.pdf'>Preview 2</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page