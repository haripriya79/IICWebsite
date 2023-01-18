import React from "react";
import Overview from "./overview";
import EventsOverview from "./eventsOverview";
import Navbar1 from "../navbar1";
import { isAuthenticated } from "../auth/helper";
import { Navigate } from "react-router-dom";
export default function Dashboard() {
  return (

    isAuthenticated() ?
      <div className="d-flex flex-md-row flex-column ">
        
        <div className="nav-div  bg-white shadow-sm ">
         
          <Navbar1></Navbar1>

        </div>
        <div className="nav-div-1">
        <div className="container-fluid header-body mt-1 p-0">
           <div className="row p-5">
           <div className="col-12">
              <h6 className="header-pretitle  fw-semibold ">Overview</h6>
              <h1 className="header-title h1 ">Dashboard</h1>
              <hr className="mt-3 mb-3" />
            </div>
            <div className="col-12">
              <Overview></Overview>
              <EventsOverview></EventsOverview>
            </div>

           </div>

          </div>
        </div>
        
      </div>
    : <Navigate replace to="/admin/signin" />)
    // isAuthenticated() ?
    // <div className="container-fluid p-0 m-0">
    //   <div className="row">
    //     <div className="col-12 ">
    //       <Navbar></Navbar>
    //     </div>
    //     <div className="col-12"></div>
    //     <div className="col-12 col-md-8 offset-md-2 mt-5">
    //       <div className="row header-body mt-5">
    //         <div className="col-12">
    //           <h6 className="header-pretitle  fw-semibold ">Overview</h6>
    //           <h1 className="header-title h1 ">Dashboard</h1>
    //           <hr className="mt-3 mb-3" />
    //         </div>
    //         <div className="col-12">
    //           <Overview></Overview>
    //           <EventsOverview></EventsOverview>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  //: <Navigate replace to="/admin/signin" />);
}
