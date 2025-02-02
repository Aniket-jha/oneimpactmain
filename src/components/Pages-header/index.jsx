/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "../../../lib/client";

const PagesHeader = ({aboutContent}) => {
  
  return (
    <header className="pages-header circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont aboutMargin   mb-50 text-center">
              <h1 className="color-font fw-700">About Us</h1>
              <p className="aboutHeaderContent  text-justify">
               {aboutContent.headerContent}
              </p>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="img">
              <img src={urlFor(aboutContent.bannerImage)} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="half sub-bg">
        <div className="circle-color">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
    </header>
  );
};

export default PagesHeader;
