import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageNotFound from "../../core/pageNotFound";
import { Loder, ErrorYellow, ComingSoon } from "../../core/utils";
import { getAllEvents, getEvent, getImages } from "../userApiCalls";
import Base from "./base";
import Footer from "./footer";
import Navbar from "./navbar";

export default function EventDetails() {
  let { eventId } = useParams();
  const [event, setEvents] = useState();
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);
  console.log(eventId);
  const preload = () => {
    getEvent(eventId).then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setEvents(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  if (loading) {
    return (
      <Base title="Event Details">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Event Details">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (event) {
    let date = new Date(event.eventDate);
    let day = date.toLocaleDateString("en-us", { weekday: "long" });
    let eventDate = date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let lastDate = new Date(
      event.registrationDetails.closesOn
    ).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return (
      <div className="container-fluid p-0">
        <div className="col-12">
          <Navbar initialScrollPosition={0}></Navbar>
        </div>
        <div className=" row main-container my-5" style={{ top: "70px" }}>
          <div className="left col-12 col-md-4 sticky-top" style={{height:'fit-content' , top:'12%'}}>
            <div
              className="row mx-2 my-3 shadow-sm"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              <div className="col-12 d-flex flex-row px-2 py-3">
                <span className="material-symbols-outlined event-icon mt-1">
                  schedule
                </span>
                <div className="ms-3">
                  <div className="h7 fw-semibold">{eventDate}</div>
                  <p className="para-17">{day}</p>
                </div>
              </div>
              <div className="col-12 d-flex flex-row px-2 py-3">
                <span className="material-symbols-outlined event-icon mt-1">
                  account_circle
                </span>
                <div className="ms-3">
                  <div className="h7 fw-semibold">
                    {event.facultyCoOrdinatorName}
                  </div>
                  <p className="para-17">Co-ordinator of SDIC</p>
                </div>
              </div>
              <div className="col-12 d-flex flex-row px-2 py-3">
                <span className="material-symbols-outlined event-icon mt-1">
                  location_on
                </span>
                <div className="ms-3">
                  <div className="h7 fw-semibold text-wrap">
                    {event.eventVenue}
                  </div>
                  <p className="para-17">Venue</p>
                </div>
              </div>
              <div className="col-12 d-flex flex-row px-2 py-3">
                <span className="material-symbols-outlined event-icon mt-1">
                  currency_rupee
                </span>
                <div className="ms-3">
                  <div className="h7 fw-semibold text-wrap">
                    {event.registrationDetails.fee === 0
                      ? "Free"
                      : `Rs. ${event.registrationDetails.fee}`}
                  </div>
                  <p className="para-17">Registration Fee</p>
                </div>
              </div>
              <div className="col-12 d-flex flex-row px-2 py-3">
                <span className="material-symbols-outlined event-icon mt-1">
                  today
                </span>
                <div className="ms-3">
                  <div className="h7 fw-semibold text-wrap">{lastDate}</div>
                  <p className="para-17">Registration Last Date</p>
                </div>
              </div>
            </div>
            <button
              className="row mx-2 subscribe-button w-button mt-3"
              style={{ width: "-webkit-fill-available" }}
            >
              {" "}
              Apply Now
            </button>
          </div>
          <div className="right col-12 col-md-8  position-relative my-md-3 my-5">
            <div className="row mx-2">
              <div className="d-inline ]">
                <h2
                  className="fw-semibold divider-bottom"
                  style={{ width: "fit-content" }}
                >
                  {event.eventName}
                </h2>
              </div>

              <img
                src={event.image}
                className="figure-img  rounded my-4 px-3"
                alt="Event Image"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
              <p className="para-17 my-4">{event.about}</p>
              {event.eventDetails.map((detail, index) => {
                return (
                  <div className="my-4">
                    <h4 className="fw-semibold">{detail.name}</h4>
                    <p className="para-17">{detail.description}</p>
                  </div>
                );
              })}
              {event.activities.length !== 0 && (
                <h4 className="fw-semibold mt-3 mb-3">Events</h4>
              )}
              <div className=" row text-center">
                {event.activities.map((activity, index) => {
                  return (
                    <div className="card col-12 col-lg-6 border-0">
                      <img
                        className="card-img-top avatar-img rounded-circle w-50 h-50 mx-auto"
                        src={activity.photo}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{activity.name}</h5>
                        <div
                          className="d-flex flex-row para-17 text-wrap justify-content-center"
                          style={{ fontSize: "0.825rem" }}
                        >
                          <span className="material-symbols-outlined">
                            location_on
                          </span>{" "}
                          <p>{activity.location}</p>
                          <p className="px-2">|</p>
                          <span className="material-symbols-outlined">
                            schedule
                          </span>
                          <p>{activity.timings}</p>
                        </div>
                        <p className="card-text para-17 ">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row my-3">
                <h4 className="fw-semibold">Contact Us</h4>
                <p className="para-17">
                  If you have any queries regarding this event you can reach out
                  us.
                </p>
                <Link
                  to="#"
                  className="links d-flex flex-row align-items-center text-center justify-content center "
                >
                  <span class="material-symbols-outlined me-2">person</span>
                  <span className="text-center mt-1">{event.contactDetails.name}</span>
                </Link>
                <Link
                  to="#"
                  className="links d-flex flex-row align-items-center text-center justify-content center "
                >
                  <span class="material-symbols-outlined me-2">headphones</span>
                  <span className="text-center mt-1">{`+91 ${event.contactDetails.phoneNumber}`}</span>
                </Link>
                <Link
                  to="#"
                  className="links d-flex flex-row align-items-center text-center justify-content center "
                >
                  <span class="material-symbols-outlined me-2">mail</span>
                  <span className="text-center mt-1">{event.contactDetails.email}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  } else {
    return <PageNotFound></PageNotFound>;
  }
}
