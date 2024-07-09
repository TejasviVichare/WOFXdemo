'use client'
import Image from "next/image";
import blLogo1 from "../../public/assests/blLogo1.png";
import blLogo2 from "../../public/assests/blLogo2.png";
import blLogo3 from "../../public/assests/blLogo3.png";
import blLogo4 from "../../public/assests/blLogo4.png";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function Buyer_lounges() {

    const [showHideInstruction, setshowHideInstruction] = useState(false);
    const [showCategory, setShowCategory] = useState("");
    console.log(showCategory, "category")
    return (
        <>
            <div className="mx-auto w-full max-w-screen-2xl  mt-40 pb-5 px-1">
                <h1 className="text-2xl text-center pl-9 py-3">
                    Buyer Registration Form
                </h1>
                <div className="flex justify-between  py-1 rounded-md shadow bg-gray-50">
                    <p>Please Read Instructions</p>
                    {/* <button onClick={() => setshowHideInstruction(!showHideInstruction)}>
                        {showHideInstruction ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleDown} />
                        )}
                    </button> */}
                </div>
                
                    <div className="px-1 bg-gray-50">
                        <p>  <p className=" text-red-600 text-sm">
                            Please register as per your nature of business and profile.
                        </p>
                            <p className="text-sm">
                                Based on your profile selection your entry badge will be generated and
                                you can access the <br />
                                respected Buyers Lounge during your visit
                            </p>
                            <p style={{ color: "#20c9ee" }} className="text-sm  py-1">
                                Buyers Lounges - For Business Meetings and Networking
                            </p></p>
                    </div>
            
                <p>Select your buyer category</p>
                <div className="flex flex-col mt-2">
                    <label>
                        <input type="radio" name="buyerCategory" onChange={() => setShowCategory("dd")} />
                        <span className="pl-2 font-semibold">Dealer & Distributor</span>
                        {showCategory === "dd" && (
                            <div className="py-2">
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Dealers
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Distributors
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Wholesalers
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Importers
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Trading & Buying
                                    Houses
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Agents
                                </div>
                            </div>
                        )}
                    </label>

                    <label>
                        <input type="radio" name="buyerCategory" onChange={() => setShowCategory("rr")} />
                        <span className="pl-2 font-semibold">Retail Connect</span>
                        {showCategory === "rr" && (
                            <div className="py-2">
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Retailers
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> E-Tailers
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Large Format
                                    Retailers
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Online Traders
                                </div>
                            </div>
                        )}
                    </label>

                    <label>
                        <input type="radio" name="buyerCategory" onChange={() => setShowCategory("ff")} />
                        <span className="pl-2 font-semibold">Furniture Franchise</span>
                        {showCategory === "ff" && (
                            <div className="py-2">
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Franchisees
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Entrepreneurs
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Agents
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Consultant
                                </div>
                            </div>
                        )}
                    </label>

                    <label>
                        <input type="radio" name="buyerCategory" onChange={() => setShowCategory("pp")} />
                        <span className="pl-2 font-semibold">Project Professional</span>
                        {showCategory === "pp" && (
                            <div className="py-2">
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Architects
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Interior Designer
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Real Estate
                                    Developers
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> HORECA
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Corporate Sourcing
                                    Heads
                                </div>
                                <div>
                                    <span className="wingdings">&#x1F7C2;</span> Institutional
                                </div>
                            </div>
                        )}
                    </label>
                </div>

            </div>
            <div className="px-2">
                <div className="BLButton">
                    <a target="_blank" href={`https://portal.wofxworldexpo.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=${showCategory}&source_name=`}>
                        Click Here To Register
                    </a>
                </div>

            </div>



            <div className="mx-auto w-full max-w-screen-2xl  mt-40 pb-5 px-1">

                <h1 className="text-2xl text-center pl-9 py-3">
                    Buyer Registration Form
                </h1>
                <div className="flex justify-between px-1 py-1 rounded-md shadow bg-gray-50">
                    <p>Below is the Buyer Category</p>
                    <button onClick={() => setshowHideInstruction(!showHideInstruction)}>
                        {showHideInstruction ? (
                            <FontAwesomeIcon icon={faAngleUp} />
                        ) : (
                            <FontAwesomeIcon icon={faAngleDown} />
                        )}
                    </button>
                </div>
                {showHideInstruction && (
                    <div className="px-1 bg-gray-50">
                        <p>  <p className=" text-red-600 text-sm">
                            Please register as per your nature of business and profile.
                        </p>
                            <p className="text-sm">
                                Based on your profile selection your entry badge will be generated and
                                you can access the <br />
                                respected Buyers Lounge during your visit
                            </p>
                            <p style={{ color: "#20c9ee" }} className="text-sm  py-1">
                                Buyers Lounges - For Business Meetings and Networking
                            </p></p>
                    </div>
                )}
                <p className="px-1">Select your buyer category</p>
                <div className="grid grid-cols-2 gap-1 place-items-center">
                    <div className="border w-40 flex  flex-col items-center justify-center py-1 mt-2 rounded-md shadow"> <Image
                        src={blLogo1}
                        width={100}
                        height={100}
                        alt="Dealers & Distributors"
                    />
                     <label className="flex items-center">
                        <input type="radio" name="buyerCategory" onChange={() => setShowCategory("dd")} />
                        <span className="pl-2 text-sm">Dealer & Distributor</span>
                        
                    </label></div>
                    <div className="border w-40   flex-col items-center flex justify-center py-1 mt-2 rounded-md shadow">
                        <Image
                            src={blLogo4}
                            width={100}
                            height={100}
                            alt="Dealers & Distributors"
                        />
                         <label className="flex items-center">
                        <input type="radio" name="buyerCategory" onChange={() => setShowCategory("dd")} />
                        <span className="pl-2 text-sm">Retail Connect</span>
                        
                    </label>
                        
                    </div>
                    <div className="border w-40 flex  flex-col items-center justify-center py-1 mt-2 rounded-md shadow"> <Image
                        src={blLogo3}
                        width={100}
                        height={100}
                        alt="Dealers & Distributors"
                    />
                    <label className="flex items-center">
                        <input type="radio" name="buyerCategory" onChange={() => setShowCategory("dd")} />
                        <span className="pl-2 text-sm">Furniture Franchise</span>
                        
                    </label></div>
                    <div className="border w-40 flex  flex-col items-center justify-center py-1 mt-2 rounded-md shadow shadow">
                        <Image
                            src={blLogo2}
                            width={100}
                            height={100}
                            alt="Dealers & Distributors"
                        />
                        <label className=" flex  justify-center items-center">
                        <input type="radio" name="buyerCategory" onChange={() => setShowCategory("dd")} />
                        <span className="pl-2 text-sm">Project Professional</span>
                        
                    </label>
                    </div>
                </div>
                
                <div className="px-2 mt-4">
                <div className="BLButton">
                    <a target="_blank" href={`https://portal.wofxworldexpo.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=${showCategory}&source_name=`}>
                        Click Here To Register
                    </a>
                </div>

            </div>


            </div>




        </>
    );
}

export default Buyer_lounges;
