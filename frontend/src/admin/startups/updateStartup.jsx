import React from "react";
import { useParams } from "react-router-dom";

import Base from "../base";
import UpdateStartupForm from "./updateStartupForm";

export default function UpdateStartup() {
    let { startupId } = useParams();
    
  return (
    <Base
    title="Update the startup"
    subtitle="Startup"
    Component={<UpdateStartupForm startupId={startupId} />}
  ></Base>
  );
}