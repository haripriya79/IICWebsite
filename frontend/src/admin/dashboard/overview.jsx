import React, { useState, useEffect } from "react";
import { getOverview } from "../helper/adminApiCalls";

export default function Overview() {
  const [overview, setOverview] = useState([]);
  const preload = () => {
    getOverview().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setOverview(data);
      }
    });
  };
  useEffect(() => {  
    preload();
    console.log(overview);
  },[]);
 

  return (
    <div className="row">
      
      <div className="col-12 col-lg-6 col-xl p-2">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row align-items-center gx-0">
              <div className="col">
                <h6 className="text-uppercase text-muted mb-2">Events</h6>

                {overview ? (
                  <span className="h3 mb-0">{overview.Events}</span>
                ) : (
                  <span>
                    <div className="animated-background">
                      <div className="background-masker"></div>
                    </div>
                  </span>
                )}
              </div>
              <div className="col-auto">
                <span className="h2 material-symbols-outlined text-muted mb-0">
                  event_note
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl p-2 ">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row align-items-center gx-0">
              <div className="col">
                <h6 className="text-uppercase text-muted mb-2">Team Members</h6>

                {overview ? (
                  <span className="h3 mb-0">{overview.Team}</span>
                ) : (
                  <span>
                    <div className="animated-background">
                      <div className="background-masker"></div>
                    </div>
                  </span>
                )}
              </div>
              <div className="col-auto">
                <span className="h2 material-symbols-outlined text-muted mb-0">
                  groups
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl p-2 ">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row align-items-center gx-0">
              <div className="col">
                <h6 className="text-uppercase text-muted mb-2">Gallery</h6>

                {overview ? (
                  <span className="h3 mb-0">{overview.Gallery}</span>
                ) : (
                  <span>
                    <div className="animated-background">
                      <div className="background-masker"></div>
                    </div>
                  </span>
                )}
              </div>
              <div className="col-auto">
                <span className="h3 fe material-symbols-outlined text-muted mb-0">
                  collections_bookmark
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl p-2 ">
        <div className="card shadow-sm ">
          <div className="card-body">
            <div className="row align-items-center gx-0">
              <div className="col">

                <h6 className="text-uppercase text-muted mb-2">Articles</h6>

                {overview ? (
                  <span className="h3 mb-0">{overview.Articles}</span>
                ) : (
                  <span>
                    <div className="animated-background">
                      <div className="background-masker"></div>
                    </div>
                  </span>
                )}
              </div>
              <div className="col-auto">
                <span className="h2 material-symbols-outlined text-muted mb-0">newspaper</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
