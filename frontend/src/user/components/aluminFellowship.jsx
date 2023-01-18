import React from 'react'
import Base from './base'
import fellowship from '../../assets/images/fellowship.png'
export default function AluminiFellowship() {
  return (
    <Base title='Alumini Fellowship'>
        <div className="row main-container my-5 px-2">
            <div className="col-12 col-md-6 order-md-first order-last" >
                <h2 className='h2 fw-semibold'>Apply For Alumini Fellowship</h2>
                <h6 className='divider my-4'/>
                <p className="para-17 my-4">Incubation Center has launched a fellowship scheme to support graduates of JNTUA who aim to build their own startup. Financial support along with incubation facilities including mentorship,infrastructural support,etc. would
                            be provided to the startups owned by graduates of JNTUA Anantapur.</p>
                          <button className='subscribe-button w-button'> Apply Now</button>
            </div>
            <figure  className="image-wrapper col-12 col-md-6 order-md-last order-first mt-2">
                    <img src={fellowship} loading="lazy" alt="girl sitting with laptop on table" className="home-image w-100"  style={{maxHeight:'350px' ,objectFit:'fill'}}/>
                </figure>
        </div>
    </Base>
  )
}
