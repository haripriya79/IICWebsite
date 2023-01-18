import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getContactUs } from "./helper/adminApiCalls";
import { Loder, Empty, Error } from "../core/utils";
import Base from "./base";

export default function ContactUs() {
  const [contacts, setContact] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);
  const preload = () => {
    getContactUs().then((data) => {
      setLoding(false);
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setContact(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const Component =()=>{
    return (<div className="row m-3">
    <div className="col-12 ">
      {contacts.map((contact, index) => {
        return (
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-sm-row flex-column justify-content-between">
                <div className="d-flex flex-column">
                  <h5 className="card-title">{contact.name}</h5>
                  <p className="card-text small text-muted mb-1">
                    <span className="text-success">●</span>{" "}
                    {contact.email}
                  </p>
                </div>
                <Link
                  to="#"
                  onClick={() =>
                    openInNewTab(`mailto:${contact.email}`)
                  }
                  className="btn btn-primary  d-inline-block fw-semibold lift m-2"
                >
                  Reply
                </Link>
              </div>

              <p className="card-text mt-3">
                <h6>Subject: {contact.subject}</h6>
                <br />
                {contact.message}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>)
  };
  if (loading) {
    return (
      <Base
        title="All Contacts"
        subtitle="Contact"
        Component={ <Loder></Loder>}
      >
       
      </Base>
    );
  } else if (error) {
    return (
      <Base
        title="All Contacts"
        subtitle="Contact"
        Component = {<Error></Error>}
      >
        
      </Base>
    );
  } else if (contacts && contacts.length !== 0) {
    return (<Base
    title="All Contacts"
    subtitle="Contact"
    Component={Component()}
  >
    
  </Base>)
  } else {
    return (
      <Base
        title="All Contacts"
        subtitle="Contact"
        Component={<Empty></Empty>}
      >
        
      </Base>
    );
  }

}
