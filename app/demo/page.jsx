import Image from "next/image";
import aboutwofx from "../../public/assests/aboutwofx.jpg";
import featureicon1 from "../../public/assests/feature-icon-1.png";
import featureicon4 from "../../public/assests/feature-icon-4.png";
import hand from "../../public/assests/hand.png";

export const metadata = {
  title: "About WOFX",
};

function page() {
  return (
    <>
      <div className="mx-auto   w-full max-w-screen-2xl ">
        <video
          controls
          muted
          poster="https://res.cloudinary.com/sp-site/image/upload/w_auto,f_auto,q_auto/htlw10.jpg"
          autoPlay
        >
          <source
            src="https://res.cloudinary.com/sp-site/video/upload/htlwSession10.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default page;
