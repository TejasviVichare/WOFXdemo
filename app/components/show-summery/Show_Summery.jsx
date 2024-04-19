import Image from "next/image"
import summerLogo from '../../../public/assests/showSummeryLogo.png'
import Link from "next/link"


function Show_Summery() {
    return (
        <div className='mx-auto   w-full max-w-screen-2xl bussinesLounchMain  pt-4 pb-8 '>
           
                <h1 className="text-3xl ml-36 py-4 text-red-600">SHOW SUMMARY</h1>
           
            <div className="flex justify-center">
                <div id="ShowSummery" className="w-3/4  relative">
                    <Image src={summerLogo} width={1000} height={500} alt="summeryLogo" />
                    <div className="absolute  flex justify-between top-0 left-0 h-full  w-full">
                        <div className="showprofileCard justify-center pr-20">
                            <p ><span className="text-3xl font-bold text-red-600">200+</span> <br />
                            Exhibiting <br />
                            Brands <br />
                            from <br />
                            <span className="text-3xl font-bold text-red-600">13</span><br />
                            Countries</p>
                        </div>
                        <div className="showprofileCard pl-8 pb-4">
                        <div><span className="text-3xl font-bold text-red-600">12,052</span><br />
                            B2B <br />
                            Buyers <br /></div>
                        </div>
                        <div className="showprofileCard justify-center">
                            <span className="absolute top-8 pl-16">
                            Buyers from <br /> 
                            <span className="text-3xl font-bold text-red-600">20</span> <br />
                            Countries <br /> 
                            and <br />
                            </span>
                            <span className=" absolute bottom-4 pl-24"><span className="text-3xl font-bold text-red-600">20+</span>  <br />
                            States of India</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Show_Summery