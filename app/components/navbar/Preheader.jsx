import React from "react";
import GoogletTranslate from "./GoogletTranslate";
import Link from "next/link";

function PreHeader() {
  return (
    <div className='mx-auto border-y-rose-500   w-full max-w-screen-2xl'>
      <div className="pre-header flex-wrap" style={{ display: "flex", alignItems:"center", flexDirection: "row-reverse", columnGap: "20px", paddingTop: "2px", paddingBottom:"2px", paddingLeft: "70px", paddingRight: "70px", height: "40px" }}>
        <div className="translate">
          <GoogletTranslate />
        </div>
        <div className="mt-3 md:mt-0">
          <p className="pre-header-button" style={{ color: "rgb(203 213 225)",  fontSize: "14px", height: "100%", fontWeight: "500", textTransform: "uppercase" }}>
           LOGIN
            &nbsp;
            <span>
              <a className="px-2 py-2 rounded-sm" style={{ background: "#e73e42", color: "white" }} href="https://bee2bee.asia/wofx/login">Exhibitor</a>
              &nbsp;&nbsp;&nbsp;&nbsp;<a className="px-2 py-2 rounded-sm" style={{ background: "#66c3d0", color: "white" }} href="https://bee2bee.asia/wofx/login">Buyer</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreHeader;
