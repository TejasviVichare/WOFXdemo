import Image from "next/image"
import preImage1 from '../../public/assests/Xclusive Preview 1 - WOFX 2024-img.jpg'
import preImage2 from '../../public/assests/Xclusive Preview 2.jpg'
import preImage3 from '../../public/assests/Xclusive Preview 3.jpg'
import Link from "next/link"

export const metadata = {
  title: "Xclusive Preview 2024",
};
function page() {
  return (
    <div className='mx-auto   w-full max-w-screen-2xl py-16'>
      <h1 className="text-center text-3xl font-semibold mt-12  py-10">Xclusive Preview 2024</h1>
      <div className="flex justify-center">
        <div className="w-4/5 flex justify-center gap-8 mb-8">
          
          <div>
            <div className="border py-4 hover:bg-slate-900">
              <a href="https://online.anyflip.com/qpeq/hpmw/mobile/index.html">
              <Image
                className="post-show-img"
                src={preImage1}
                width={400}
                height="auto"
                alt="Preview 1"
              />
              </a>
              <div className="flex justify-center my-6">
                <a
                  className="text-center w-40 py-3 rounded px-0 md:px-2 bg-orange-500 text-white font-semibold"
                  href="/assests/pdf/Xclusive Preview 1 - WOFX 2024.pdf"
                >
                  Preview 1
                </a>
              </div>
            </div>
          </div>



          <div>
            <div className="border py-4 hover:bg-slate-900">
              <a href="https://online.anyflip.com/qpeq/fqfo/mobile/index.html">
              <Image
                className="post-show-img"
                src={preImage2}
                width={400}
                height="auto"
                alt="Preview 1"
              />
              </a>
              <div className="flex justify-center my-6">
                <a
                  className="text-center w-40 py-3 rounded px-0 md:px-2 bg-orange-500 text-white font-semibold"
                  href="/assests/pdf/Xclusive-Preview-2 WOFX 2024.pdf"
                >
                  Preview 2
                </a>
              </div>
            </div>
          </div>



          <div>
            <div className="border py-4 hover:bg-slate-900">
              <a href="https://online.anyflip.com/qpeq/pqpu/mobile/index.html">
              <Image
                className="post-show-img"
                src={preImage3}
                width={400}
                height="auto"
                alt="Preview 1"
              />
              </a>
              <div className="flex justify-center my-6">
                <a
                  className="text-center w-40 py-3 rounded px-0 md:px-2 bg-orange-500 text-white font-semibold"
                  href="/assests/pdf/Xclusive-Preview-3 WOFX 2024.pdf"
                >
                  Preview 3
                </a>
              </div>
            </div>
          </div>



          
        </div>
      </div>
    </div>
  );
}

export default page;
