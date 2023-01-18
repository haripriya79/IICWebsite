import React from "react";
import { useParams } from "react-router-dom";

import Base from "../base";
import UpdateTestimonialForm from "./updateTestimonialForm";

export default function UpdateTestimonial() {
    let { testimonialId } = useParams();
  return (
    <Base
    title="Update the testimonial"
    subtitle="Testimonial"
    Component={<UpdateTestimonialForm testimonialId={testimonialId} />}
  ></Base>
  );
}
