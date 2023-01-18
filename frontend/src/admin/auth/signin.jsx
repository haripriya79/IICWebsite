import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Navigate } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "./helper";
import { Button } from "../../core/utils";

export default function Signin() {
  const [values, setValues] = useState({
    email: "haripriya@gmail.com",
    password: "Hari1234",
    error: "",
    loading: false,
    didNavigate: false,
    showPassword: false,
  });
  const { email, password, error, loading, didNavigate, showPassword } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setValues({ ...values, error: "Please fill all fileds", loading: false });
    } else {
      setValues({ ...values, error: "", loading: true });
      signin({ email, password })
        .then((data) => {
          console.log(data);

          if (data.error) {
            setValues({
              ...values,
              error: data.error,
              loading: false,
            });
          } else {
            authenticate(data, () => {
              setValues({
                ...values,
                loading: false,
                error: "",
                didNavigate: true,
              });
            });
          }
        })
        .catch((err) =>
          setValues({
            ...values,
            loading: false,
            error: "Something went wrong. Try Again",
            didNavigate: false,
          })
        );
    }
  };
  console.log(error);

  const performNavigate = () => {
    if (didNavigate || isAuthenticated()) {
      return <Navigate to="/admin/dashboard" />;
    }
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger text-left"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <div className=" d-flex align-items-center bg-auth border-top border-2 border-primary">
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-12 col-md-5 col-xl-4 my-5">
            <img
              src={logo}
              alt="IIC Logo"
              className="src rounded mx-auto d-block logo-img mb-3 "
            />
            <h1 className="display-4 text-center mb-3 ">Sign in</h1>

            <p className="text-muted text-center mb-5 ">
              Free access to our dashboard.
            </p>
            <div>{errorMessage()}</div>
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Email Address</label>

                <input
                  onChange={handleChange("email")}
                  value={email}
                  type="email"
                  className="form-control"
                  placeholder="name@address.com"
                  required
                />
              </div>

              <div className="form-group mb-2">
                <div className="row">
                  <div className="col">
                    <label className="form-label">Password</label>
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

              <Button
                onSubmit={onSubmit}
                loading={loading}
                name="Sign In"
              ></Button>
            </form>
            {performNavigate()}
          </div>
        </div>
      </div>
    </div>
  );
}
