import React from "react";
import empty from "../assets/images/empty.svg";
import emptyYellow from "../assets/images/empty_yellow.svg";
import comingSoon from "../assets/images/coming_soon.svg";
import { Link } from "react-router-dom";
const Loder = () => {
  return (
    <div className="d-flex d-block justify-content-center mt-5 spinner-box align-items-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
const PageLoder = () => {
  return (
    <div className="d-flex d-block justify-content-center mt-5 spinner-box align-items-center" style={{height:
    "100vh",width:"100vh" }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

const Empty = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img src={empty} alt="" width="40%" height="40%" />
      <h4 className="text-muted m-5">No Data is available.</h4>
    </div>
  );
};

const EmptyYellow = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img src={emptyYellow} alt="" width="40%" height="40%" />
      <h4 className="text-muted m-5">No Data is available.</h4>
    </div>
  );
};
const ComingSoon = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img src={comingSoon} alt="" width="40%" height="40%" />
      <h4 className="text-muted m-5">Coming Soon....</h4>
    </div>
  );
};
const Error = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img src={empty} alt="" width="40%" height="40%" />
      <h4 className="text-muted m-5">Something went wrong. Try Again.</h4>
    </div>
  );
};
const ErrorYellow = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <img src={emptyYellow} alt="" width="40%" height="40%" />
      <h4 className="text-muted m-5">Something went wrong. Try Again.</h4>
    </div>
  );
};
const performRedirect = (didRedirect, url) => {
  if (didRedirect) {
    return <navigate to={url}/>;
  } else {
    return (<div></div>);
  }
};
const Button = ({loading=false , onSubmit , name}) => {
  return (  <Link
    to="#"
    onClick={onSubmit}
    className={`btn w-100 btn-primary  ${loading ? "disabled" : ""}`}
  >
    {loading && (
      <span
        className="spinner-border spinner-border-sm mx-2"
        role="status"
        aria-hidden="true"
      ></span>
    )}
   {name}
  </Link>)
}
export { Empty, Loder, Error, performRedirect , Button ,PageLoder ,ComingSoon,EmptyYellow,ErrorYellow};
