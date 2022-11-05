import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeSectionA">
        <div className="homeBackVid">
          <video
            id="home-bg-A"
            autoPlay
            loop
            muted
            src="https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
            type="video/mp4"
          ></video>
        </div>
        <span className="homeFrontVidWrap">
          <div className="homeFrontVid">
              <video
                    id="frontVid"
                    autoPlay
                    loop
                    muted
                    src="https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
                    type="video/mp4"
                    ></video>
          </div>
          <div className="homeFrontVidFrame"></div>
        </span>
        <div className="homeLogo"></div>

        <div className="homeSectionABottom"></div>
      </div>
      
      {/* Home  */}
    </div>
  );
}

export default Home;
