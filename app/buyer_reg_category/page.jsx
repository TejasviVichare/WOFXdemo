'use client'
import { useState } from "react";

function Buyer_lounges() {
    const [showCategory, setShowCategory] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleCategoryChange = (category) => {
        setShowCategory(category);
        setErrorMessage(""); // Clear the error message when a category is selected
    };

    const handleRegisterClick = () => {
        if (!showCategory) {
            setErrorMessage("Please select a buyer category before proceeding.");
        } else {
            setErrorMessage("");
            window.open(`https://portal.wofxworldexpo.com/buyer_reg_portal.php?form_name=pre-buyer-registration&country=${showCategory}&source_name=`, '_blank');
        }
    };

    return (
        <>
            <div className="mx-auto w-full max-w-screen-2xl mt-40 pb-5 px-1">
                <div className="flex justify-center ">
                    <div className="w-2/4 bg-neutral-50 px-2 py-4 rounded-md">
                        <h1 className="text-3xl text-center pl-9 py-3">
                            Buyer Registration Form
                        </h1>
                        <div className="bg-gray-50 px-3 py-2">
                            <div>
                                <p className="text-red-600 text-lg">
                                    Please register as per your nature of business and profile.
                                </p>
                                <p className="text-lg">
                                    Based on your profile selection your entry badge will be generated and
                                    you can access the respected Buyers Lounge during your visit.
                                </p>
                                <p style={{ color: "#20c9ee" }} className="text-lg py-1">
                                    Buyers Lounges - For Business Meetings and Networking
                                </p>
                            </div>
                        </div>
                        <p className="px-2 mt-3 text-lg"><strong>Select your buyer category</strong></p>
                        <div className="flex flex-col mt-2 px-2">
                            <label>
                                <input type="radio" name="buyerCategory" onChange={() => handleCategoryChange("dd")} />
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
                                            <span className="wingdings">&#x1F7C2;</span> Trading & Buying Houses
                                        </div>
                                        <div>
                                            <span className="wingdings">&#x1F7C2;</span> Agents
                                        </div>
                                    </div>
                                )}
                            </label>
                            <label>
                                <input type="radio" name="buyerCategory" onChange={() => handleCategoryChange("rc")} />
                                <span className="pl-2 font-semibold">Retail Connect</span>
                                {showCategory === "rc" && (
                                    <div className="py-2">
                                        <div>
                                            <span className="wingdings">&#x1F7C2;</span> Retailers
                                        </div>
                                        <div>
                                            <span className="wingdings">&#x1F7C2;</span> E-Tailers
                                        </div>
                                        <div>
                                            <span className="wingdings">&#x1F7C2;</span> Large Format Retailers
                                        </div>
                                        <div>
                                            <span className="wingdings">&#x1F7C2;</span> Online Traders
                                        </div>
                                    </div>
                                )}
                            </label>
                            <label>
                                <input type="radio" name="buyerCategory" onChange={() => handleCategoryChange("ff")} />
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
                                <input type="radio" name="buyerCategory" onChange={() => handleCategoryChange("pp")} />
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
                                            <span className="wingdings">&#x1F7C2;</span> Real Estate Developers
                                        </div>
                                        <div>
                                            <span className="wingdings">&#x1F7C2;</span> HORECA
                                        </div>
                                        <div>
                                            <span className="wingdings">&#x1F7C2;</span> Corporate Sourcing Heads
                                        </div>
                                        <div>
                                            <span className="wingdings">&#x1F7C2;</span> Institutional
                                        </div>
                                    </div>
                                )}
                            </label>
                        </div>
                        {errorMessage && <p className="text-red-600 px-2 mt-3">{errorMessage}</p>}
                        <div className="px-2">
                            <div className="mt-4">
                                <button className="BLButton w-60" onClick={handleRegisterClick}>
                                    Here To Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Buyer_lounges;
