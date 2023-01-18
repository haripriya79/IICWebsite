import React , {useState , useEffect}from 'react'
import { getEvents } from '../helper/adminApiCalls';
import {Link} from "react-router-dom";

export default function   EventsOverview() {
    const [events, setEvents] = useState([]);
    const preload = () => {
      getEvents().then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          setEvents(data);
        }
      });
    };
    useEffect(() => {  
      preload();
     
    }, []);
  return (
    <div className="row m-0">
    <div className="col-12 ">
      <div className="card card-fill shadow-sm">
        <div className="card-header d-flex flex-row justify-content-between ">
          <h4 className="card-header-title">Events</h4>
          <Link to="/admin/events" className="small">
            View all
          </Link>
        </div>
        <div className="card-body">
          <div className="list-group list-group-flush my-n3">
            {events.map((eve , index)=>{
                return (<div className="list-group-item">
                <div className="row align-items-center m-0">
                  <div className="col-auto">
                    <Link
                      to="project-overview.html"
                      className="avatar avatar-4by3"
                    >
                      <img
                        src={eve.image}
                        alt="..."
                        width="80"
                        height="80"
                  
                        className="avatar-img rounded"
                      />
                    </Link>
                  </div>
                  <div className="col ms-n2">
                    <h4 className="mb-1">
                      <h5 >
                        {eve.eventName}
                      </h5>
                    </h4>
  
              
                  </div>
                  
                </div>
              </div>
              )
            })}
            
          
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
