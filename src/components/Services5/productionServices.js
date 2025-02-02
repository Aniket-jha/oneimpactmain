import Link from "next/link";
import React from "react";
import featuresData from "../../data/sections/features.json";

import { productionData, otherData } from "../../data/sections/productionData";
const Services5 = () => {
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3 className="wow color-font">Production</h3>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                At the centre of everything in the universe of One Impact, is
                our passion to give{" "}
                <strong className="fw-600">
                  inspiring stories an impactful platform.
                </strong>{" "}
                We pick up simple information pieces, collate it with the
                brand’s ideals and create meaningful content. When we say
                content, we don’t mean simple videos.{" "}
                <strong className="fw-600">
                  From short form videos, explainer videos to DVCs -
                </strong>{" "}
                we’ve got it all going. We think of our in-house studio as an
                experimental lab, where ideas come to life and our A game shines
                bright. Our production team operates on chais and occasionally
                ordered pizzas, that pump their creative juices to new levels.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {productionData.map((item, index) => (
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
            <Link href={item.link}>
            <div
              className="col-lg-4 wow fadeInLeft "
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
