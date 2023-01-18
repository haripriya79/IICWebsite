import React from 'react'
import Base from './base'
import seedInvestment from '../../assets/images/seed-funding.jpg'
export default function SeedInvestment() {
  return (
    <Base title='Seed Investment'>
        <div className="row main-container my-5 px-2">
            <div className="col-12 col-md-6 order-md-first order-last" >
                <h2 className='h2 fw-semibold'>Apply For Seed Investment</h2>
                <h6 className='divider my-4'/>
                <p className="para-17 my-4">Starting a new business &amp; lifting it off the ground is a big challenge for most entrepreneurs and its gets tougher with capital constraints. To reduce this monetary challenge, the Incubation Center has a Seed Support Scheme for
                            the startups incubated with it.</p>
                          <button className='subscribe-button w-button'> Apply Now</button>
            </div>
            <figure  className="image-wrapper col-12 col-md-6 order-md-last order-first mt-2">
                    <img src={seedInvestment} loading="lazy" alt="girl sitting with laptop on table" className="home-image w-100"  style={{maxHeight:'350px' ,objectFit:'fill'}}/>
                </figure>
        </div>
    </Base>
  )
}
