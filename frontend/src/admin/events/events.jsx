import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Base1 from "../base1";
import { deleteEvent, getAllEvents } from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
export default function Events() {
  const [event, setEvent] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getAllEvents().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setEvent(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const deleteThisMember = (eventId) => {
    console.log(eventId);
    deleteEvent(eventId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
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
              Delete Member
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Are sure you want to delete {event[index].eventName} this event?</h6>
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
                deleteThisMember(event[index]._id);
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
        title="All Events"
        subtitle="Events"
        name="Add Event"
        url="addEvent"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
      title="All Events"
      subtitle="Events"
      name="Add Event"
      url="addEvent"
      >
        <Error></Error>
      </Base1>
    );
  } else if (event && event.length !== 0) {
    return (
      <Base1
      title="All Events"
      subtitle="Events"
      name="Add Event"
      url="addEvent"
      >
       <div className="row m-md-3  m-1">
            <div className="col-12 col-xl-12">
            <div className="row ">
                
                {event.map((eve, index) => {
                return (
                    <div className="card-wrapper col-12 col-md-6 col-lg-4">
                    <div className="card">
                      <div className="card-img-wrapper ">
                        <img className="card-img-top event-img" src={eve.image} alt="Card image cap"/>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{eve.eventName}</h5>
                        <div className="col-auto d-flex flex-row">
                        <Link
                            to='#'
                            onClick={() => openInNewTab("")}
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
                            to={`/admin/updateEvent/${eve._id}`}
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
          </div>
      </Base1>
    );
  } else {
    return (
      <Base1
      title="All Events"
      subtitle="Events"
      name="Add Event"
      url="addEvent"
      >
        <Empty></Empty>
      </Base1>
    );
  }

}
