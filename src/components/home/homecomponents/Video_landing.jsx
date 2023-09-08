import React, { useState, useEffect } from "react";
import "./HomeComponent.css"; // Import the CSS file
import landingVideo from "../../../assets/landingVideo.mp4";
import landingImage from "../../../assets/landingImage.jpg";

function VideoLanding() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
    setIsMobile(newWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="landing_Page_video_container">
      {isMobile ? (
        <img className="mobile-image" src={landingImage} alt="Mobile_Image" />
      ) : (
        <video
          className="landing_page_video"
          src={landingVideo}
          autoPlay
          loop
          muted
        ></video>
      )}
    </div>
  );
}

export default VideoLanding;
