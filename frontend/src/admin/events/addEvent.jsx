import React from "react";

import AddEventForm from "./addEventForm";
import Base from "../base";

export default function AddEvent() {
  return (
    <Base
      title="Add a new Event"
      subtitle="Event"
      Component={<AddEventForm />}
    ></Base>
  );
}