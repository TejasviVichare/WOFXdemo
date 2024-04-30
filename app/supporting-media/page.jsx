import Image from "next/image";
export const metadata = {
  title: "Supporting Media",
};
function page() {
  return (
    <div className='mx-auto  mt-40  w-full max-w-screen-2xl '>
        <center>
        <h1 className="text-3xl pb-6 font-semibold">Supporting Media</h1>
      </center>
      <div className=" flex justify-center mt-6">
      <div className="flex w-4/5  flex-wrap gap-10 justify-center">
        <div >
          <a href="http://www.aipanorama.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/1.webp"
              alt="image1"
            />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default page;
