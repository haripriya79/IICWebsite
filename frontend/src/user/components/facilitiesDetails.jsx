import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Base from "./base";
import Footer from "./footer";
import Navbar from "./navbar";

import infra from "../../assets/facilites/infra.svg";
import financial from "../../assets/facilites/financial.svg";
import highEnd from "../../assets/facilites/high-end.svg";
import host from "../../assets/facilites/host.svg";
import mentor from "../../assets/facilites/mentor.svg";
import networks from "../../assets/facilites/network.svg";

export default function FacilitiesDetails() {
  const [index, setIndex] = useState(0);
  const FacilitiesDetails = [
    {
      name: "Infrastructure Facilities",
      icon: infra,
      details: [
        {
          title: "Work Space",
          description: "",
        },
        {
          title: "Conference Rooms",
          description: "",
        },
        {
          title: "Tinkering Labs",
          description: "",
        },
        {
          title: "Library",
          description: "",
        },
      ],
    },
    {
      name: "Host Institute Benefits",
      icon: host,
      details: [
        {
          title: "Availability of skilled and well-trained interns.",
          description: "",
        },
        {
          title:
            "Outreach to various entrepreneurial and innovation events, conferences, bootcamps inside as well as outside the institute",
          description: "",
        },
      ],
    },
    {
      name: "Technical Mentorship",
      icon: mentor,
      details: [
        {
          title:
            "Advisory through a curated panel of mentors on aspect like technology management, business plan, idea validation",
          description: "",
        },
        { title: "Technical mentorship through faculty", description: "" },
        {
          title: "IPR & Legal Support",
          description: "",
        },
      ],
    },
    {
      name: "High End Tech Support",
      icon: highEnd,
      details: [
        {
          title: "Desktop Computer, Desktop phones, printing facility",
          description: "",
        },
        { title: "Software Licences", description: "" },
        {
          title: "Specialized Hardware and Computing Devices",
          description: "",
        },
      ],
    },
    {
      name: "Networking & Outreach",
      icon: networks,
      details: [
        {
          title: "Networking and outreach through partner organization",
          description: "",
        },
        {
          title:
            "Facilitation to start-ups to participate in various outreach events organized",
          description: "",
        },
      ],
    },
    {
      name: "Financial Assitence",
      icon: financial,
      details: [
        {
          title: "Alumni fellowships for host institute graduates",
          description: "",
        },
        { title: "Seed Funding Support", description: "" },
        { title: "Deferred Payment Facility", description: "" },
      ],
    },
  ];
  const changeIndex = (index) => {
    setIndex(index);
  };
  return (
    <div className="container-fluid p-0">
      <div className="col-12">
        <Navbar initialScrollPosition={0}></Navbar>
      </div>
      <div className=" row main-container my-5">
        <div
          className="left col-12 col-md-4 col-lg-4 sticky-top"
          style={{ height: "fit-content", top: "70px" }}
        >
          <div className="p-5 d-flex flex-column align-items-start facilities-container w-auto">
            {FacilitiesDetails.map((value, ind) => {
              return (
                <Link
                  className={`my-3 py-1 text-black hover-effect  h6 ${
                    index === ind ? " link-active" : ""
                  }`}
                  to="#"
                  onClick={() => {
                    changeIndex(ind);
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={value.icon}
                    alt=""
                    width="35px"
                    height="30px"
                    className="me-2"
                  />{" "}
                  {value.name}
                </Link>
              );
            })}
          </div>

         
        </div>
        <div className="right col-12 col-md-8 col-lg-8 mt-5 pt-5 position-relative ps-5">
            <h4 className="fw-semibold">{FacilitiesDetails[index].name}</h4>
            <ul role="list pt-2">
            {FacilitiesDetails[index].details.map((value,index)=>{
              return(
                <li className="h6 p-2">
                  {value.title}
                </li>
              )
            })}

            </ul>
           
          </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
