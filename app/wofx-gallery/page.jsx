"use client";
import ImageGallery from "react-image-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import galleryImage from "../contents/image";
import "react-image-gallery/styles/css/image-gallery.css";

export const metadata = {
  title: "Wofx Gallery",
};

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
    <div className="mx-auto   w-full max-w-screen-2xl mt-36 ">
      <h1 className="text-center text-3xl font-semibold mt-4  py-10">
        Photo Gallery
      </h1>
      <div className="flex justify-center">
        <div className="w-4/5 wofxGallry">
          <ImageGallery
            items={galleryImage}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
          />
        </div>
      </div>
    </div>
  );
}

export default page;
