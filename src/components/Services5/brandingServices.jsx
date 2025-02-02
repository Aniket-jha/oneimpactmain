import Link from "next/link";
import React from "react";
import { brandingData, otherData } from "../../data/sections/brandingData";

const Services5 = () => {
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-10">
            <div className="sec-head  text-center">
              <h3 className="wow color-font">Branding and Strategy</h3>
              <p style={{ marginTop: "15px", textAlign: "justify" }}>
                A fabulous product with mediocre branding can really get you
                not-so-fabulous results :({" "}
                <strong className="fw-600">
                  Branding is a passionate task and literally establishes your
                  identity
                </strong>{" "}
                in this cluttered world. If you have a product or service that
                needs identity building or you simply want to revamp your
                existing brand, we’ll make sure you get served with a{" "}
                <strong className="fw-600">
                  meticulously crafted brand roadmap and a strategy
                </strong>{" "}
                to keep the fabulous-ness evergreen!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
     
          {brandingData.map((item, index) => (
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
                  <ul style={{ listStyleType: "circle !important" }}>
                    {item.content.map((i) => (
                      <li style={{ marginTop: "5px", fontSize: "13px",display:"flex",alignItems:"flex-start",justifyContent:"flex-start" }}>
                        <span style={{ marginRight: "10px" }}> ⚪ </span>
                        {i}
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
        <div className="row  justify-content-center">
          {otherData.map((item, index) => (
            <Link href={item.link} >
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
