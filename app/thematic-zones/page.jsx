import Image from "next/image"
import grandgalleria from '../../public/assests/grand galleria.png'
import aseanpanorama from '../../public/assests/asean panorama.png'
import soi from '../../public/assests/soi.png'
import avantegrade from '../../public/assests/avante grade.png'
import designedge from '../../public/assests/design edge.png'


function page() {
    return (
        <div className='mx-auto   w-full max-w-screen-2xl '>
            <div className=" mt-40 pb-24">
                <center><span  className="text-xl py-2 px-4 md:text-3xl  font-semibold">Thematic Zones @ WOFX</span></center>
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-center gap-4 mt-12 thematiczone">
                        <div style={{ borderRight: "2px solid #e8bd2b;" }} className="flex flex-col justify-center items-center gap-5 px-2 ">
                            <Image src={grandgalleria} width={200} alt="grandgalleria" />
                            <p className="text-center">Hosting international <br />
                                pavilions from across <br />
                                the globe <br />
                            </p>
                        </div>
                        <div style={{ borderRight: "2px solid #e8bd2b;" }} className="flex flex-col justify-center items-center gap-5 px-2 ">
                            <Image src={aseanpanorama} width={200} alt="grandgalleria" />
                            <p className="text-center">Contemporary <br /> designs from <br /> ASEAN countries
                            </p>
                        </div>
                        <div style={{ borderRight: "2px solid #e8bd2b;" }} className="flex flex-col justify-center items-center gap-5 px-2 ">
                            <Image src={soi} width={200} alt="grandgalleria" />
                            <p className="text-center">Craftsmanship from <br /> the different <br /> States of India
                            </p>
                        </div>
                        <div style={{ borderRight: "2px solid #e8bd2b;" }} className="flex flex-col justify-center items-center gap-5 px-2 ">
                            <Image src={avantegrade} width={200} alt="grandgalleria" />
                            <p className="text-center">Showcase of leading <br />
                                Indian and international <br />
                                brands

                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5 px-2 ">
                            <Image src={designedge} width={200} alt="grandgalleria" />
                            <p className="text-center">Contemporary <br />
                                designs & modular <br />
                                concepts

                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <p>&nbsp;</p>
        </div>
    )
}

export default page