"use client";
import React, { useState } from "react";
import Image from "next/image";
import Backgroundpattern from "../backgroundPattern/Backgroundpattern";
import Link from "next/link";

export default function PanelDiscussion() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        console.log(clientX, clientY)
        setPosition({ x: clientX, y: clientY });
    };
    return (
        <div className="mx-auto w-full max-w-screen-2xl mt-32 overflow-hidden" onMouseMove={handleMouseMove}>
            <div className="py-4 px-4 md:px-44 md:py-12">

                <div className=" border-r border-b relative z-50 overflow-hidden panelMainBox"  >

                    {/* <div className="absolute inset-0 z-0 pointer-events-none">
                        <Backgroundpattern />
                    </div> */}

                    <div
                        className="absolute"
                        style={{
                            width: '500px',
                            height: '500px',
                            borderRadius: '100%',
                            backgroundImage: 'radial-gradient(circle, #a6ccfb, #afd0fa, #b8d5f9, #c0d9f8, #c9ddf7, #d1e1f7, #d9e5f8, #e1e9f8, #eaeefa, #f2f3fb, #f9f9fd, #ffffff)',
                            filter: 'blur(30px)',
                            position: 'absolute',
                            zIndex:"-3",
                            top: position.y + 250, // Offset for centering the gradient
                            left: position.x - 400, // Offset for centering the gradient
                            pointerEvents: 'none', // Ensures it doesn't block mouse interaction
                        }}
                    />

                    <Image
                        className="rounded-t-lg relative z-50 "
                        src="/assests/business-talk.png"
                        width="1000"
                        height="250"
                        alt="Business Talk"
                    />
                    <div class=" relative z-50 grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 py-4">
                        <div class=" speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (1).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Mr. Hussaine Kesury</strong>
                                <br />
                                <span class="text-sm"><em>CEO, <br /> Pepperfry.com</em></span>
                            </div>
                        </div>

                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (2).png" width="90" height="230" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Mr. Huzefa Samplewala</strong>
                                <br />
                                <span class="text-sm"><em>President, Association of Furniture <br /> Manufacturers and Traders</em></span>
                            </div>
                        </div>
                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (3).png" width="120" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Dr. Mahesh M.</strong>
                                <br />
                                <span class="text-sm"><em>CEO,  <br /> Creaticity</em></span>
                            </div>
                        </div>
                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (4).png" width="90" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Mr. Puneet Dudeja</strong>
                                <br />
                                <span class="text-sm"><em>Director, Business Development, <br /> South Asia, WGSN</em></span>
                            </div>
                        </div>
                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (5).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Mr. Rahul Mehta</strong>
                                <br />
                                <span class="text-sm"><em>CEO, Furniture & Fittings <br />Skill Council</em></span>
                            </div>
                        </div>
                        <div class="speakerBox  rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2 hidden" src="/assests/speaker (5).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center hidden">
                                <strong>Mr. Rahul Mehta</strong>
                                <br />
                                <span class="text-sm"><em>CEO, Furniture & Fittings <br />Skill Council</em></span>
                            </div>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <div className="flex justify-center">
                        <Link className="rounded  bg-black text-white px-6 py-3  cursor-pointer hover:bg-white hover:text-black  " style={{ border: "1px solid black", letterSpacing: "2px" }} href="/">Click Here to Register  &raquo;</Link>
                    </div>
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    );
}
