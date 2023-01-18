import React from 'react'
import pageNotFound from "../assets/images/page_not_found.svg"
export default function PageNotFound() {
  return (
   <div className="container-fluid border-top border-2 border-primary">
    <div className="row m-sm-5 p-0 m-0  d-flex flex-column align-items-center">
        <img src={pageNotFound} alt="" width="400" height="400"
        />
        
    </div>
   </div>
  )
}
