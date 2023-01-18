import React, { useState } from "react";
import { Button } from "../../core/utils";
import { updatePassword } from "./helper";

export default function ChangePasswordForm() {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    error: "",
    loading: false,
    formData: new FormData(),
    changedPassword: "",
    showPassword:false,
    showConfirmPassword:false
  });
  const {
    password,
    confirmPassword,
    error,
    loading,
    formData,
    changedPassword,
    showPassword,
    showConfirmPassword
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!confirmPassword || !password) {
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        changedPassword: "",
      });
    } else if (confirmPassword !== password) {
      setValues({
        ...values,
        error: "Password and Confirm Password are not same",
        loading: false,
        changedPassword: "",
      });
    } else {
      setValues({ ...values, error: "", loading: true, changedPassword: "" });

      updatePassword(password).then((data) => {
        if (data.error) {
          setValues({
            ...values,
            loading: false,
            error: "Something went wrong. Try again.",
          });
        } else {
          setValues({
            ...values,
            password: "",
            confirmPassword: "",
            error: "",
            loading: false,
            changedPassword: "true",
          });
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
    }
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: changedPassword ? "" : "none" }}
    >
      <h6>Password is successfully updated</h6>
    </div>
  );
  const errorMessage = () => (
    <div
      className="alert alert-warning mt-3 p-2"
      style={{ display: error ? "" : "none" }}
    >
      <h6>{error}</h6>
    </div>
  );

  return (
    <div className="row">
      {successMessage()}
      {errorMessage()}
      <form className="mb-3 mt-2">
      <div className="form-group mb-2">
                <div className="row">
                  <div className="col">
                    <label className="form-label">New Password</label>
                  </div>
                </div>

                <div className="input-group input-group-merge mb-4">
                  <input
                    onChange={handleChange("password")}
                    value={password}
                    className="form-control"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />

                  <span
                    className="input-group-text bg-white"
                    onClick={() =>
                      setValues({
                        ...values,
                        showPassword: !showPassword,
                      })
                    }
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? "visibility_off" : "visibility"}
                    </i>
                  </span>
                </div>
              </div>
              <div className="form-group mb-2">
                <div className="row">
                  <div className="col">
                    <label className="form-label">Confirm Password</label>
                  </div>
                </div>

                <div className="input-group input-group-merge mb-4">
                  <input
                    onChange={handleChange("confirmPassword")}
                    value={confirmPassword}
                    className="form-control"
                    type={showPassword ? "text" : "password"}
                    placeholder="Re-enter password"
                    required
                  />

                  <span
                    className="input-group-text bg-white"
                    onClick={() =>
                      setValues({
                        ...values,
                        showConfirmPassword: !showConfirmPassword,
                      })
                    }
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{ cursor: "pointer" }}
                    >
                      {showConfirmPassword ? "visibility_off" : "visibility"}
                    </i>
                  </span>
                </div>
              </div>

        
<div className="my-5">
<Button
          onSubmit={onSubmit}
          loading={loading}
          name="Update Password"
         
        ></Button>
</div>
        
      </form>
    </div>
  );
}
