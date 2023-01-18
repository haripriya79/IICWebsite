import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { getTestimonial, updateTestimonial } from "../helper/adminApiCalls";
import { Button } from "../../core/utils";

export default function UpdateTestimonialForm({ testimonialId = "" }) {
  const [values, setValues] = useState({
    name: "",
    designation: "",
    testimonial: "",
    error: "",
    loading: false,
    formData: new FormData(),
    updateedTestimonial: "",
  });
  const {
    name,
    designation,
    testimonial,
    error,
    loading,
    formData,
    updateedTestimonial,
  } = values;
  const preload = (testimonialId) => {
    getTestimonial(testimonialId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: "Something went wrong. Try again.", updatedVideo: "" });
      } else {
        setValues({
          ...values,
          name: data.name,
          designation: data.designation,
          testimonial: data.testimonial,
          error: "",
          updatedVideo: "",
          formData: new FormData(),
        });
      }
    });
  };
  useEffect(() => {
    preload(testimonialId);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !designation || !testimonial) {
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        updateedTestimonial: "",
      });
    } else {
      setValues({
        ...values,
        error: "",
        loading: true,
        updateedTestimonial: "",
      });

      updateTestimonial(testimonialId, formData).then((data) => {
        if (data.error) {
          setValues({ ...values, loading: false, error: "Something went wrong. Try again." });
        } else {
          setValues({
            ...values,
            error: "",
            loading: false,
            updateedTestimonial: data.name,
          });
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
      style={{ display: updateedTestimonial ? "" : "none" }}
    >
      <h6>{updateedTestimonial} updateed successfully</h6>
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
          name="Update Testimonial"
        ></Button>
      </form>
    </div>
  );
}
