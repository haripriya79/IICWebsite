import React from "react";
import Base from "./base";
import ideate from "../../assets/images/ideate.svg";
import highlights from "../../assets/images/highlights.png";
import mentoring from "../../assets/images/mentoring.jpg";
export default function PreIncubation() {
  return (
    <Base title="PreIncubtion">
      <div className="row main-container my-5 px-2 text-center text-wrap">
     
        <h4>
          Do you have an idea and passionate to convert it into a Startup?
        </h4>
        <h4>
          Join, our Pre-Incubation Programme to shape your idea into reality.
        </h4>
      </div>
      <div className="row main-container my-5 px-2">
        <div className="col-12 col-md-6 order-md-first order-last">
          <h2 className="h2 fw-semibold">About Programme</h2>

          <p className="para-17 py-3">
            Pre-Incubation programme is designed for early-stage innovators to
            enable them to build their startups by mentoring and hand holding
            them in synergizing their business plans, validation of their idea
            and helping them to enter the market. This programme would also help
            the innovators on the prospects available on their existing idea or
            new idea in terms of their novelty, scalability and other avenues.
          </p>
        </div>
        <figure className="image-wrapper col-12 col-md-6 order-md-last order-first mt-4">
          <img
            src={mentoring}
            loading="lazy"
            alt="girl sitting with laptop on table"
            className="home-image w-100"
            style={{ maxHeight: "350px", objectFit: "fill" }}
          />
        </figure>
      </div>
      <div className="row main-container my-5 px-2">
        <div className="col-12 col-md-6 order-md-last order-first">
          <h2 className="h2 fw-semibold">Our Objective</h2>

          <p className="para-17 py-3">
            The program is aimed at empowering you with an entrepreneurial
            mindset and business skills necessary to create your own venture
            from ground-up, help you develop intrapreneurship skills, and get
            you started on your venture journey. This is not a theoretical
            program – you will actually start your venture and build it as you
            progress through this program.
          </p>
        </div>
        <figure className="image-wrapper col-12 col-md-6 order-md-first order-last mt-4">
          <img
            src={ideate}
            loading="lazy"
            alt="girl sitting with laptop on table"
            className="home-image w-100"
            style={{ maxHeight: "350px", objectFit: "fill" }}
          />
        </figure>
      </div>
      <div className="row main-container my-5 px-2">
        <h2 className="h2 fw-semibold order-first text-center my-4">
          Programme Highlights
        </h2>
        <div className="col-12 col-md-6 order-md-last order-first">
          <ul className="highlights">
            <li>Group Mentoring Sessions</li>
            <li>Regular interaction with startups</li>
            <li>Investor and Mentor Connect</li>
            <li>Incubation Opportunity for Selected Startups</li>
            <li>Practical Masterclasses with Experts</li>
          </ul>
        </div>
        <figure className="image-wrapper col-12 col-md-6 order-md-first order-last mt-4">
          <img
            src={highlights}
            loading="lazy"
            alt="girl sitting with laptop on table"
            className="home-image w-100"
            style={{ maxHeight: "350px", objectFit: "fill" }}
          />
        </figure>
      </div>
      <div className="row main-container my-5 px-2 justify-content-center">
        <h2 className="h2 fw-semibold order-first text-center my-4">
          Programme Duration
        </h2>
        <p className="para-17 text-center">
          The initial 1-week will be focused on introduction to innovation,
          selection of ideas and entrepreneurship traits. The rest 9-weeks will
          be very intensive covering various aspects of Entrepreneurship and
          startup sessions, workshops in a flip classroom model with assessments
          and presentations
        </p>
        <h3 className="fw-semibold text-center my-5">Timeline</h3>
        <div className="timeline">
          <div className="timeline-row">
            <div className="timeline-time">
              7:45PM<small>May 21</small>
            </div>
            <div className="timeline-dot "></div>
            <div className="timeline-content shadow-sm card border-0 p-0 ">
              <h5 className="text-black p-3 m-0">Application Opens</h5>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-time">
              8:00 AM<small>May 18</small>
            </div>
            <div className="timeline-dot "></div>
            <div className="timeline-content shadow-sm card border-0 p-0 ">
              <h5 className="text-black p-3 m-0">Application Closes</h5>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-time">
              7:25 PM<small>May 6</small>
            </div>
            <div className="timeline-dot "></div>
            <div className="timeline-content shadow-sm card border-0 p-0 ">
              <h5 className="text-black p-3 m-0">Programme Start</h5>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-time">
              3:55 PM<small>Apr 26</small>
            </div>
            <div className="timeline-dot "></div>
            <div className="timeline-content shadow-sm card border-0 p-0 ">
              <h5 className="text-black p-3 m-0">Programme Closes</h5>
            </div>
          </div>
          <div className="timeline-row">
            <div className="timeline-time">
              5:24 PM<small>Apr 12</small>
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-content shadow-sm card border-0 p-0 ">
              <h5 className="text-black p-3 m-0">Pitching for Incubation</h5>
            </div>
          </div>
        
        </div>
        <button className='subscribe-button w-button my-5'> Apply Now</button>
      </div>
    </Base>
  );
}
