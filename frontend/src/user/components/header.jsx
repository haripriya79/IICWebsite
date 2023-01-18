import React from "react";
import backgroundImg from "../../assets/images/image1.jpg";
import Navbar from "./navbar";

export default function Header({title='',subtitle=""}) {
  return (
    <div
      className="row home-hero-section"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImg})`,
      }}
    >
      <Navbar></Navbar>
      <div className="col-12">
        <div className="px-1">
          <div className="main-container">
            <div className="home-hero-container">
              <div className="home-hero-heading">
                <h1 className="display-4 text-center text-white text-wrap fw-semibold">
                {title}
                </h1>
              </div>
              <div className="text-center text-white ">
                {subtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
