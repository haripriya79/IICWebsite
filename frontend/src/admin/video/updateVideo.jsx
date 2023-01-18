import React from "react";
import { useParams } from "react-router-dom";

import Base from "../base";
import UpdateVideoForm from "./updateVideoForm";

export default function UpdateVideo() {
  let { videoId } = useParams();
  return (
    <Base
      title="Update the Video"
      subtitle="Video"
      Component={<UpdateVideoForm videoId={videoId} />}
    ></Base>
  );
}
