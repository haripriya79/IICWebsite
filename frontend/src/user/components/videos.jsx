import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import YouTube from "react-youtube";
import { Loder, ErrorYellow, ComingSoon } from "../../core/utils";
import { getVideos } from "../userApiCalls";
import Base from "./base";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getVideos().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setVideos(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);
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
  if (loading) {
    return (
      <Base title=" Videos">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title=" Videos">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (videos && videos.length !== 0) {
    return (
      <Base title=" Videos">
        <div className="row mb-4">
          <div className="col-12 text-center text-wrap my-5 ">
            <p class="col-12 para-18">Need Caption</p>
          </div>

          <div className=" row col-12 main-container">
            {videos.map((member, index) => {
              let id = youTubeGetID(member.url);
              return (
                <div className="col-12 col-md-6 my-3">
                  <div className="card p-2 border-0 shadow-sm">
                    <YouTube
                      videoId={id}
                      opts={options} // defaults -> null
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Base>
    );
  } else {
    return (
      <Base title=" Videos">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
}
