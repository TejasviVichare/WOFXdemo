import Image from "next/image";

export const metadata = {
  title: "Exhibitor Profile",
};
const exhibitorProfileContent = [
  {
    img: "/assests/exhibitorProfile/1.png",
    text: "Home",
  },

  {
    img: "/assests/exhibitorProfile/2.png",
    text: "Office",
  },
  {
    img: "/assests/exhibitorProfile/3.png",
    text: "Outdoor",
  },
  {
    img: "/assests/exhibitorProfile/4.png",
    text: "Modular",
  },
  {
    img: "/assests/exhibitorProfile/5.png",
    text: "Kids",
  },
  {
    img: "/assests/exhibitorProfile/15.png",
    text: "Handcrafted",
  },

  {
    img: "/assests/exhibitorProfile/7.png",
    text: "Plastic",
  },
  
  {
    img: "/assests/exhibitorProfile/9.png",
    text: "School/College",
  },
  {
    img: "/assests/exhibitorProfile/10.png",
    text: "Institutional",
  },
  {
    img: "/assests/exhibitorProfile/mattresses.png",
    text: "Mattresses",
  },
  {
    img: "/assests/exhibitorProfile/decor.png",
    text: "Décor",
  },
  
];

function page() {
  return (
    <div className="mx-auto   w-full max-w-screen-2xl ">
      <div className=" mt-40 pb-24">
        <h1 className="text-xl md:text-3xl py-6 font-semibold text-center">
          Exhibitor Profile
        </h1>
        <div className="flex justify-center">
          <div className=" flex flex-wrap w-4/5  justify-center gap-6">
            {exhibitorProfileContent?.map((item, i) => (
              <div
                key={i}
                style={{ background: "#fbf9f6" }}
                className=" px-2 py-2"
              >
                <div className="relative  exhibitorProfileCard">
                  <center>
                   
                    <Image src={item.img} width={140} height={140} alt={i} />
                  </center>
                  <div className="flex justify-center border">
                    <p
                      style={{ background: "#fbf9f6" }}
                      className="absolute  w-4/5 text-center  py-1 text-sm -bottom-2"
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
