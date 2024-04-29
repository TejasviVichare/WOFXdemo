import Image from "next/image"
import preImage1 from '../../public/assests/preview1.jpg'
import preImage2 from '../../public/assests/preview2.jpg'
import Link from "next/link"

function page() {
  return (
    <div className='mx-auto   w-full max-w-screen-2xl py-16'>
      <h1 className="text-center text-3xl font-semibold mt-12  py-10">Preview 2023</h1>
      <div className="flex justify-center">
        <div className="w-4/5 flex justify-center gap-8 mb-8">
          {/* Assuming 'preImage1' and 'preImage2' are imported image components */}
          <a href="/assests/pdf/WOFX-PREVIEW-1_press.pdf">
            <div className="border py-4 hover:bg-slate-900">
              <Image className="post-show-img" src={preImage1} width={400} height="auto" alt="Preview 1" />
              <div className="flex justify-center my-6">
                <p className="text-center w-40 py-3 rounded px-0 md:px-2 bg-orange-500 text-white font-semibold" href="/assests/pdf/WOFX-PREVIEW-1_press.pdf">
                  Preview 1
                </p>
              </div>
            </div>
          </a>
          <a href="/assests/pdf/WOFX-PREVIEW-2_press.pdf">
            <div className="border py-4 hover:bg-slate-900">
              <Image className="post-show-img" src={preImage2} width={400} height="auto" alt="Preview 2" />
              <div className="flex justify-center my-6">
                <p className="text-center w-40 py-3 rounded px-0 md:px-2 bg-orange-500 text-white font-semibold" href="/assests/pdf/WOFX-PREVIEW-2_press.pdf">
                  Preview 2
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default page