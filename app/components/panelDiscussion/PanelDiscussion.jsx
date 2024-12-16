
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PanelDiscussion() {
 
    return (
        <div className="mx-auto w-full max-w-screen-2xl mt-32 overflow-hidden" >
            <div className="py-4 px-4 md:px-44 md:py-12">

                <div className=" border-r border-b relative  overflow-hidden panelMainBox"  >

                 

                    <Image
                        className="rounded-t-lg relative "
                        src="/assests/business-talk.png"
                        width="1000"
                        height="250"
                        alt="Business Talk"
                    />
                    <div class=" relative  grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 py-4">
                        <div class=" speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (1).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong> Hussaine Kesury</strong>
                                <br />
                                <span class="text-sm"><em>Chief Business Officer, <br /> Pepperfry</em></span>
                            </div>
                        </div>

                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (2).png" width="90" height="230" alt="Speaker Image" />
                            <div class="text-center">
                                <strong> Huzefa Samplewala</strong>
                                <br />
                                <span class="text-sm"><em>President, Association of <br /> Furniture Manufacturers and Traders</em></span>
                            </div>
                        </div>
                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (3).png" width="120" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Mahesh M.</strong>
                                <br />
                                <span class="text-sm"><em>CEO,  <br /> Creaticity</em></span>
                            </div>
                        </div>
                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (4).png" width="90" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong> Puneet Dudeja</strong>
                                <br />
                                <span class="text-sm"><em>Director, Business Development, <br /> South Asia, WGSN</em></span>
                            </div>
                        </div>
                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (5).png" width="88" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong> Rahul Mehta</strong>
                                <br />
                                <span class="text-sm"><em>CEO, Furniture & Fittings <br />Skill Council</em></span>
                            </div>
                        </div>
                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (6).png" width="88" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong> Serkan Sen</strong>
                                <br />
                                <span class="text-sm"><em>Director, International Markets <br />Konfor</em></span>
                            </div>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-9 px-2">
                        <Link className="rounded text-center bg-black text-white px-6 py-3 cursor-pointer hover:bg-white hover:text-black" style={{ border: "1px solid black", letterSpacing: "2px" }} href="/">
                            Click Here to Register &raquo;
                        </Link>
                       
                    </div>
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    );
}
