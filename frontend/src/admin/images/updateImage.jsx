import React from "react";
import { useParams } from "react-router-dom";

import Base from "../base";
import UpdateImageForm from "./updateImageForm";

export default function UpdateImage() {
  let { imageId } = useParams();
  return (
    <Base
      title="Update the image"
      subtitle="Image"
      Component={<UpdateImageForm imageId={imageId} />}
    ></Base>
  );
}
