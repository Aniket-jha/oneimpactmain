/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "../../../lib/client";
const Team2 = ({teamData,seniorsData}) => {
  console.log(teamData)
  return (
    <section className="team section-padding pb-30">
     <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our Co-Founders
              </h6>
              <h3 className="wow color-font">
                An original team of creators designers &amp; dreamers.
              </h3>
            </div>
          </div>
          <div className="row justify-content-center">
             <div style={{marginBottom:"36px"}} className="col-lg-4  col-md-6">
            <div className="item cir md-mb50">
              <div className="img">
                <img src="/img/team/pooja.jpg" alt="" />
                <div id="circle1">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath1"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath1" fill="none" />
                      <text fill="#fff">
                        <textPath xlinkHref="#circlePath1">
                          CEO & Co-Founder CEO Co-Founder
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info row align-items-center">
                <div className="col-10">
                  <h6>Pooja Patil</h6>
                  <span>CEO & Co-Founder</span>
                  </div>
                  <div className="col-2">
                    <a target="_blank" href="https://www.linkedin.com/in/poojapatil22/">
                  <i style={{fontSize:"32px"}} className="fab fa-linkedin"></i>
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="item cir md-mb30">
              <div className="img">
                <img src="/img/team/Kajol.jfif" alt="" />
                <div id="circle2">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath2"
                        d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                      <use xlinkHref="#circlePath2" fill="none" />
                      <text fill="#fff">
                        <textPath xlinkHref="#circlePath2">
                          COO & Co-Founder COO Co-Founder
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="info row align-items-center">
                <div className="col-10">
                  <h6>Kajol Chavan</h6>
                  <span>COO & Co-Founder</span>
                  </div>
                  <div className="col-2">
                    <a target="_blank" href="https://www.linkedin.com/in/kajol-chavan/">
                  <i style={{fontSize:"32px"}} className="fab fa-linkedin"></i>
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
     
     
        
   
      
    </section>
  );
};

export default Team2;
