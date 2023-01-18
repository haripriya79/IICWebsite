import React, { useState } from "react";

import { addVideo } from "../helper/adminApiCalls";
import { Button } from "../../core/utils";

export default function AddVideoForm() {
  const [values, setValues] = useState({
    name: "",
    description: "",
    url: "",
    error: "",
    loading: false,
    formData: new FormData(),
    addedVideo: "",
  });
  const {
    name,
    description,
    url,
    error,
    loading,
    formData,
    addedVideo,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();

    if (!name || !description || !url) {
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        addedVideo: "",
      });
    } else {
      setValues({ ...values, error: "", loading: true, addedVideo: "" });

      addVideo(formData).then((data) => {
        if (data.error) {
          setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            url: "",
            error: "",
            loading: false,
            addedVideo: data.name,
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
      style={{ display: addedVideo ? "" : "none" }}
    >
      <h6>{addedVideo} added successfully</h6>
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
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("description")}
            value={description}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">URL</label>
          <br />
          <small className="form-text text-muted">
            Please use the Youtube URL.
          </small>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("url")}
            value={url}
            required
          />
        </div>

        <hr className="mt-5 mb-3" />

        <Button onSubmit={onSubmit} loading={loading} name="Add Video"></Button>
      </form>
    </div>
  );
}
