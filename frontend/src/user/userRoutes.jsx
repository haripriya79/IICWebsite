import React from 'react'
import {

Routes,
Route,

} from "react-router-dom";
import PageNotFound from '../core/pageNotFound';
import AluminiFellowship from './components/aluminFellowship';
import Articles from './components/articles';
import Bulletin from './components/bulletin';
import ContactUs from './components/contactUs';
import Events from './components/events';
import EventDetails from './components/event-details';
import Facilities from './components/facilities';
import FacilitiesDetails from './components/facilitiesDetails';
import Gallery from './components/gallery';
import IIC from './components/iic';
import Incubation from './components/incubation';
import Investors from './components/investors';
import Mentors from './components/mentors';
import Partners from './components/partners';
import PreIncubation from './components/preIncubation';
import SeedInvestment from './components/seedInvestment';
import Startups from './components/startups';
import Team from './components/team';
import Testimonials from './components/testimonials';
import Videos from './components/videos';

import Home from './home';
export default function UserRoutes() {
  return (
    
   <Routes>
    <Route path="/" exact element={<Home />}></Route>
    <Route path="/team" exact element={<Team/>}></Route>
    <Route path="/gallery" exact element={<Gallery/>}></Route>
    <Route path="/videos" exact element={<Videos/>}></Route>
    <Route path="/contact-us" exact element={<ContactUs/>}></Route>
    <Route path='/startups' exact  element={<Startups/>}></Route>
    <Route path="/facilities" exact element={<Facilities></Facilities>}></Route>
    <Route path="/facilities-details" exact element={<FacilitiesDetails></FacilitiesDetails>}></Route>
    <Route path="/partners" exact element={<Partners></Partners>}></Route>
    <Route path="/mentors" exact element={<Mentors></Mentors>}></Route>
    <Route path="/investors" exact element={<Investors></Investors>}></Route>
    <Route path="/bulletin" exact element={<Bulletin></Bulletin>}></Route>
    <Route path="/articles" exact element={<Articles></Articles>}></Route>
    <Route path="/testimonials" exact element={<Testimonials></Testimonials>}></Route>
    <Route path="/institution-innovation-council" exact element={<IIC></IIC>}></Route>
    <Route path="/seed-investment" exact element={<SeedInvestment></SeedInvestment>}></Route>
    <Route path="/alumini-fellowship" exact element={<AluminiFellowship></AluminiFellowship>}></Route>
    <Route path="/incubation" exact element={<Incubation></Incubation>}></Route>
    <Route path="/pre-incubation" exact element={<PreIncubation></PreIncubation>}></Route>
    <Route path="/events" exact element={<Events></Events>}></Route>
    <Route path="/events/:eventId" exact element={<EventDetails></EventDetails>}></Route>
    <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
    
    
   </Routes>
  )
}
