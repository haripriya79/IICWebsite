import React, { useEffect, useState } from "react";

import Dropzone from "react-dropzone";
import { getStartup, updateStartup } from "../helper/adminApiCalls";
import { Button } from "../../core/utils";

export default function UpdateStartupForm({startupId = ""}) {
  const [values, setValues] = useState({
    name: "",
    description: "",
    url: "",
    photo: "",
    photoName: "",
    error: "",
    loading: false,
    formData: new FormData(),
    updatedStartup: "",
  });
  const {
    name,
    description,
    url,
    photo,
    photoName,
    error,
    loading,
    formData,
    updatedStartup,
  } = values;

  const preload = startupId => {

    getStartup(startupId).then(data => {

      if (data.error) {
        setValues({ ...values, error: "Something went wrong. Try again." ,updatedStartup:""});
      } else {
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          url: data.url,
          photo:data.photo,
          photoName:"",
          error:"",
          updatedStartup:"",
          formData: new FormData()
        });
      }
    });
  };
  useEffect(() => {
    preload(startupId);
  }, []);
  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !description || !url || !photo) {
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        updatedStartup: "",
      });
    } else {
      setValues({ ...values, error: "", loading: true, updatedStartup: "" });

      updateStartup(startupId,formData).then((data) => {
        if (data.error) {
          setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
        } else {
          setValues({
            ...values,
            error: "",
            loading: false,
            updatedStartup: data.name,
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
      style={{ display: updatedStartup ? "" : "none" }}
    >
      <h6>{updatedStartup} updated successfully</h6>
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
        console.log(typeof e.target.result);
        formData.set("photo", e.target.result);
        setValues({ ...values, photo: e.target.result, photoName: file.name });
      };
      reader.readAsDataURL(file);
      return file;
    });
  };

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
        <div className="row mt-3">
          <label className="form-label">Photo</label>
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
          {photo.length !== 0 ? (
            <div className="p-3">
              <img src={photo} alt="" className="uploaded-img" />
              <small className="p-2">{photoName}</small>
            </div>
          ) : (
            <div></div>
          )}
          
        </div>

        <hr className="mt-5 mb-3" />

        <Button onSubmit={onSubmit} loading={loading} name="Update Startup"></Button>
      </form>
    </div>
  );
}
