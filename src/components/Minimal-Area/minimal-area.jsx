/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container ">
        <div className="row">
         
          <div className="col-lg-12 pt-24 pb-24 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
                Our creative Ad agency is ranked among the finest in the US. We
                cultivate smart ideas for start-ups and seasoned players.
              </p>
              <ul className="">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                    With end-to-end Digital Marketing solutions, we hope to navigate brands towards higher grounds of social and economical growth. 
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Vision
                  </h6>
                  <p>
                    As a team of creative thinkers, we hope to always be unapologetically ambitious and economically rational. 
                  </p>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
