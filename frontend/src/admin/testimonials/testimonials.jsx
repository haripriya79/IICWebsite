import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteTestimonial, getTestimonials } from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
import Base1 from "../base1";
export default function Testimonials() {
  const [testimonials, setTestimonial] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);
  const preload = () => {
    getTestimonials().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setTestimonial(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisTestimonial = (testimonialId) => {
    console.log(testimonialId);
    deleteTestimonial(testimonialId).then((data) => {
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
              Delete Testimonial
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Are sure you want to delete {testimonials[index].name} this testimonial?</h6>
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
                deleteThisTestimonial(testimonials[index]._id);
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
        title="All Testimonials"
        subtitle="Testimonial"
        name="Add Testimonial"
        url="addTestimonial"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
        title="All Testimonials"
        subtitle="Testimonial"
        name="Add Testimonial"
        url="addTestimonial"
      >
        <Error></Error>
      </Base1>
    );
  } else if (testimonials && testimonials.length !== 0) {
    return (
      <Base1
        title="All Testimonials"
        subtitle="Testimonial"
        name="Add Testimonial"
        url="addTestimonial"
      >
         <div className="row m-3">
            <div className="col-12 col-xl-8">
              {testimonials.map((testi, index) => {
                return (
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="d-flex flex-md-row flex-column justify-content-between">
                        <div className="d-flex flex-column">
                          <h5 className="card-title">{testi.name}</h5>
                          <p className="card-text small text-muted mb-1">
                            <span className="text-success">●</span>{" "}
                            {testi.designation}
                          </p>
                        </div>
                        <div className="col-auto d-flex flex-row ">
                          <Link
                            to={`/admin/updateTestimonial/${testi._id}`}
                            className="avatar-img rounded-circle bg-primary mx-2 my-2"
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
                            className="avatar-img rounded-circle bg-danger mx-2 my-2"
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
                      </div>

                      <p className="card-text">{testi.testimonial}</p>
                    
                    </div>
                     {deleteModel(index)} 
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
        title="All Testimonials"
        subtitle="Testimonial"
        name="Add Testimonial"
        url="addTestimonial"
      >
        <Empty></Empty>
      </Base1>
    );
  }

}
