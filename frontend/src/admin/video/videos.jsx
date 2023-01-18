import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

import { deleteVideo, getVideos } from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
import Base1 from "../base1";

export default function Videos() {
  const [video, setVideo] = useState();
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);
  const preload = () => {
    getVideos().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setVideo(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisVideo = (videoId) => {
    console.log(videoId);
    deleteVideo(videoId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  const youTubeGetID = (url) => {
    var ID = "";
    url = url
      .replace(/(>|<)/gi, "")
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  };
  const options = {
    width: "100%",

    playerVars: {
      showinfo: 0,
      // controls: 0,
      rel: 0,
    },
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
              Delete Video
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Are sure you want to delete {video[index].name} this video?</h6>
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
                deleteThisVideo(video[index]._id);
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
        title="All Videos"
        subtitle="Video"
        name="Add Video"
        url="addVideo"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
        title="All Videos"
        subtitle="Video"
        name="Add Video"
        url="addVideo"
      >
        <Error></Error>
      </Base1>
    );
  } else if (video && video.length !== 0) {
    return (
      <Base1
        title="All Videos"
        subtitle="Video"
        name="Add Video"
        url="addVideo"
      >
        <div className="row m-md-3 m-0">
          <div className="col-12 ">
            {video.map((vid, index) => {
              let id = youTubeGetID(vid.url);
              console.log(id);
              return (
                <div className="card col-lg-6 d-inline-block col-12">
                  <div className="card-img-top p-2">
                    <YouTube
                      videoId={id}
                      opts={options} // defaults -> null
                    />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{vid.name}</h5>
                    <p className="card-text">{vid.description}</p>
                    <div className="col-auto d-flex flex-row">
                      <Link
                        to={`/admin/updateVideo/${vid._id}`}
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
              );
            })}
          </div>
        </div>
      </Base1>
    );
  } else {
    return (
      <Base1
        title="All Videos"
        subtitle="Video"
        name="Add Video"
        url="addVideo"
      >
        <Empty></Empty>
      </Base1>
    );
  }
}
