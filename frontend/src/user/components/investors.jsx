import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { ComingSoon, ErrorYellow, Loder } from '../../core/utils';
import { getImages } from '../userApiCalls';
import Base from './base';

export default function Investors() {
    const [investors, setInvestors] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoding] = useState(true);
  
    const preload = () => {
      getImages("Investors").then((data) => {
        setLoding(false);
        if (data.error) {
          setError("Something went wrong. Try Again");
        } else {
          setInvestors(data);
        }
      });
    };
  
    useEffect(() => {
      preload();
    }, []);
    if (loading) {
      return (
        <Base title="Investors">
          <div className="col-12 my-5 py-5">
            <Loder></Loder>
          </div>
        </Base>
      );
    } else if (error) {
      return (
        <Base title="Investors">
          <div className="col-12 my-5 py-5">
            <ErrorYellow></ErrorYellow>
          </div>
        </Base>
      );
    } else if (investors && investors.length !== 0) {
      return (
        <Base title="Investors">
          <div className="row mb-4">
            <div className="col-12 text-center text-wrap my-5 ">
              <p class="col-12 para-18">Need to add the caption</p>
            </div>
  
            <div className=" row  main-container d-flex justify-content-center">
              {investors.map((partner, index) => {
                return (
                  <div className="col-12 col-sm-4 col-md-3  my-3 text-center ">
                    <img src={partner.photo} alt={partner.name} className="gallery-img  p-0 shadow-sm " style={{backgroundImage:"none",objectFit:'cover',height:"200px"}}/>
                  </div>
                
                );
              })}
            </div>
          </div>
        </Base>
      );
    } else {
      return (
          <Base title="Investors">
          <div className="col-12 my-5 py-5">
            <ComingSoon></ComingSoon>
          </div>
        </Base>
      );
    }
}
