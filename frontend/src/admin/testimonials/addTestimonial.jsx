import React from "react";

import Base from "../base";
import AddTestimonialForm from "./addTestimonialForm";

export default function AddTestimonial() {
  return (
    <Base
    title="Add a new startup"
    subtitle="Startup"
    Component={<AddTestimonialForm />}
  ></Base>
  );
}
