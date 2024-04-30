import Image from "next/image";
import venueImage from "../../public/assests/venue2023.png";
export const metadata = {
  title: "Venue",
};
function page() {
  return (
    <div>
<<<<<<< HEAD
      <div className='mx-auto   w-full max-w-screen-2xl '>
        <div className=" mt-40 mb-4 pb-10 flex justify-center">
=======
      <div className="mx-auto   w-full max-w-screen-2xl ">
        <div className=" mt-40 mb-4 flex justify-center">
>>>>>>> 1b6cd870af941f71578b4ed5463ce95674028a0d
          <div className="space">
            <center>
              <h1 className="text-3xl font-bold px-4">Venue</h1>
            </center>
            <p className="px-4">
              <a
                style={{ border: "1px solid black" }}
                className="px-4 py-3 font-semibold text-black bg-gray-300  rounded"
                href=""
              >
                LOCATION
              </a>
            </p>
            <p>&nbsp;</p>
            <p className="font-bold px-4">
              Bombay Exhibition Center, Mumbai, India
            </p>
            <div className="flex flex-wrap gap-10 md:gap-0 py-4 px-4">
              <div className="w-full  md:w-1/2">
                <Image className="venueImages" src={venueImage} alt="image1" />
              </div>
              <iframe
                className="w-full md:w-1/2"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120609.80431251878!2d72.853645!3d19.149009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b651a8eb7135%3A0xa618573a34efa52e!2sNesco%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1693827946866!5m2!1sen!2sus"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
