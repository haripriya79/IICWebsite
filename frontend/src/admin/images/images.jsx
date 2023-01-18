import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Base1 from "../base1";
import {
  deleteImage,
  getAllImages,
} from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
export default function Images() {
  let imageTypes = [
    "All",
    "Gallery",
    "Articles",
    "Bulletin",
    "Investors",
    "Partners",
    "Mentors",
  ];
  const [image, setImage] = useState([]);
  const [imageType, setImageType] = useState("");
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setImageType(value);
  };
  const preload = () => {
    getAllImages().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setImage(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteImageById = (imageId) => {
    deleteImage(imageId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  const deleteModel = (index) => (
    <div
      className="modal fade"
      id={`deleteModal${index}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Image
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>
              Are sure you want to delete {image[index].name} image member?
            </h6>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                deleteImageById(image[index]._id);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  if (loading) {
    return (
      <Base1
        title="All Images"
        subtitle="Image"
        name="Add Image"
        url="addImage"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
        title="All Images"
        subtitle="Image"
        name="Add Image"
        url="addImage"
      >
        <Error></Error>
      </Base1>
    );
  } else if (image && image.length !== 0) {
    return (
      <Base1
        title="All Images"
        subtitle="Image"
        name="Add Image"
        url="addImage"
      >
        <div className="col-12 ">
          <div className="row">
            <div className="col-12 col-xl-8 my-3 mx-2 px-4 ">
              <label className="form-label">ImageType</label>
              <select
                onChange={handleChange("imageType")}
                className="form-control"
                value={imageType}
                required
              >
                <option value={""}>Select</option>
                {imageTypes &&
                  imageTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="row m-3">
            <div className="col-12 col-xl-8">
              {image
                .filter((img) =>
                  imageType === "All" || imageType === ""
                    ? true
                    : img.imageType === imageType
                )
                .map((image, index) => {
                  return (
                    <div className="card mb-3 shadow-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-auto">
                            <img
                              src={image.photo}
                              alt="..."
                              className="avatar-img rounded-circle uploaded-img "
                            />
                          </div>
                          <div className="col ms-n2">
                            <h4 className="mb-1">
                              <h6 className="h5">{image.name}</h6>
                            </h4>
                            <p className="card-text small text-muted mb-1">
                              {image.description}
                            </p>
                            <p className="card-text small">
                              <span className="text-success">●</span>{" "}
                              {image.imageType}
                            </p>
                          </div>
                          <div className="col-auto d-flex flex-row">
                            <Link
                              to={`/admin/updateImage/${image._id}`}
                              className="avatar-img rounded-circle bg-primary mx-2"
                            >
                              <span
                                className="material-symbols-outlined p-2 "
                                style={{ color: "white" }}
                              >

                                edit
                              </span>
                            </Link>
                            <Link
                              to="#"
                              className="avatar-img rounded-circle bg-danger mx-2"
                              data-bs-toggle="modal"
                              data-bs-target={`#deleteModal${index}`}
                            >
                              <span
                                className="material-symbols-outlined p-2 "
                                style={{ color: "white" }}
                              >
                                delete
                              </span>
                            </Link>
                          </div>
                          {deleteModel(index)}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Base1>
    );
  } else {
    return (
      <Base1
        title="All Images"
        subtitle="Image"
        name="Add Image"
        url="addImage"
      >
        <Empty></Empty>
      </Base1>
    );
  }
}
