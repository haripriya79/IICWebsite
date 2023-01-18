import React, { useEffect } from "react";
import WebFont from "webfontloader";
import Navbar from "./components/navbar";
import "../main-style.css";
import backgroundImg from "../assets/images/image1.jpg";
import startup from "../assets/images/startup-space.jpeg";
import thrustAreas from "../assets/images/thrustareas.png";
import { ourImpact, relatedInformation } from "../constant";
import Footer from "./components/footer";
import OurPartners from "./components/ourPartners";

export default function Home() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Hind:regular"],
      },
    });
  }, []);
  return (
    <div className="container-fluid p-0">
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
                  <h1 className="display-4 text-center text-white fw-semibold">
                    Innovation and Incubation Center.
                    <br />
                    JNTUA
                  </h1>
                </div>
                <div className="text-center text-white ">
                  <p className="h5 fw-normal m-3">INSPIRE TO INNOVATE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row main-container pt-md-5 pt-2 mt-5 ">
        <div className="col-12 col-md-6 px-sm-5">
          <div className="co-12">
            <h2 className="h2 fw-semibold lh-long">About Us</h2>
          </div>
          <div className="col-12 home-about-paragraph">
            <p className="para-17">
              In 2018 Jawaharlal Nehru Technological University Anantapur
              established the Skill Development and Incubation Centre to provide
              training in all aspects of entrepreneurship and to create an
              ecosystem that allows JNTUA students to be creative and
              innovative, resulting in the creation of business models with
              social significance and financial growth. Our goal is to assist
              students in bringing their concepts to life. The incubation center
              provides facilities, mentorship and networking to achieve the aims
              of a succesful business launch. The incubation & Innovation center
              at JNTUA Ananthapuramu fosters innovation, research and
              entrepreneurial activities in technology-based areas.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 px-sm-5">
          <figure className="home-about-image-wrapper">
            <img
              src={startup}
              loading="lazy"
              alt="Incubation center logo"
              className="home-about-image"
              style={{ objectFit: "contain" }}
            />
          </figure>
        </div>
      </div>
      <div className="row main-container pt-md-5 pt-2 mt-5">
        <div className="col-12 col-md-2"></div>
        <div className="col-12 col-md-8">
          <h5 className=" text-center thrust-areas  fs-3 lh-base mx-sm-2 mx-1 ">
            JNTUA Innovation & Incubation Center is actively involved in
            developing the paradigm of entrepreneurial mindset & environment of
            ideating, creating and commercializing the ventures aligned to the
            core theme of incubation center​
          </h5>
          <h2 className="m-auto divider my-5" />
        </div>
        <div className="col-12 col-md-2"></div>
        <div className="col-12 my-sm-2 ">
          <img src={thrustAreas} alt="" style={{ objectFit: "contain" }} />
        </div>
      </div>
      <div className="row impact mt-5">
        <div className="col-12">
          <h2 className="h2 fw-semibold lh-long text-black text-center">
            Our Impact
          </h2>
        </div>
        <div className="col-12">
          <div className="row main-container">
            {ourImpact.map((value, index) => {
              return (
                <div className="col-12 col-sm-5 col-lg-4 mx-auto my-4">
                  <div className="px-2 impact-block">
                    <h5 className="fw-semibold text-center">{value.name}</h5>
                    <p
                      className="pt-4 fw-semibold"
                      style={{ fontFamily: "Hind", fontSize: "60px" }}
                    >
                      {value.count}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row my-sm-5 py-sm-5 my-3 py-3 px-2 ">
        <div className="col-12 pb-5">
          <h2 className="h2 fw-semibold lh-long text-black text-center">
            Related Information
          </h2>
          <p className="para-18  text-center ">
            An overview of what IIC offers
          </p>
        </div>
        <div className="col-12">
          <div className="row main-container">
            {relatedInformation.map((value, index) => {
              return (
                <div className="col-12 col-lg-4 text-center">
                  <span
                    class="material-symbols-outlined primary-color"
                    style={{ fontSize: "48px" }}
                  >
                    {value.iconName}
                  </span>
                  <h5 className="fw-semibold m-3">{value.title}</h5>
                  <p className="para-17 px-2">{value.description} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-top"></div>
      <OurPartners></OurPartners>
      <div className="border-top"></div>
      <Footer></Footer>
    </div>
  );
}
