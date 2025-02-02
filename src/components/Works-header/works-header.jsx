import React from "react";
import fadeWhenScroll from "../../common/fadeWhenScroll";

const WorksHeader = ({ sliderRef,title }) => {
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
                <h1 className="color-font">{title}</h1>
                <p>
                 We make creatives that are not only visually aesthetic and consistent but are also backed by a solid content strategy.
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorksHeader;
