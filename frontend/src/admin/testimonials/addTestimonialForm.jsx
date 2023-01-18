import React, { useState } from "react";

import { addTestimonial } from "../helper/adminApiCalls";
import { Button } from "../../core/utils";

export default function AddTestimonialForm() {
  const [values, setValues] = useState({
    name: "",
    designation: "",
    testimonial: "",
    error: "",
    loading: false,
    formData: new FormData(),
    addedTestimonial: "",
  });
  const {
    name,
    designation,
    testimonial,
    error,
    loading,
    formData,
    addedTestimonial,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !designation || !testimonial) {
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        addedTestimonial: "",
      });
    } else {
      setValues({ ...values, error: "", loading: true, addedTestimonial: "" });

      addTestimonial(formData).then((data) => {
        if (data.error) {
          setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
        } else {
          setValues({
            ...values,
            name: "",
            designation: "",
            testimonial: "",
            error: "",
            loading: false,
            addedTestimonial: data.name,
          });
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

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
      style={{ display: addedTestimonial ? "" : "none" }}
    >
      <h6>{addedTestimonial} added successfully</h6>
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

  return (
    <div className="row">
      {successMessage()}
      {errorMessage()}
      <form className="mb-3 mt-2">
        <div className="form-group my-3 mb-2">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("name")}
            value={name}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Designation</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("designation")}
            value={designation}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Testimonial</label>
          <br />

          <textarea
            type="text"
            maxLength="2000"
            className="form-control"
            onChange={handleChange("testimonial")}
            value={testimonial}
            required
          />
        </div>

        <hr className="mt-5 mb-3" />

        <Button
          onSubmit={onSubmit}
          loading={loading}
          name="Add Testimonial"
        ></Button>
      </form>
    </div>
  );
}
