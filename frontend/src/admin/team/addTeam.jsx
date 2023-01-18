import React from "react";

import AddTeamForm from "./addTeamForm";

import Base from "../base";

export default function AddTeam() {
  return (
    <Base
      title="Add a new team member"
      subtitle="Team Member"
      Component={<AddTeamForm />}
    ></Base>
  );
}
