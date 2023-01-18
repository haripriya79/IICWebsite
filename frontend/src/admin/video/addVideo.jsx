import React from "react";

import Base from "../base";
import AddVideoForm from "./addVideoForm";

export default function AddVideo() {
  return (
    <Base
    title="Add a new Video"
    subtitle="Startup"
    Component={<AddVideoForm  />}
  ></Base>
  );
}
