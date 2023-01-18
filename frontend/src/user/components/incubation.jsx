import React from 'react'
import Base from './base'
import fellowship from '../../assets/images/fellowship.png'
export default function Incubation() {
  return (
    <Base title='Incubation'>
        <div className="row main-container my-5 px-2">
            <div className="col-12 col-md-6 order-md-first order-last" >
                <h2 className='h2 fw-semibold'>Apply For Incubation</h2>
                <h6 className='divider my-4'/>
                <p className="para-17 py-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor
                                        
                                        </p>
                          <button className='subscribe-button w-button mt-3'> Apply Now</button>
            </div>
            <figure  className="image-wrapper col-12 col-md-6 order-md-last order-first mt-4">
                    <img src={fellowship} loading="lazy" alt="girl sitting with laptop on table" className="home-image w-100"  style={{maxHeight:'350px' ,objectFit:'fill'}}/>
                </figure>
        </div>
    </Base>
  )
}