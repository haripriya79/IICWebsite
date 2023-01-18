import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteStartup, getStartups } from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
import Base1 from "../base1";
export default function Startups() {
  const [startup, setStartup] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getStartups().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setStartup(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisMember = (startupId) => {
    console.log(startupId);
    deleteStartup(startupId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const deleteModel = (index) => (
    
    <div
      className="modal fade"
      id={`deleteModal${index}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Startup 
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Are sure you want to delete {startup[index].name}  startup?</h6>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                deleteThisMember(startup[index]._id);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  if (loading) {
    return (
      <Base1
        title="All Startups"
        subtitle="Startup"
        name="Add Startup"
        url="addStartup"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
        title="All Startups"
        subtitle="Startup"
        name="Add Startup"
        url="addStartup"
      >
        <Error></Error>
      </Base1>
    );
  } else if (startup && startup.length !== 0) {
    return (
      <Base1
        title="All Startups"
        subtitle="Startup"
        name="Add Startup"
        url="addStartup"
      >
        <div className="row m-3">
            <div className="col-12 col-xl-8">
              {startup.map((star, index) => {
                return (
                  <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <img
                            src={star.photo}
                            alt="..."
                            className="avatar-img rounded-circle uploaded-img "
                          />
                        </div>
                        <div className="col ms-n2">
                          <h4 className="mb-1">
                            <h6 className="h5">{star.name}</h6>
                          </h4>

                          <p className="card-text small text-muted mb-1">
                            <span className="text-success">●</span>{" "}
                            {star.description} 
                          </p>
                        </div>
                        <div className="col-auto d-flex flex-row">
                        <Link
                            to='#'
                            onClick={() => openInNewTab(star.url)}
                            className="avatar-img rounded-circle bg-warning  mx-2"
                            
                          >
                            <span
                              className="material-symbols-outlined p-2 "
                              style={{ color: "white" }}
                            >
                              link
                            </span>
                          </Link>
                          <Link
                            to={`/admin/updateStartup/${star._id}`}
                            className="avatar-img rounded-circle bg-primary mx-2"
                            
                          >
                            <span
                              className="material-symbols-outlined p-2 "
                              style={{ color: "white" }}
                            >
                              edit
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="avatar-img rounded-circle bg-danger mx-2"
                            data-bs-toggle="modal"
                            data-bs-target= {`#deleteModal${index}`}
                          >
                            <span
                              className="material-symbols-outlined p-2 "
                              style={{ color: "white" }}
                            >
                              delete
                            </span>
                          </Link>
                        </div>
                        {deleteModel(index)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        
      </Base1>
    );
  } else {
    return (
      <Base1
        title="All Startups"
        subtitle="Startup"
        name="Add Startup"
        url="addStartup"
      >
        <Empty></Empty>
      </Base1>
    );
  }
  
}
