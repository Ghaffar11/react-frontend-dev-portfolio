import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";

class Header extends Component {
  render() {
    const { sharedData } = this.props;
    const name = sharedData?.name || "";
    const titles = sharedData?.titles || [];

    // Create animation sequence: [title1, 1500, title2, 1500, ...]
   /* const animationSequence = titles
      .map((title) => [title.toUpperCase(), 1500])
      .flat();*/

    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 140, display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon animated-header-icon"
                data-icon="mdi:code-tags"
                data-inline="false"
              ></span>
              <br />

              {/* Name */}
              <h1 className="mb-0">
                <p className="netflix-title">{name}</p>
              </h1>

              {/* Tagline */}
              <h2 className="streaming-banner">
                STREAMING CODE. ONE DEPLOYMENT AT A TIME.
              </h2>

           
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
