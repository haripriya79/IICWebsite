import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "./auth/helper";
import Navbar1 from "./navbar1";

export default function Base({ title = "", subtitle = "", Component }) {
  

  return isAuthenticated() ? (
    <div className="d-flex flex-md-row flex-column ">
      <div className="nav-div  bg-white shadow-sm ">
        <Navbar1></Navbar1>
      </div>
      <div className="nav-div-1">
        <div className="container-fluid  p-0">
          <div className="row p-4">
            <div className="col-12 col-md-8 offset-md-2 ">
              <div className="row header-body mt-1">
                <div className="col-12">
                  <h6 className="header-pretitle  fw-semibold ">{subtitle}</h6>
                  <h1 className="header-title h1 ">{title}</h1>
                  <hr className="mt-3 mb-3" />
                </div>
                <div className="col-12">{Component}</div>
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
