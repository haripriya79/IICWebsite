import React from "react";
import { getStartups } from "../userApiCalls";
import { useEffect } from "react";
import { useState } from "react";
import {  Loder,  ErrorYellow, ComingSoon } from "../../core/utils";
import Base from "./base";
import { Link } from "react-router-dom";

export default function Startups() {
  const [startup, setStartups] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getStartups().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setStartups(data);
      }
    });
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    preload();
  }, []);
  if (loading) {
    return (
      <Base title="Startups">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Startups">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (startup && startup.length !== 0) {
    return (
      <Base title="Startups">
        <div className="row mb-4">
          <div className="col-12 text-center text-wrap my-5 ">
            <p className="col-12 para-18">Need to add the caption</p>
          </div>

          <div className=" row  main-container d-flex justify-content-center">
            {startup.map((startup, index) => {
              console.log(startup.url);
              return (
                <div className="col-md-4 my-3">
                  <div className="content">
                    <div>
                      <div className="content-overlay"></div>
                      <img className="content-image p-5" src={startup.photo} />
                      <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">{startup.name}</h3>
                        <p className="content-text">{startup.description}</p>
                        <Link
                          className=""
                          onClick={() => {
                            openInNewTab(startup.url);
                          }}
                          to="#"
                        >
                          <span
                            className="avatar-img rounded-circle bg-warning p-2 material-symbols-outlined"
                            style={{ color: "white" }}
                          >
                            link
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Base>
    );
  } else {
    return (
        <Base title="Startups">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
}
