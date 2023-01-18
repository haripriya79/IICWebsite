import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { getEvent, updateEvent } from "../helper/adminApiCalls";
import { Button } from "../../core/utils";

export default function UpdateEventForm({ eventId = "" }) {

  const [values, setValues] = useState({
    eventName: "",
    eventDate: "",
    eventVenue: "",
    about: "",
    registrationDetails: {
      fee: 0,
      closesOn: "",
      link: "",
    },
    eventDetailsCount: 0,
    activityDetailsCount: 0,
    eventDetails: [],
    activities: [],
    contactDetails: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    image: "",
    imageName: "",
    facultyCoOrdinatorName: "",
    error: "",
    loading: false,
    formData: new FormData(),
    updatedEvent: "",
  });
  const {
    eventName,
    eventDate,
    eventVenue,
    about,
    registrationDetails,
    eventDetails,
    contactDetails,
    image,
    imageName,
    activities,
    facultyCoOrdinatorName,
    eventDetailsCount,
    activityDetailsCount,
    error,
    updatedEvent,
    loading
  } = values;

  const preload = (eventId) => {
    getEvent(eventId).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          loading: false,
          error: "Something went wrong. Try again.",
          updatedEvent: "",
        });
      } else {
      
        setValues({
          ...values,
          eventName: data.eventName,
          eventDate: data.eventDate,
          eventVenue: data.eventVenue,
          about: data.about,
          registrationDetails: data.registrationDetails,
          eventDetails: data.eventDetails,
          contactDetails: data.contactDetails,
          image: data.image,
          activities: data.activities,
          facultyCoOrdinatorName: data.facultyCoOrdinatorName,
          activityDetailsCount:data.activities.length,
          eventDetailsCount:data.eventDetails.length,
          updatedEvent: "",
          error: "",

        });
      }
    });
  };
  useEffect(() => {
    preload(eventId);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    //Todo validation
    if (!eventName || !eventDate || !about || !registrationDetails || !image) {
      setValues({
        ...values,
        error: "Please fill all fileds",
        loading: false,
        updatedEvent: "",
      });
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      setValues({ ...values, error: "", loading: true, updatedEvent: "" });
      updateEvent(eventId, {
        eventName,
        eventDate,
        eventVenue,
        about,
        registrationDetails,
        eventDetails,
        image,
        contactDetails,
        activities,
        facultyCoOrdinatorName,
      }).then((data) => {
        if (data.error) {
          setValues({
            ...values,
            loading: false,
            error: "Something went wrong. Try again.",
          });
        } else {
          console.log(data);
          setValues({
            ...values,
            error: "",
            loading: false,
            updatedEvent: data.name,
          });
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
    }
  };

  const handleChange = (name) => (event) => {
    console.log(eventName);
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleChangeContact = (name) => (event) => {
    const value = event.target.value;
    contactDetails[name] = value;
    setValues({ ...values, contactDetails });
  };
  const handleChangeRegistration = (name) => (event) => {
    const value = event.target.value;
    registrationDetails[name] = value;
    setValues({ ...values, registrationDetails });
  };
  const handleChangeEventDetails = (name, index) => (event) => {
    const value = event.target.value;
    eventDetails[index][name] = value;
    setValues({ ...values, eventDetails });
  };
  const handleChangeActivityDetails = (name, index) => (event) => {
    const value = event.target.value;
    activities[index][name] = value;
    setValues({ ...values, activities });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: updatedEvent ? "" : "none" }}
    >
      <h6>{updatedEvent} created successfully</h6>
    </div>
  );
  const errorMessage = () => (
    <div
      className="alert alert-warning mt-3 p-2"
      style={{ display: error ? "" : "none" }}
    >
      <h6>{error}</h6>
    </div>
  );

  const handleDrop = (acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function(e) {
        setValues({ ...values, image: e.target.result, imageName: file.name });
      };
      reader.readAsDataURL(file);
      return file;
    });
  };
  const handleDropActivity = (index, acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function(e) {
        activities[index].photo = e.target.result;
        setValues({ ...values, activities });
      };
      reader.readAsDataURL(file);
      return file;
    });
  };
  const increaseEventDetailsCount = () => {
    eventDetails.push({ name: "", description: "" });
    setValues({
      ...values,
      eventDetailsCount: eventDetailsCount + 1,
      eventDetails,
    });
    console.log(eventDetails);
  };
  const decreaseEventDetailsCount = (index) => {
    console.log("calling");
    eventDetails.splice(index, 1);
    setValues({
      ...values,
      eventDetailsCount: eventDetailsCount - 1,
      eventDetails,
    });
  };
  const increaseActivityDetailsCount = () => {
    activities.push({ name: "", description: "" });
    setValues({
      ...values,
      activityDetailsCount: activityDetailsCount + 1,
      activities,
    });
  };
  const decreaseActivityDetailsCount = (index) => {
    console.log("calling");
    activities.splice(index, 1);
    setValues({
      ...values,
      activityDetailsCount: activityDetailsCount - 1,
      activities,
    });
  };

  const ContactDetailsForm = () => {
    return (
      <div>
        <h5> Contact Details </h5>
        <div className="form-group my-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChangeContact("name")}
            value={contactDetails.name}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={handleChangeContact("email")}
            value={contactDetails.email}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">PhoneNumber</label>
          <input
            type="tel"
            className="form-control"
            onChange={handleChangeContact("phoneNumber")}
            value={contactDetails.phoneNumber}
            required
          />
        </div>
      </div>
    );
  };
  const RegistrationDetailsForm = () => {
    return (
      <div>
        <h5>Registration Details </h5>
        <div className="form-group my-3">
          <label className="form-label">Fee</label>
          <input
            type="Number"
            className="form-control"
            onChange={handleChangeRegistration("fee")}
            value={registrationDetails.fee}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Last Date For Registrations</label>
          <input
            type="date"
            className="form-control"
            onChange={handleChangeRegistration("closesOn")}
            value={registrationDetails.closesOn.substring(0, 10)}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Registration Link </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChangeRegistration("link")}
            value={registrationDetails.link}
            required
          />
        </div>
      </div>
    );
  };
  const EventDetailsForm = () => {
    return (
      <div>
        <div className="d-flex flex-sm-row flex-cloumn justify-content-between">
          <h5>Event Description </h5>
          <Link
            to="#"
            onClick={() => {
              increaseEventDetailsCount();
            }}
            className="btn btn-primary  d-inline-block fw-semibold lift m-2"
          >
            Add
          </Link>
        </div>

        {[...Array(eventDetailsCount)].map((x, i) => (
          <div>
            <div className="form-group my-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChangeEventDetails("name", i)}
                value={eventDetails[i].name}
                required
              />
            </div>
            <div className="form-group my-3">
              <label className="form-label">Description</label>
              <textarea
                maxLength={500}
                type="date"
                className="form-control"
                onChange={handleChangeEventDetails("description", i)}
                value={eventDetails[i].description}
                required
              />
            </div>
            <Link
              to="#"
              onClick={() => {
                decreaseEventDetailsCount(i);
              }}
              className="btn  btn-outline-primary d-inline-block fw-semibold lift m-2"
            >
              Remove
            </Link>
          </div>
        ))}
      </div>
    );
  };
  const ActivityDetailsForm = () => {
    return (
      <div>
        <div className="d-flex flex-sm-row flex-cloumn justify-content-between">
          <h5>Events Detail </h5>
          <Link
            to="#"
            onClick={() => {
              increaseActivityDetailsCount();
            }}
            className="btn btn-primary  d-inline-block fw-semibold lift m-2"
          >
            Add
          </Link>
        </div>

        {[...Array(activityDetailsCount)].map((x, i) => (
          <div>
            <div className="form-group my-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChangeActivityDetails("name", i)}
                value={activities[i].name}
                required
              />
            </div>
            <div className="form-group my-3">
              <label className="form-label">Description</label>
              <textarea
                maxLength={100}
                type="text"
                className="form-control"
                onChange={handleChangeActivityDetails("description", i)}
                value={activities[i].description}
              />
            </div>
            <div className="form-group my-3">
              <label className="form-label">Timings</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChangeActivityDetails("timings", i)}
                value={activities[i].timing}
              />
            </div>
            <div className="form-group my-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChangeActivityDetails("location", i)}
                value={activities[i].location}
              />
            </div>
            <hr className="mt-5 mb-3" />

            <div className="row mt-3">
              <label className="form-label">Event Image</label>
              <small className="form-text text-muted">
                Please use an image no larger than 1200px * 600px.
              </small>
            </div>
            <div className="dropzone my-1">
              <div className="dz-message">
                <Dropzone
                  onDrop={(acceptedFiles) =>
                    handleDropActivity(i, acceptedFiles)
                  }
                  accept="image/*"
                  minSize={1024}
                  maxSize={3072000}
                  maxFiles={1}
                  multiple={false}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <p>Drag and drop images, or click to select file</p>
                    </div>
                  )}
                </Dropzone>
              </div>
              {activities[i].photo ? (
                <div className="p-3">
                  <img
                    src={activities[i].photo}
                    alt=""
                    className="uploaded-img"
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <Link
              to="#"
              onClick={() => {
                decreaseActivityDetailsCount(i);
              }}
              className="btn  btn-outline-primary d-inline-block fw-semibold lift m-2"
            >
              Remove
            </Link>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="row">
      {successMessage()}
      {errorMessage()}
      <form className="mb-3 mt-2">
        <div className="form-group my-3 mb-2">
          <label className="form-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("eventName")}
            value={eventName}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Event Date</label>
          <input
            type="date"
            className="form-control"
            onChange={handleChange("eventDate")}
            value={eventDate.substring(0, 10)}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Event Venue</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("eventVenue")}
            value={eventVenue}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Faculty CoOrdinator Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("facultyCoOrdinatorName")}
            value={facultyCoOrdinatorName}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">About</label>
          <textarea
            type="text"
            className="form-control"
            onChange={handleChange("about")}
            value={about}
            required
          />
        </div>
        <hr className="mt-5 mb-3" />
        {RegistrationDetailsForm()}
        <hr className="mt-5 mb-3" />
        {ContactDetailsForm()}
        <hr className="mt-5 mb-3" />
        {EventDetailsForm()}
        <hr className="mt-5 mb-3" />
        {ActivityDetailsForm()}
        <hr className="mt-5 mb-3" />

        <div className="row mt-3">
          <label className="form-label">Event Image</label>
          <small className="form-text text-muted">
            Please use an image no larger than 1200px * 600px.
          </small>
        </div>
        <div className="dropzone my-1">
          <div className="dz-message">
            <Dropzone
              onDrop={handleDrop}
              accept="image/*"
              minSize={1024}
              maxSize={3072000}
              maxFiles={1}
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p>Drag and drop images, or click to select file</p>
                </div>
              )}
            </Dropzone>
          </div>
          {image.length !== 0 ? (
            <div className="p-3">
              <img src={image} alt="" className="uploaded-img" />
              <small className="p-2">{imageName}</small>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <hr className="mt-5 mb-3" />
            <Button onSubmit={onSubmit} loading={loading} name="Update Event"></Button>
      
      </form>
    </div>
  );
}
