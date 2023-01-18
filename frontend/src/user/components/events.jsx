import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loder, ErrorYellow, ComingSoon } from "../../core/utils";
import { getAllEvents, getImages } from "../userApiCalls";
import Base from "./base";

export default function Events() {
  const [events, setEvents] = useState({
    upcoming: [],
    past: [],
    total: 0,
  });
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getAllEvents().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        let upcomingEvents = data.filter((event) =>
          dateDiffInDays(event.eventDate) >= 0 ? true : false
        );
        let PastEvents = data.filter((event) =>
          dateDiffInDays(event.eventDate) < 0 ? true : false
        );
        setEvents({
          upcoming: upcomingEvents,
          past: PastEvents,
          total: data.length,
        });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  function dateDiffInDays(date) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    var a = new Date();
    var b = new Date(date);
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  if (loading) {
    return (
      <Base title="Events">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Events">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (events.total && events.total !== 0) {
    return (
      <Base title="Events">
        <div className="row mb-4">
          <div className="col-12 text-center text-wrap my-5 ">
            <p className="col-12 para-18">Need to add the caption</p>
          </div>

          <div className="row  main-container justify-content-center">
            {events.upcoming.length != 0 && (
              <div className="col-12 text-center">
                <h3 className=" fw-semibold">Upcoming Events</h3>
                <p className="divider mb-5 mt-2 mx-auto"></p>
              </div>
            )}
            {events.upcoming.map((event, index) => {
              let difference = dateDiffInDays(event.eventDate);
              return (
                difference >= 0 && (
                  <Link to={`/events/${event._id}`} className="col-12 col-sm-10 col-md-5 col-lg-4 my-3">
                    <div className="card border-0 shadow-sm">
                      <img
                        className="card-img-top"
                        src={event.image}
                        alt="Card image cap"
                        style={{ objectFit: "fill", maxHeight:'300px',width:"100%" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-black">{event.eventName}</h5>
                        <p className="card-text event-text para-17 my-3">
                          {event.about}
                        </p>

                  
                        <button className="subscribe-button w-button">
                          {" "}
                          Register Now
                        </button>
                      </div>
                    </div>
                  </Link>
                )
              );
            })}
          </div>
          <div className="row  main-container justify-content-center my-4">
            {events.past.length != 0 && (
              <div className="col-12 text-center">
                <h3 className=" fw-semibold">Past Events</h3>
                <p className="divider mb-5 mt-2 mx-auto"></p>
              </div>
            )}

            {events.past.map((event, index) => {
              let difference = dateDiffInDays(event.eventDate);
              return (
                difference < 0 && (
                  <Link className="col-12 col-sm-10 col-md-5 col-lg-4 my-3"  to={`/events/${event._id}`}>
                    <div className="card border-0 shadow-sm">
                      <img
                        className="card-img-top"
                        src={event.image}
                        alt="Card image cap"
                        style={{ objectFit: "fill" , maxHeight:'300px',width:'100%'}}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-black">{event.eventName}</h5>
                        <p className="card-text event-text para-17 my-3">
                          {event.about}
                        </p>
                        
                      </div>
                    </div>
                  </Link>
                )
              );
            })}
          </div>
        </div>
      </Base>
    );
  } else {
    return (
      <Base title="Events">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
}
