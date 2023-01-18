import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Empty, Loder, Error } from "../../core/utils";
import { addContact, getImages } from "../userApiCalls";
import Base from "./base";


export default function ContactUs() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    error: "",
    loading: false,
    formData: new FormData(),
    addedContact: "",
  });
  const {
    name,
    email,
    message,
    subject,
    error,
    loading,
    formData,
    addedContact,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({
        ...values,
        errror:"",
        loading: true,
        addedContact: "",
      });
    if (!name || !email || !message || !subject) {
        console.log("Plese all fields")
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        addedContact: "",
      });
    } else {
      setValues({ ...values, error: "", loading: true, addedContact: "" });

      addContact(formData).then((data) => {
        if (data.error) {
          setValues({
            ...values,
            loading: false,
            error: "Oops! Something went wrong while submitting the form.",
          });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            message: "",
            subject: "",
            error: "",
            loading: false,
            addedContact: data.name,
          });
        }
      
      });
    }
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: addedContact ? "" : "none" }}
    >
      <h6 className="my-auto">Thank you! Your submission has been received!</h6>
    </div>
  );
  const errorMessage = () => (
    <div
      className="alert alert-warning mt-3  p-2"
      style={{ display: error ? "" : "none" }}
    >
      <h6 className="my-auto">{error}</h6>
    </div>
  );

  return (
    <Base title="Contact Us">
      <div className="row main-container my-5">
        <div className="col-md-8 col-12">
          <h4 className="h4 fw-semibold mb-3">Write to us</h4>
          <p className="para-17 mb-5">
            Please fill the form below to reach out to us regarding any queries.
            We are open between 9 AM – 8 PM, Monday to Friday and our average
            response times are about 24 hours.
          </p>
          {successMessage()}
          {errorMessage()}
        </div>
        <div className="col-12 col-md-8">
          <form  className="row">
            <div className="col-12 col-md-6 form-group">
              <input
                type="text"
                placeholder="Name"
                className="input-field field"
                value={name}
                onChange={handleChange('name')}
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                type="email"
                placeholder="Email"
                className="input-field field"
                onChange={handleChange('email')}
                value={email}
              />
            </div>
            <div className="col-12 form-group">
              <input
                type="text"
                placeholder="Subject"
                className="input-field field"
                value={subject}
                onChange={handleChange('subject')}
              />
            </div>
            <div className="col-12 form-group">
              <textarea
                type="email"
                placeholder="Message"
                className="input-field field h-100"
                value={message}
                onChange={handleChange('message')}
              ></textarea>
            </div>
            <div className="col-6 my-4">
              <button
                onClick={onSubmit}

                className={`subscribe-button text-white w-button w-100 text-center   ${
                  loading ? "disabled" : ""
                }`}

              >
                
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm mx-2 "
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="col-12 col-md-4 ps-lg-4">
          <h6 className="fw-semibold">Location :</h6>
          <p className="para-17 text-wrap">
            Jawaharlal Nehru Technological University, Anantapuramu, Andhra
            Pradesh, 515001
          </p>
          <h6 className="fw-semibold pt-3">Phone :</h6>
          <p className="para-17">+91 7989902586</p>
          <p className="para-17">+91 7989902586</p>
          <h6 className="fw-semibold pt-3">Email:</h6>
          <p className="para-17">jntuasdc@gmail.com</p>
        </div>

        <iframe
          className="my-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7720.124568102726!2d77.60936712160513!3d14.652405851313665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14a5558b7ff6d%3A0x25203867513f37ee!2sJNTUA%20COLLEGE%20OF%20ENGINEERING%20ANANTAPURAM!5e0!3m2!1sen!2sin!4v1662200968355!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          title="location-map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Base>
  );
  //     <div className="row">
  //       {successMessage()}
  //       {errorMessage()}
  //       <form className="mb-3 mt-2">
  //         <div className="form-group my-3 mb-2">
  //           <label className="form-label">Name</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             onChange={handleChange("name")}
  //             value={name}
  //             required
  //           />
  //         </div>
  //         <div className="form-group my-3">
  //           <label className="form-label">Description</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             onChange={handleChange("description")}
  //             value={description}
  //             required
  //           />
  //         </div>
  //         <div className="form-group my-3">
  //           <label className="form-label">URL</label>
  //           <br />
  //           <small className="form-text text-muted">
  //             Please use the Youtube URL.
  //           </small>
  //           <input
  //             type="text"
  //             className="form-control"
  //             onChange={handleChange("url")}
  //             value={url}
  //             required
  //           />
  //         </div>

  //         <hr className="mt-5 mb-3" />

  //         <Button onSubmit={onSubmit} loading={loading} name="Add Video"></Button>
  //       </form>
  //     </div>
  //   );
}
