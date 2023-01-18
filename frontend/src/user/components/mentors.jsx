import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ComingSoon, ErrorYellow, Loder } from '../../core/utils';
import { getImages } from '../userApiCalls';
import Base from './base';

export default function Mentors() {
    const [mentors, setMentors] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoding] = useState(true);
  
    const preload = () => {
      getImages("Mentors").then((data) => {
        setLoding(false);
        if (data.error) {
          setError("Something went wrong. Try Again");
        } else {
          setMentors(data);
        }
      });
    };
  
    useEffect(() => {
      preload();
    }, []);
    if (loading) {
      return (
        <Base title="Mentors">
          <div className="col-12 my-5 py-5">
            <Loder></Loder>
          </div>
        </Base>
      );
    } else if (error) {
      return (
        <Base title="Mentors">
          <div className="col-12 my-5 py-5">
            <ErrorYellow></ErrorYellow>

          </div>
        </Base>
      );
    } else if (mentors && mentors.length !== 0) {
      return (
        <Base title="Mentors">
          <div className="row mb-4">
            <div className="col-12 text-center text-wrap my-5 ">
              <p class="col-12 para-18">Need to add the caption</p>
            </div>
  
            <div className=" row col-12 main-container">
            {mentors.map((member, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      src={member.photo}
                      alt="..."
                      className="avatar-img rounded-circle team-img uploaded-img"
                    />
                    <h5 className="fw-semibold pt-3">{member.name}</h5>
                    <p className="para-18 font-monospace ">
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </Base>
      );
    } else {
      return (
          <Base title="Mentors">
          <div className="col-12 my-5 py-5">
            <ComingSoon></ComingSoon>
          </div>
        </Base>
      );
    }
    
}
