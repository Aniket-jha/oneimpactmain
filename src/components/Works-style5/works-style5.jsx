/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { urlFor } from "../../../lib/client";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
const WorksStyle5 = ({productions,shoots,}) => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
               <div className="filter">
                  <span  className="active"  data-filter="*">All</span>
                 <span  data-filter=".shoots">Shoots</span>
                <span   data-filter=".cretives">Creatives</span>
                <span data-filter=".production">Production</span>
                <span data-filter=".graphic">Reels</span>
              </div>
          </div>

          <div className="gallery full-width">
           {productions.map((work)=>(
            <div
            
              className="col-md-12 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
                <div
      className="video bg-img parallaxie"
      style={{ backgroundImage: `url(${urlFor(work.starterImage.asset)})`,height:"100px",backgroundPosition:"center center",backgroundSize:"cover" }}
    >
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={work.videoURL}
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a>
      
    </div>
              <div className="cont">
                <h6>{work.name}</h6>
                <span>
                  <Link href="/works3/works3-dark">Design</Link>,
                  <Link href="/works3/works3-dark">WordPress</Link>
                </span>
              </div>
            </div>
          ))}
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>BUGANVILLA HOUSE</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Arch</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>The Concept</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Arch</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Private House</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Arch</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Floating House Messinia</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Arch</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>IN THE PINE FOREST</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Arch</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>VILLAS IN SOCHI</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Arch</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;
