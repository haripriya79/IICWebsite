import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Loder,  ErrorYellow, ComingSoon } from "../../core/utils";
import { getImages } from "../userApiCalls";
import Base from "./base";

export default function Bulletin() {
  const [bulletin, setBulliten] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getImages("Bulletin").then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setBulliten(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);
  if (loading) {
    return (
      <Base title="Bulletin">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Bulletin">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (bulletin && bulletin.length !== 0) {
    return (
      <Base title="Bulletin">
        <div className="row mb-4">
          <div className="col-12 text-center text-wrap my-5 ">
            <p class="col-12 para-18">Need to add the caption</p>
          </div>

          <div className=" row  main-container d-flex justify-content-center">
            {bulletin.map((bulletin, index) => {
              return (
                <div className="col-12 col-md-5 col-lg-4 my-3 text-center">
                  <img src={bulletin.photo} alt="" className="gallery-img w-100 p-0 " style={{backgroundImage:"none",objectFit:'fill'}}/>
                    
                </div>
              
              );
            })}
          </div>
        </div>
      </Base>
    );
  } else {
    return (
        <Base title="Bulletin">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
  
}
