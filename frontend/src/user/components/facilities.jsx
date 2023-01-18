import React from "react";
import Base from "./base";

import { Link } from "react-router-dom";

import infra from "../../assets/facilites/infra.svg";
import financial from "../../assets/facilites/financial.svg";
import highEnd from "../../assets/facilites/high-end.svg";
import host from "../../assets/facilites/host.svg";
import mentor from "../../assets/facilites/mentor.svg";
import networks from "../../assets/facilites/network.svg";


export default function Facilities() {
  const FacilitiesDetails = [
    {
      name: "Infrastructure Facilities",
      icon: infra,
    },
    {
      name: "Host Institute Benefits",
      icon: host,
    },
    {
      name: "Technical Mentorship",
      icon: mentor,
    },
    {
      name: "High End Tech Support",
      icon: highEnd,
    },
    {
      name: "Networking & Outreach",
      icon: networks,
    },
    {
      name: "Financial Assitence",
      icon: financial,
    },
  ];
 
  return (
    <Base title="Facilities">
      <div className="row main-container my-5 py-5">
        {FacilitiesDetails.map((value, index) => {
          return (
            <Link to="/facilities-details" className=" col-12 col-md-6 col-lg-4 my-4" style={{textDecoration:'none'}}>
            
              <div className="impact-block facilities">
                <img src={value.icon} alt="" width={"60px"} height={"60px"} />
                <h6 className="my-3 text-black">{value.name}</h6>
              </div>
           
            </Link>
            
          );
        })}
      </div>
    </Base>
  );
}
