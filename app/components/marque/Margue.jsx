import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Margue() {

    const logoFilenames = [
        "1.png", "2.png", "3.png", "3A.png", "3B.png", "3C.png", "4.png", "5.png",
        "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "13A.png",
        "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png",
        "21.png", "21A.png", "21B.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png",
        "28.png", "29.png", "30.png", "31.png", "32.png", "33.png", "34.png",
        "35.png","35A.png", "36.png", "37.png", "38.png","38A.png", "39.png", "40.png", "41.png",
        "42.png", "43.png", "44.png", "45.png", "46.png", "47.png", "48.png",
        "49.png", "50.png", "51.png"
    ];

    return (
        <div>
            <Marquee direction="left" pauseOnHover={true} speed={100} delay={2} >
                {logoFilenames?.map((filename, index) => (
                    <div className="image_wrapper" key={index}>
                        <img src={`/assests/countyLogo/${filename}`} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}
