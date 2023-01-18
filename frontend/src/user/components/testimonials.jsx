import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Loder,  ErrorYellow, ComingSoon } from "../../core/utils";
import { getImages, getTestimonials } from "../userApiCalls";
import Base from "./base";

export default function Testimonials() {
  const [testimonials, setBulliten] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getTestimonials().then((data) => {
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
      <Base title="Testimonials">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Testimonials">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (testimonials && testimonials.length !== 0) {
    return (
      <Base title="Testimonials">
        <div className="row mb-4">
          <div className="col-12 text-center text-wrap my-5 ">
            <p className="col-12 para-18">Need to add the caption</p>
          </div>

          <div className=" row  main-container d-flex justify-content-center">
            {testimonials.map((testim, index) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 my-1">
                    <div className="student-para-container">
        <p className="para-17">{`” ${testim.testimonial} “`}</p>
                </div>
                <div className="p-3">
                  
                        <div className="student-name py-1">
                            <div className="h7 fw-semibold">{testim.name}</div>
                        </div>
                        <div className="student-branch py-1">
                            <div className="h10 fw-semibold">{testim.designation}</div>
                        </div>
                
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
        <Base title="Testimonials">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
  
}
