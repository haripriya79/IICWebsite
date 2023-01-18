import React from "react";

import Base from "../base";
import AddImageForm from "./addImageForm";

export default function AddImage() {
  return (
    <Base
    title="Add a new Image"
    subtitle="Image"
    Component={<AddImageForm/>}
  ></Base>
  );
}
