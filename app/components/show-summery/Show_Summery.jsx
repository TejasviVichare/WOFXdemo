import Image from "next/image"
import summerLogo from '../../../public/assests/showSummeryLogo.png'
import Link from "next/link"
import NumberAnimation from "./NumberAnimation"


function Show_Summery() {
    return (
        <div className='mx-auto   w-full max-w-screen-2xl   pt-4 pb-8 '>

            <h1 className="text-3xl ml-36 py-4 text-red-600">SHOW SUMMARY</h1>

            <div className="flex justify-center">
                <div id="ShowSummery" className="relative">
                    <Image src={summerLogo} width={1000} height={500} alt="summeryLogo" />
                    <div className="absolute  flex justify-between top-0 left-0 h-full  w-full">
                        <div className="showprofileCard justify-center pr-24">
                            <div>
                                <div className="flex w-24 h-12 items-center gap-1 text-3xl font-bold text-red-600"><div><NumberAnimation n={200} /></div> <div>+</div> </div>
                                <span className="font-semibold text-gray-500">Exhibiting <br />
                                    Brands <br />
                                    from <br /></span>
                                <div>
                                    <div className="text-3xl font-bold text-red-600"><NumberAnimation n={13} /></div>
                                    <div className="font-semibold text-gray-500">Countries</div>
                                </div>
                            </div>
                        </div>
                        <div className="showprofileCard pl-8 pb-4">
                            <div>
                                <div className="text-3xl font-bold text-red-600"><NumberAnimation n={12052} /></div>
                                <div className="font-semibold text-gray-500">B2B <br /> Buyers</div>
                            </div>
                        </div>
                        <div className="showprofileCard justify-center">
                            <div className="absolute top-14 pl-24">
                                <div className="font-semibold text-gray-500">Buyers from</div>
                                <div className="text-3xl font-bold text-red-600"><NumberAnimation n={20} /></div>
                                <div className="font-semibold text-gray-500">Countries <br /> and</div>
                            </div>
                            <div  className="flex flex-col justify-center items-center absolute bottom-4 pl-24">
                            <div className="flex w-24 h-12 items-center gap-1 text-3xl font-bold text-red-600"><div><NumberAnimation n={22} /></div> <div>+</div> </div>
                               <div>
                               <span className="font-semibold text-gray-500">States of India</span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Show_Summery