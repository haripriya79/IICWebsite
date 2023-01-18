import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteTeamMember, getTeam } from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
import Base1 from "../base1";
export default function TeamMembers() {
  const [team, setTeam] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getTeam().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setTeam(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisMember = (memberId) => {
    console.log(memberId);
    deleteTeamMember(memberId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  const deleteModel = (index) => (
    <div
      className="modal fade"
      id={`deleteModal${index}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">              Delete Member
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Are sure you want to delete {team[index].name} team member?</h6>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                deleteThisMember(team[index]._id);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  if (loading) {
    return (
      <Base1
        title="All Team Member"
        subtitle="Team Member"
        name="Add Team Member"
        url="addTeam"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
        title="All Team Member"
        subtitle="Team Member"
        name="Add Team Member"
        url="addTeam"
      >
        <Error></Error>
      </Base1>
    );
  } else if (team && team.length !== 0) {
    return (
      <Base1
        title="All Team Member"
        subtitle="Team Member"
        name="Add Team Member"
        url="addTeam"
      >
        <div className="row m-3">
            <div className="col-12 col-xl-8">
              {team.map((member, index) => {
                return (
                  <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <img
                            src={member.photo}
                            alt="..."
                            className="avatar-img rounded-circle uploaded-img "
                          />
                        </div>
                        <div className="col ms-n2">
                          <div className="mb-1">
                            <h6 className="h5">{member.name}</h6>
                          </div>

                          <p className="card-text small text-muted mb-1">
                            <span className="text-success">●</span>{" "}
                            {member.designation} | {member.role}
                          </p>
                        </div>
                        <div className="col-auto d-flex flex-row">
                          <Link
                            to={`/admin/updateTeamMember/${member._id}`}
                            className="avatar-img rounded-circle bg-primary mx-2"
                            
                          >
                            <span
                              className="material-symbols-outlined p-2 "
                              style={{ color: "white" }}
                            >
                              edit
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="avatar-img rounded-circle bg-danger mx-2"
                            data-bs-toggle="modal"
                            data-bs-target={`#deleteModal${index}`}
                          >
                            <span
                              className="material-symbols-outlined p-2 "
                              style={{ color: "white" }}
                            >
                              delete
                            </span>
                          </Link>
                        </div>
                        {deleteModel(index)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </Base1>
    );
  } else {
    return (
      <Base1
        title="All Team Member"
        subtitle="Team Member"
        name="Add Team Member"
        url="addTeam"
      >
        <Empty></Empty>
      </Base1>
    );
  }
  
}
