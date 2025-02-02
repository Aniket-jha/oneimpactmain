/* eslint-disable @next/next/no-img-element */
import React,{useState} from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { urlFor } from "../../../lib/client";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import MuxVideo from '@mux/mux-video-react';
const WorksStyle2 = ({ grid, hideFilter, filterPosition, productions,heroVideos }) => {
  console.log(productions)
  const [isOpen, setOpen] = useState(false);
  console.log(heroVideos)
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
    console.clear();
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                 Production
                </h6>
                <h3 className="wow color-font">
                  Some of our video work for clients
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span  className="active"  data-filter="*">All</span>
                 <span     data-filter=".heroVideos">Hero Videos</span>
                <span   data-filter=".production">Production Videos</span>
              </div>
            </div>
          )}
      
          <div className="gallery  full-width">
        
    {productions?.map((work)=>(
            <div
            
              className={`${
                grid === 3
                  ? "col-lg-6 col-md-4"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items production wow fadeInUp`}
              data-wow-delay=".4s"
            >
               <video width="100%" controls  src={work.videos.asset.url} >

               </video>
              <div className="cont">
                <h6>{work.name}</h6>
                               <span>
                  <p>{work.subTitle}</p>
                </span>
              </div>
            </div>
          ))}
                
    {heroVideos?.map((work)=>(
            <div
           
              className={`${
                grid === 3
                  ? "col-lg-6 col-md-4"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items heroVideos wow fadeInUp`}
              data-wow-delay=".4s"
            >
               <video width="100%" controls  src={work.videos.asset.url} >

               </video>
              <div className="cont">
                <h6 style={{textAlign:"center"}}>{work.title}</h6>
                               <span>
                  <p>{work.subTitle}</p>
                </span>
              </div>
            </div>
          ))}
        
          </div>
          </div>
        </div>
         

    </section>
  );
};

export default WorksStyle2;
