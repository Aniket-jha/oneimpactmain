import React from "react";
import Split from "../Split";


const AboutIntro = ({aboutContent}) => {
  console.log(aboutContent)
  return (
    <section className="intro-section section-padding pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Why US</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
               {aboutContent.whyContentOne}
                </p>
                <p className="wow txt words chars splitting" data-splitting>
                 {aboutContent.whyContentTwo}
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
