import React from "react";

function Home() {
  return (
    // <--Home page details-->
    <div className="home_header d-flex justify-content-center" id="home">
      <div className="caption-header">
        <div className="home-hd">Welcome!</div>
        <h2>
          I'm <span className="name-hd">Vishnu</span>priya S
        </h2>
        <h4 className="stack-hd">Full Stack Developer</h4>
        <a href="#contact">
          <button class="button">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Hire Me</span>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
