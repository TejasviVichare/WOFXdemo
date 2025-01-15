"use client";
import ImageGallery from "react-image-gallery";
import { galleryImage2024 } from "../contents/image";
import "react-image-gallery/styles/css/image-gallery.css";

import "./gallery.css"




function page() {
  function renderLeftNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        &#8592;
      </button>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-right-nav"
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      
      >
        &#x2192;
      </button>
    );
  }

  return (
    <div className="mx-auto   w-full max-w-screen-2xl mt-24 ">
      <div className="flex  justify-center items-center gap-4">
      
      <p className="text-center leading-relaxed  text-3xl font-semibold ">
        Photo Gallery
      </p>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5 wofxGallry">
          <ImageGallery 
            items={galleryImage2024}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
