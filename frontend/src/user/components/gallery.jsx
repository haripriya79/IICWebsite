import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Loder,  ErrorYellow, ComingSoon } from "../../core/utils";
import { getImages } from "../userApiCalls";
import Base from "./base";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getImages("Gallery").then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setGallery(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);
  if (loading) {
    return (
      <Base title="Gallery">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Gallery">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (gallery && gallery.length !== 0) {
    return (
      <Base title="Gallery">
        <div className="row mb-4">
          <div className="col-12 text-center text-wrap my-5 ">
            <p class="col-12 para-18">Need to add the caption</p>
          </div>

          <div className=" row  main-container d-flex justify-content-center">
            {gallery.map((gallery, index) => {
              return (
                <div className="col-12 col-md-5 col-lg-4 my-3">
                      <span className="gallery-img position shadow-sm d-flex flex-column align-items-start justify-content-end p-2" style={{backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent 75%), url(${gallery.photo})`}}>
                        <h6 class="fw-semibold text-white">{gallery.name}</h6>
                    </span>

                </div>
              
              );
            })}
          </div>
        </div>
      </Base>
    );
  } else {
    return (
        <Base title="Gallery">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
  
}
