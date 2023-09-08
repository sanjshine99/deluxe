import React from "react";
import "./Home.css";
import Video from "./homecomponents/Video_landing";
import Gallery from "./homecomponents/Gallery_landing";
import Reviews from "./homecomponents/CustomerReviews";
import Partners from "./homecomponents/Partners";

function Home() {
  return (
    <div className="container">
      <Video />
      <div className="component">
        <Gallery />
      </div>
      <div className="component">
        <Reviews />
      </div>
      <div className="component">
        <Partners />
      </div>
    </div>
  );
}

export default Home;
