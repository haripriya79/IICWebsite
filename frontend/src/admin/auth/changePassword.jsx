import React from "react";

import Base from "../base";
import ChangePasswordForm from "./changePasswordForm";

export default function ChangePassword() {
  return (
    <Base
    title="Update Password"
    subtitle="User"
    Component={<ChangePasswordForm />}
  ></Base>
  );
}