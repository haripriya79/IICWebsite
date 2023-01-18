import React from "react";
import AddTeam from "./team/addTeam";
import { isAuthenticated } from "./auth/helper";
import Signout from "./auth/signout";
import Dashboard from "./dashboard/dashboard";
import Signin from "./auth/signin";
import UpdateTeamMember from "./team/updateTeamMember";
import TeamMembers from "./team/teamMembers";
import AddImage from "./images/addImage";
import Images from "./images/images";
import UpdateImage from "./images/updateImage";
import Videos from "./video/videos";
import UpdateVideo from "./video/updateVideo";
import AddVideo from "./video/addVideo";
import AddStartup from "./startups/addStartup";
import Startups from "./startups/startups";
import UpdateStartup from "./startups/updateStartup";
import AddTestimonial from "./testimonials/addTestimonial";
import Testimonials from "./testimonials/testimonials";
import UpdateTestimonial from "./testimonials/updateTestimonial";
import ContactUs from "./contactUs";
import AddEvent from "./events/addEvent";
import Events from "./events/events";
import UpdateEvent from "./events/updateEvent";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../core/pageNotFound";
import ChangePassword from "./auth/changePassword";
require('../style.css')

export default function AdminRoutes() {
  return (
    <Routes>
        
      <Route path="signout" exact element={<Signout />}></Route>
      <Route path="change-password" exact element={<ChangePassword />}></Route>
      <Route path="/" exact element={<Dashboard />}></Route>
      <Route path="dashboard" exact element={<Dashboard />}></Route>
      <Route path="addTeam" exact element={<AddTeam />}></Route>
      <Route path="teamMembers" exact element={<TeamMembers />}></Route>
      <Route
        path="updateTeamMember/:memberId"
        exact
        element={<UpdateTeamMember />}
      ></Route>
      <Route path="addImage" exact element={<AddImage />}></Route>
      <Route path="images" exact element={<Images />}></Route>
      <Route
        path="updateImage/:imageId"
        exact
        element={<UpdateImage />}
      ></Route>
      <Route path="addVideo" exact element={<AddVideo />}></Route>
      <Route path="videos" exact element={<Videos />}></Route>
      <Route
        path="updatevideo/:videoId"
        exact
        element={<UpdateVideo />}
      ></Route>
      <Route path="addStartup" exact element={<AddStartup />}></Route>
      <Route path="startups" exact element={<Startups />}></Route>
      <Route
        path="updateStartup/:startupId"
        exact
        element={<UpdateStartup />}
      ></Route>
      <Route path="addTestimonial" exact element={<AddTestimonial />}></Route>
      <Route path="testimonials" exact element={<Testimonials />}></Route>
      <Route
        path="updateTestimonial/:testimonialId"
        exact
        element={<UpdateTestimonial />}
      ></Route>
      <Route path="contactUs" exact element={<ContactUs />}></Route>
      <Route path="addEvent" exact element={<AddEvent />}></Route>
      <Route path="events" exact element={<Events />}></Route>
      <Route
        path="updateEvent/:eventId"
        exact
        element={<UpdateEvent />}
      ></Route>
      <Route path="signin" exact element={<Signin />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}
