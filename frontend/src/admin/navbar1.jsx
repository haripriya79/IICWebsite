import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { signout } from "./auth/helper";
import { NavlinkDropdown, Navlink } from "./navlinks";

export default function Navbar1() {
  const path = useLocation().pathname;
  return (
    <div className=" navbar   expand-md navbar-light ">
      <div className="container-fluid d-flex flex-md-column  align-items-center    mb-auto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  -items-center justify-content-between p-0">
        <Link
          className="navbar-brand d-flex flex-md-column flex-row align-items-center  ps-3"
          to="/admin/dashboard/#"
        >
          <img
            src={logo}
            alt=""
            width="64"
            height="64"
            className="d-inline-block align-text-top"
          />
          <h6 className="d-sm-inline-block d-none ps-1 fw-bold text-center header text-wrap">
            Incubation & Innovation center
            <br /> JNTUA
          </h6>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse w-100"
          id="navbarSupportedContent"
        >
          <ul className="nav nav-pills flex-column w-100">
            <Navlink
              activeId={path}
              iconName="home"
              title="Dashboard"
              url="/admin/dashboard/"
            ></Navlink>
            <NavlinkDropdown
              activeId={path}
              addUrl="/admin/addTeam"
              manageUrl="/admin/teamMembers"
              iconName="group"
              title="Team"
              subTitle="Team"
            ></NavlinkDropdown>
            <NavlinkDropdown
              activeId={path}
              addUrl="/admin/addImage"
              manageUrl="/admin/images"
              iconName="image"
              title="Images"
              subTitle="Image"
            ></NavlinkDropdown>
            <NavlinkDropdown
              activeId={path}
              addUrl="/admin/addStartup"
              manageUrl="/admin/stratups"
              iconName="business_center"
              title="Startups"
              subTitle="Startup"
            ></NavlinkDropdown>
            <NavlinkDropdown
              activeId={path}
              addUrl="/admin/addEvent"
              manageUrl="/admin/events"
              iconName="event"
              title="Events"
              subTitle="Event"
            ></NavlinkDropdown>
            <NavlinkDropdown
              activeId={path}
              addUrl="/admin/addVideo"
              manageUrl="/admin/videos"
              iconName="video_library"
              title="Videos"
              subTitle="Video"
            ></NavlinkDropdown>

            <NavlinkDropdown
              activeId={path}
              addUrl="/admin/addTestimonial"
              manageUrl="/admin/testimonials"
              iconName="message"
              title="Testimonials"
              subTitle="Testimonial"
            ></NavlinkDropdown>
            <Navlink
              activeId={path}
              iconName="contact_support"
              title="Contact Us"
              url="/admin/contactUs/"
            ></Navlink>
            <Navlink
              activeId={path}
              iconName="lock_reset"
              title="Change Password"
              url="/admin/change-password/"
            ></Navlink>
             <Navlink
              activeId={path}
              iconName="logout"
              title="Sign Out"
              url="/admin/signout/"
            ></Navlink>

            
          </ul>
        </div>
      </div>
    </div>
  );
}
