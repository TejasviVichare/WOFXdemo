import React from 'react'
import Image from 'next/image'

export default function PanelDiscussion() {
    return (
        <div className="mx-auto w-full max-w-screen-2xl mt-32">
            <div className="py-4 px-4 md:px-64 md:py-12 ">
                <div className='' style={{ background: "#f0f0f5" }}>
                    <Image className="rounded-t-lg" src="/assests/business-talk.png" width="1000" height="250" />
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-2">
                        <div class=" speakerBox bg-white -gray-300 rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (1).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Mr. Hussaine Kesury</strong>
                                <br />
                                <span class="text-sm"><em>CEO, <br /> Pepperfry.com</em></span>
                            </div>
                        </div>

                        <div class="speakerBox bg-white -gray-300 rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (2).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Mr. Huzefa Samplewala</strong>
                                <br />
                                <span class="text-sm"><em>President, Association of Furniture <br /> Manufacturers and Traders</em></span>
                            </div>
                        </div>
                        <div class="speakerBox bg-white -gray-300 rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (3).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Dr. Mahesh M.</strong>
                                <br />
                                <span class="text-sm"><em>CEO,  <br /> Creaticity</em></span>
                            </div>
                        </div>
                        <div class="speakerBox bg-white -gray-300 rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (4).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Mr. Puneet Dudeja</strong>
                                <br />
                                <span class="text-sm"><em>Director, Business Development, <br /> South Asia, WGSN</em></span>
                            </div>
                        </div>
                        <div class="speakerBox bg-white -gray-300 rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2" src="/assests/speaker (5).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center">
                                <strong>Mr. Rahul Mehta</strong>
                                <br />
                                <span class="text-sm"><em>CEO, Furniture & Fittings <br />Skill Council</em></span>
                            </div>
                        </div>
                        <div class="speakerBox bg-white -gray-300 rounded-lg flex flex-col justify-center items-center p-4 w-full h-60">
                            <Image className="rounded-t-lg mb-2 hidden" src="/assests/speaker (5).png" width="100" height="250" alt="Speaker Image" />
                            <div class="text-center hidden">
                                <strong>Mr. Rahul Mehta</strong>
                                <br />
                                <span class="text-sm"><em>CEO, Furniture & Fittings <br />Skill Council</em></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
