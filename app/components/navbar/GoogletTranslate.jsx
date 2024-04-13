'use client'
import { useEffect, useRef } from "react";

function GoogletTranslate() {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    let intervalId;
    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        clearInterval(intervalId);
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            gaTrack: true,
            gaId: 'UA-XXXXX-X'
          },
          googleTranslateRef.current
        );
      }
    };
    intervalId = setInterval(checkGoogleTranslate, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div ref={googleTranslateRef} className="google-translate"></div>
  );
}

export default GoogletTranslate;
