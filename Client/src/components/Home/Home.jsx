import React from "react";
import "./Home.css";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeSectionA">
        <div className="homeBackVid">
          <div className="homeBackLogo"></div>
          <video
            id="home-bg-A"
            autoPlay
            loop
            muted
            width="1200" height="600"
            src="https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
            type="video/mp4"
          ></video>
        </div>
        <div className="homeFrontVidWrap">
          <div className="homeFrontVid">
            <video
                    id="frontVid"
                    autoPlay
                    loop
                    muted
                    width="1000" height="500"
                    src="https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
                    type="video/mp4"
                    ></video>
          </div>
          <div className="homeFrontVidFrame">
          <div className="homeFrontLogo"></div>
          </div>
        </div>
        <div className="homeSectionABottom"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
