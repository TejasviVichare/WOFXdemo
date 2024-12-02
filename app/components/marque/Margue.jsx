import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Margue() {

    const logoFilenames = [
        "1.png", "2.png", "3.png", "3A.png", "3B.png", "3C.png", "4.png", "5.png",
        "6.png", "7.png","7A.png", "8.png", "9.png", "10.png", "11.png", "11A.png","12.png", "13.png",  "16.png", "17.png", "18.png", "19.png", "20.png",
        "21.png", "21A.png", "21B.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png",
        "28.png", "29.png", "30.png", "31.png", "32.png", "33.png","33A.png","33B.png","33C.png","33D.png","33E.png","33F.png", "33G.png","33H.png","33I.png","33J.png","33K.png", "33L.png",
        "35.png","35A.png", "36.png", "36A.png", "37.png", "38.png","38A.png", "39.png", "40.png", "41.png",
        "42.png", "42A.png", "42B.png","42BB.png", "42BBB.png","42BBBB.png", "42C.png", "43.png", "44.png", "45.png", "46.png", "47.png", "48.png","48A.png","48B.png","48C.png",
        "49.png", "49A.png", "50.png", "51.png", "52.png"
    ];

    return (
        <div>
            <Marquee direction="left" pauseOnHover={true} speed={100} delay={2} >
                {logoFilenames?.map((filename, index) => (
                    <div className="image_wrapper" key={index}>
                        <img src={`/assests/countyLogo/${filename}`} alt={`Logo ${filename}`} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}
