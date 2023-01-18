import React from "react";

import Base from "../base";
import AddStartupForm from "./addStartupForm";

export default function AddStartup() {
  return (
    <Base
      title="Add a new startup"
      subtitle="Startup"
      Component={<AddStartupForm />}
    ></Base>
  );
}
