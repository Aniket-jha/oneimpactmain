import React from "react";
import fadeWhenScroll from "../../common/fadeWhenScroll";

const ContactHeader = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return (
    <header
      ref={sliderRef}
      className="works-header fixed-slider hfixd valign sub-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font">Apply Now</h1>
                <p>
                Work for us and learn new things. Apply now and find the right opportunity
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
