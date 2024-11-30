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
        <div className="grid grid-cols-1  gap-8  md:grid-cols-4">
        <a href="http://www.abmagazine.in/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/8.webp"
              alt="image1"
            />
          </a>
          <a href="https://constructionbusinesstoday.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/3.webp"
              alt="image1"
            />
          </a>
          <a href="https://interiorsndecor.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/19.webp"
              alt="image1"
            />
          </a>
          <a href="https://aceupdate.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/4.webp"
              alt="image1"
            />
          </a>
          <a href="https://www.99lightingworld.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/14.webp"
              alt="11"
            />
          </a>
          
          <a href="https://www.woodnews.in/index.php">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/11.webp"
              alt="11"
            />
          </a>
          <a href="https://in.kompass.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/15.webp"
              alt="image1"
            />
          </a>

          <a href="https://www.worldconstructiontoday.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/18.webp"
              alt="image1"
            />
          </a>
          <a href="https://kreatecube.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/kreatecube logo.webp"
              alt="image1"
            />
          </a>
          <a href="https://plyinsight.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/6.webp"
              alt="image1"
            />
          </a>
  
          <a href="https://www.hardwaretimes.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/20.webp"
              alt="image1"
            />
          </a>
          <a href="#">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/10.webp"
              alt="image1"
            />
          </a>
 
          <a href="https://www.iworldmedia21.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/tycoon.png"
              alt="image1"
            />
          </a>

          <a href="https://www.spacemediapublication.com/construction/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/7.webp"
              alt="image1"
            />
          </a>

          <a href="https://kreatecube.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/CBT.png"
              alt="image1"
            />
          </a>


























          
          <a href="https://constructionnarchitecture.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/2.webp"
              alt="image1"
            />
          </a>
         
        
          <a href="https://www.ceoinsightsindia.com/">
            <Image
              width={220} height={85}
              src="/assests/MediaPartner/5.png"
              alt="image1"
            />
          </a>
      
     
       
         
      
       
        
        
      
         
       
       
      
       
        
        </div>
      </div>
    </div>
    <p className=" h-16">&nbsp;</p>
    </div>
  );
}

export default page;
