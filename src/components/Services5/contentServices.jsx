import React from "react";
import featuresData from "../../data/sections/features.json";
import { contentData, otherData } from "../../data/sections/contentData";
import Link from "next/link";
const Services5 = () => {
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3 className="wow color-font">CONTENT & CREATIVE OUTREACH</h3>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                In the sea of briefs we encounter daily, our eyes are always
                looking for the creative fishes. You throw a mundane problem at
                us, and we bounce it back with{" "}
                <strong className="fw-600">
                  creative, enriching and out-of-the box strategies.
                </strong>{" "}
                A fair warning, our ideas might blow your minds.
                <strong className="fw-600">
                  {" "}
                  From planning monthly social media calendars, to writing
                  scripts and telling stories -
                </strong>{" "}
                we do it all with the objective of bringing quality reach and
                visibility to your brand.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {contentData.map((item, index) => (
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
