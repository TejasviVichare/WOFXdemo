'use client';
import React, { useState } from 'react';
import Image from "next/image";
import preImage1 from '../../../public/assests/previewPopup.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Importing the close icon
import Link from 'next/link';


export default function PreviewPopup() {
    const [isOpen, setIsOpen] = useState(true); // Open by default

    const handleClose = () => setIsOpen(false);

    return (
        <>
            {isOpen && (
                <div className={`popup-overlay ${isOpen ? 'fade-in' : 'fade-out'}`}>
                    <div className='popup-content'>
                        <Image
                            className="post-show-img"
                            src={preImage1}
                            width='auto'
                            height='auto'
                            alt="Preview 1"
                        />
                        <button onClick={handleClose} className="close-button">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>

                        <Link href="/preview-2024" className='bg-white text-black mt-4 px-8 py-2 tracking-wider rounded-sm'>
                            Click Here
                        </Link>

                        <span className='text-sm py-3 text-white'>View leading Indian & International Furniture Brands @ WOFX</span>
                    </div>
                </div>
            )}

            <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 90px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          z-index: 9999; /* Corrected zIndex */
        }
         

   .popup-content {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 8px;
    border-radius: 8px; /* Adjusted for more noticeable rounding */
    text-align: center;
    position: relative;
    animation: slide-in 0.5s forwards; /* Animation for popup */
    backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Corrected align-items */
    z-index: 9999 !important; /* Corrected zIndex */
}


        .close-button {
          margin-top: -20px; /* Adjusted for positioning */
          padding: 5px; /* Smaller padding for icon */
          background-color: #fff; /* Transparent background */
          border: none; /* No border */
          cursor: pointer;
          position: absolute;
          top: 5px; /* Positioning the icon */
          right: -10px; /* Positioning the icon */
          width:30px;
          height:30px;
          display:flex;
          justify-content:center;
          aligin-item:center;
          border-radius:100%
        }

        @keyframes slide-in {
          from {
            transform: translateY(-50px);
            opacity: 0; /* Start hidden */
          }
          to {
            transform: translateY(0);
            opacity: 1; /* End fully visible */
          }
        }

        .fade-in {
          opacity: 2; /* Fully visible */
        }

        .fade-out {
          opacity: 0; /* Fully transparent */
        }
      `}</style>
        </>
    );
}