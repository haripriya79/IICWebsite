import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ title = "",  url = "", activeId = "" }) => {
  let active = activeId === url;
  return (
    <li className="nav-item">
    <Link
      className={`nav-link nav-link-offcanvas ${active ? "active" : ""}`}
      aria-current="page"
      to={url}
    >
     {title}
    </Link>
  </li>
  );
};
const NavlinkDropdown = ({
  dropdowns=[],
  title,
  activeId = "",
}) => {
  return (
    <li className="nav-item dropdown">
    <Link
      className="nav-link nav-link-offcanvas dropdown-toggle"
      to="#"
      id="dropdown01"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {title}
    </Link>
    <ul className="dropdown-menu" aria-labelledby="dropdown01">
        {dropdowns.map((value,index)=>{
            return (<li>
                <Link className={`dropdown-item ${activeId===value.url ?"active":""}`} to={value.url}>
                  {value.name}
                </Link>
              </li>)
        })}

    </ul>
  </li>
  
  );
};

export { Navlink, NavlinkDropdown };
