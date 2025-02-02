import Link from "next/link";
import React from "react";
import featuresData from "../../data/sections/features.json";

import { prData, otherData } from "../../data/sections/prData";
const Services5 = () => {
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3 className="wow color-font">PR</h3>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                At the end of the day, how the world perceives a brand has a
                huge impact on how they flourish. While our hustle mindset
                ensures we help you meet your brand objectives -
                <strong className="fw-600">
                  {" "}
                  our PR team makes sure you’re visible in the right places and
                  to the right people.
                </strong>{" "}
                At One Impact, we get you access to exclusively authored
                articles, features, interviews and much more, all with the
                passion to help your brand aim for the sky.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {prData.map((item, index) => (
            <div
              className="col-lg-6 wow fadeInLeft "
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : ".5s"
              }
              key={item.id}
            >
              <div className="item-box no-curve">
                <div>
                  <span className={`icon color-font ${item.icon}`}></span>
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <ul>
                    {item.content.map((i) => (
                      <li style={{ marginTop: "5px", fontSize: "13px",display:"flex",alignItems:"flex-start",justifyContent:"flex-start" }}>
                        <span style={{ marginRight: "10px" }}> ⚪ </span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3 className="wow mt-40 mb-0 color-font">Other Services</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {otherData.map((item, index) => (
            <Link href={item.link} >
            <div
              className="col-lg-6 wow fadeInLeft "
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                  ? ".7s"
                  : index === 2
                  ? ".9s"
                  : ".5s"
              }
              key={item.id}
            >
              <div className="item-box2 no-curve">
                <div>
                  <span className={`icon color-font ${item.icon}`}></span>
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                 
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services5;
