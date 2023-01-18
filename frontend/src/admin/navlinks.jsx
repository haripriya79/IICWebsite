import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ title = "", iconName = "", url = "", activeId = "" }) => {
  let active = activeId === url;
  return (
    <li className="nav-item">
      <Link
        className={`nav-link ${
          active ? "active" : ""
        } d-flex flex-row align-items-end`}
        aria-current="page"
        to={url}
      >
        <span className="material-symbols-outlined pe-2">{iconName}</span>
        <p className="mb-0 text-wrap">{title}</p>
      </Link>
    </li>
  );
};
const NavlinkDropdown = ({
  title = "",
  subTitle = "",
  iconName = "",
  addUrl = "",
  manageUrl = "",
  activeId = "",
}) => {
  let collapse = activeId === manageUrl || activeId === addUrl;
  let addActive = activeId === addUrl;
  let manageActive = activeId === manageUrl;
  return (
    <li>
      <Link
        className="nav-link d-flex"
        aria-current="page"
        to="#"
        data-bs-toggle="collapse"
        data-bs-target={`#${title}-collapse`}
        aria-expanded="false"
      >
        <span class="material-symbols-outlined pe-1">{iconName}</span>
        <p className="ps-1 mb-0 text-wrap">{title}</p>
      </Link>

      <div
        className={`collapse ${collapse ? "show" : ""}`}
        id={`${title}-collapse`}
      >
        <ul className="fw-normal pb-1 small ps-0">
          <li className="nav-item">
            <Link
              className={`nav-link ${addActive ? "active" : ""}`}
              aria-current="page"
              to={addUrl}
            >
              <p className="ps-5 mb-0 text-wrap">{`Add ${subTitle}`}</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${manageActive ? "active" : ""}`}
              aria-current="page"
              to={manageUrl}
            >
              <p className="ps-5 mb-0 text-wrap">{`Manage ${title}`}</p>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};
export { Navlink, NavlinkDropdown };
