import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Margue() {
  return (
    <div>
        <Marquee direction="left" pauseOnHover={true} speed={100} delay={5} >
          <div className="image_wrapper">
            <img src='/assests/countyLogo/1.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='/assests/countyLogo/2.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='/assests/countyLogo/3.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='/assests/countyLogo/3A.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='/assests/countyLogo/3B.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='/assests/countyLogo/3C.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='/assests/countyLogo/4.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='/assests/countyLogo/5.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='/assests/countyLogo/6.png' alt="" />
          </div>
          <div className="image_wrapper">
            <img src='/assests/countyLogo/7.png' alt="" />
          </div>
        </Marquee>
      </div>
  )
}
