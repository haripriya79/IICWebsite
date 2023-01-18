import React from "react";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth/helper";

import Navbar1 from "./navbar1";

export default function Base1({
  title = "",
  subtitle = "",
  url = "",
  name = "",
  children,
}) {
  return isAuthenticated() ? (
    <div className="d-flex flex-md-row flex-column ">
      <div className="nav-div  bg-white shadow-sm ">
        <Navbar1></Navbar1>
      </div>
      <div className="nav-div-1">
        <div className="container-fluid p-0">
          <div className="row p-4">
            <div className="col-12">
              <div className="col-12 col-md-10 offset-md-1">
                <div className="row mt-5">
                  <div className="col-12 px-4">
                    <div className="d-flex flex-sm-row flex-column justify-content-between">
                      <div className="d-flex flex-column">
                        <h6 className="header-pretitle  fw-semibold ">
                          {subtitle}
                        </h6>
                        <h1 className="header-title h1 ">{title}</h1>
                      </div>
                      <Link
                        to={`/admin/${url}`}
                        className="btn btn-primary d-block d-md-inline-block fw-semibold lift  m-3"
                      >
                        {name}
                      </Link>
                    </div>
                    <hr />
                  </div>
                  <div className="col-12 ">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Navigate replace to="/admin/signin" />
  );
}
