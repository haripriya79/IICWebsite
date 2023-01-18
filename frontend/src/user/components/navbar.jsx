import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Navlink, NavlinkDropdown } from "./navlinks";
export default function Navbar({ initialScrollPosition = 50 }) {
  const [scrollPosition, setPosition] = useState(0);
  const path = useLocation().pathname;
  function updatePosition() {
    setPosition(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const offcanvasElement = useRef();

  const openCanvas = () => {
    offcanvasElement.current.classList.toggle("open");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrollPosition >= initialScrollPosition
          ? " navbar-light shadow-sm bg-white scrolled"
          : "navbar-dark"
      }`}
      aria-label="Main navigation"
    >
      <div className="container-fluid main-container">
        <Link
          className="navbar-brand d-flex flex-row align-items-center p-0 m-sm-0"
          to="/"
        >
          <img src={logo} alt="" className="nav-logo" />
          <h5 className="logo-title _600-bold text-wrap text-start  px-2 lh-1 d-sm-inline d-none ">
            JNTUA <br /> Innovation and Incubation Center{" "}
          </h5>
        </Link>
        <button
          className="navbar-toggler p-0 border-0 m-2"
          type="button"
          id="navbarSideCollapse"
          aria-label="Toggle navigation"
          onClick={openCanvas}
        >
          <span
            className="material-symbols-outlined toggler-icon m-1"
            style={{ fontSize: "32px" }}
          >
            menu
          </span>
        </button>

        <div
          className="navbar-collapse offcanvas-collapse"
          ref={offcanvasElement}
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav ms-lg-auto me-lg-0 me-auto mb-2 mb-lg-0">
            <Navlink title="Home" url="/" activeId={path}></Navlink>
            <NavlinkDropdown
              dropdowns={[
                { name: "Team", url: "/team" },
                { name: "Gallery", url: "/gallery" },
                { name: "Videos", url: "/videos" },
                { name: "Contact Us", url: "/contact-us" },
              ]}
              title="About"
              activeId={path}
            ></NavlinkDropdown>
               <Navlink title="Startups" url="/startups" activeId={path}></Navlink>
               <Navlink title="Facilities" url="/facilities" activeId={path}></Navlink>
               <Navlink title="Events" url="/events" activeId={path}></Navlink>
               <NavlinkDropdown
              dropdowns={[
                { name: "Incubation", url: "/incubation" },
                { name: "PreIncubation", url: "/pre-incubation" },
                { name: "Seed Investment", url: "/seed-investment" },
                { name: "Alumini Fellowship", url: "/alumini-fellowship" },
              ]}
              title="Apply"
              activeId={path}
            ></NavlinkDropdown>
           <NavlinkDropdown
              dropdowns={[
                { name: "Bulletin", url: "/bulletin" },
                { name: "Articles", url: "/articles" },
                { name: "Testimonials", url: "/testimonials" },
              ]}
              title="News"
              activeId={path}
            ></NavlinkDropdown>
                      <NavlinkDropdown
              dropdowns={[
                { name: "Mentors", url: "/mentors" },
                { name: "Partners", url: "/partners" },
                { name: "Investors", url: "/investors" },
                { name: "IIC", url: "/institution-innovation-council" },                
              ]}
              title="Community"
              activeId={path}
            ></NavlinkDropdown>
          </ul>
        </div>
      </div>
    </nav>
    // <nav
    //   className={`navbar navbar-expand-lg  fixed-top  ${
    //     scrollPosition >= initialScrollPosition ? " scrolled shadow-sm" : ""
    //   }`}
    // >
    //   <div className="container-fluid  main-container">
    //     <Link
    //       className="navbar-brand d-flex flex-row align-items-center p-0 m-sm-0"
    //       to="/"
    //     >
    //       <img src={logo} alt="" className="nav-logo" />
    //       <h5 className="_600-bold text-wrap text-start  px-2 lh-1">
    //         JNTUA <br /> Innovation and Incubation Center{" "}
    //       </h5>
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="offcanvas"
    //       data-bs-target="#offcanvasRight"
    //       aria-controls="offcanvasRight"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="material-symbols-outlined toggle">menu</span>
    //     </button>
    //     {/* the navbar before toggle  */}
    //     <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link nav-link-offcanvas active" aria-current="page" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link nav-link-offcanvas" to="#">
    //             Team
    //           </Link>
    //         </li>

    //         <li className="nav-item dropdown">
    //           <Link
    //             className="nav-link nav-link-offcanvas dropdown-toggle"
    //             to="#"
    //             id="navbarDropdown"
    //             role="button"
    //             aria-expanded="false"
    //           >
    //             Team
    //           </Link>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Action
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Another action
    //               </Link>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Something else here
    //               </Link>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             className="nav-link nav-link-offcanvas disabled"
    //             to="#"
    //             tabindex="-1"
    //             aria-disabled="true"
    //           >
    //             Disabled
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     {/* the navbar after toggle */}
    //     <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link nav-link-offcanvas active" aria-current="page" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link nav-link-offcanvas" to="#">
    //             Team
    //           </Link>
    //         </li>

    //         <li className="nav-item dropdown">
    //           <Link
    //             className="nav-link nav-link-offcanvas dropdown-toggle"
    //             to="#"
    //             id="navbarDropdown"
    //             role="button"
    //             aria-expanded="false"
    //           >
    //             Team
    //           </Link>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Action
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Another action
    //               </Link>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Something else here
    //               </Link>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             className="nav-link nav-link-offcanvas disabled"
    //             to="#"
    //             tabindex="-1"
    //             aria-disabled="true"
    //           >
    //             Disabled
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
