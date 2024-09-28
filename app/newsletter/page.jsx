import Image from "next/image"
import preImage1 from '../../public/assests/newsletter-2.png'
import preImage2 from '../../public/assests/newsletter-1.png'
import preImage3 from '../../public/assests/International-Exhibitor-Preview.png'
import Link from "next/link"

export const metadata = {
  title: "News Letter",
};
function page() {
  return (
    <div className='mx-auto   w-full max-w-screen-2xl py-16'>
      <h1 className="text-center text-3xl font-semibold mt-12  py-10">F + D Furniture Insights & Analysis</h1>
      <div className="flex justify-center">
        <div className="w-4/5 flex justify-center gap-8 mb-8">
         
          
            <div className="border py-4 hover:bg-slate-900">
            <a href="https://online.anyflip.com/qpeq/nmuk/mobile/index.html">
              <Image
                className="post-show-img"
                src={preImage1}
                width={400}
                height="auto"
                alt="Preview 1"
              />
              </a>
              <div className="flex justify-center my-6">
                <a href="assests/pdf/F+D-Newsletter.pdf">
                <p
                  className="text-center w-40 py-3 rounded px-0 md:px-2 bg-orange-500 text-white font-semibold"
                >
                  Download Vol 1
                </p>
                </a>
              </div>
            </div>
          
          
            <div className="border py-4 hover:bg-slate-900">
            <a href="https://online.anyflip.com/qpeq/bkwl/mobile/index.html">
              <Image
                className="post-show-img"
                src={preImage2}
                width={400}
                height="auto"
                alt="Preview 2"
              />
              </a>
              <div className="flex justify-center my-6">
               <a  href="assests/pdf/F+D-Newsletter-Vol-2.pdf">
               <p
                  className="text-center w-40 py-3 rounded px-0 md:px-2 bg-orange-500 text-white font-semibold"
                 
                >
                  Download Vol 2
                </p>
               </a>
              </div>
            </div>
          
      
        </div>
      </div>
    </div>
  );
}

export default page;
