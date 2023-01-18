import React from 'react'
import Base from './base'
import iic from '../../assets/images/iic.png'
import ourSpirit from '../../assets/images/our-spirit.jpg'

export default function IIC() {
  return (
    <Base title="Institution's Innovation Council">
        <div className="row main-container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 order-md-first order-last p-5">
                    <h3 className='fw-semibold mt-3'>Our Functions</h3>
                    <p className="para-17 my-4">IIC (Institute Innovation Council) aims to enhance the culture of innovation and incubation among faculty and students at IIIT-D, leading to successful startups, promoted and owned by the faculties and the students.
                    </p>
                </div>
                <div className="col-12 col-md-6 order-md-last order-first text-center">
                    <img src={iic} alt="IIC Image" className='h-100'  />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 order-last p-5">
                    <h3 className='fw-semibold mt-3'>Our Spirit</h3>
                    <ul class="para-17 my-4">
                                    <li className="my-3">
                                        To conduct various innovation and entrepreneurship-related activities prescribed by Central MIC in time bound fashion.
                                    </li>
                                    <li className="my-3">
                                        Identify and reward innovations and share success stories.
                                    </li>
                                    <li className="my-3">
                                        Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.
                                    </li>
                                    <li className="my-3">
                                        Network with peers and national entrepreneurship development organizations.
                                    </li>
                                    <li className="my-3">
                                        Create an Institution’s Innovation portal to highlight innovative projects carried out by institution’s faculty and students.
                                    </li>
                                    <li className="my-3">
                                        Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries.
                                    </li>
                                </ul>
                </div>
                <div className="col-12 col-md-6 order-first align-items-center d-flex">
                    <img src={ourSpirit} alt="IIC Image" className='col rounded my-auto' />
                </div>
            </div>
          
        </div>
    </Base>
  )
}
