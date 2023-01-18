import React, { useEffect, useState } from "react";

import { Button } from "../../core/utils";
import { getVideo, updateVideo } from "../helper/adminApiCalls";

export default function UpdateTeamForm({ videoId = "" }) {
  const [values, setValues] = useState({
    name: "",
    description: "",
    url: "",
    error: "",
    loading: false,
    formData: new FormData(),

    updatedVideo: "",
  });
  const {
    name,
    description,
    url,
    error,
    loading,
    formData,

    updatedVideo,
  } = values;

  const preload = (videoId) => {
    console.log(videoId);
    getVideo(videoId).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: "Something went wrong. Try again.", updatedVideo: "" });
      } else {
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          url: data.url,
          error: "",
          updatedVideo: "",
          formData: new FormData(),
        });
      }
    });
  };
  useEffect(() => {
    preload(videoId);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: "", loading: true, updatedVideo: "" });
    updateVideo(videoId, formData).then((data) => {
      if (data.error) {
        setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
      } else {
        setValues({
          ...values,
          error: "",
          didRedirect: true,
          loading: false,
          updatedVideo: data.name,
        });
      }
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    });
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: updatedVideo ? "" : "none" }}
    >
      <h6>{updatedVideo} updated successfully</h6>
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

        <Button
          onSubmit={onSubmit}
          loading={loading}
          name="Update Video"
        ></Button>
      </form>
    </div>
  );
}
