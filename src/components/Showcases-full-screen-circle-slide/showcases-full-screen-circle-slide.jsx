import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceData from "../../data/ServiceData.json"
import SwiperCore, { Navigation, Parallax, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

SwiperCore.use([Navigation, Parallax, Mousewheel]);

const ShowcasesFullScreenCircleSlide = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <header className="slider circle-slide showcase-carus">
      <div id="content-carousel-container-unq-1" className="swiper-container">
        {!load ? (
          <Swiper
            speed={1000}
            mousewheel={true}
            parallax={true}
            centeredSlides={true}
            slidesPerView={1}
          
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={500}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            onSwiper={(swiper) => {
                
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }
                  
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="swiper-wrapper"
            breakpoints={{
              0: {
                spaceBetween: 0,
              },
              640: {
                spaceBetween: 0,
              },
              768: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 500,
              },
            }}
          >
            {ServiceData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="full-width">
                  <div
                    className="bg-img valign"
                    style={{ backgroundImage: `url(${slide.image}), linear-gradient(to right, #fafafa, #d13531)` }}
                    data-overlay-dark="1"
                  >
                 
                    <div className="caption ontop valign">
                      <div className="o-hidden">
                        <h1 data-swiper-parallax="-2000">
                          <Link
                            href={slide.explore}
                          >
                            <a>
                              <div className="stroke">{slide.title.first}</div>
                              <span>{slide.title.second}</span>
                               <p className="knowMoreButton" style={{}}>Know More</p>
                            </a>
                          </Link>
                        </h1>
                      </div>
                    </div>
                    <div className="copy-cap valign">
                      <div className="cap">
                        <h1 data-swiper-parallax="-2000">
                          <Link
                            href={`/project-details2/project-details2-dark`}
                          >
                            <a>
                              <div className="stroke">{slide.title.first}</div>
                              <span>{slide.title.second}</span>
                              <p className="knowMoreButton" style={{}}>Know More</p>
                            </a>
                          </Link>
                        </h1>
                      </div>
                    </div>
                     
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>

      <div className="txt-botm">
        <div
          ref={navigationNextRef}
          className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
        >
          <div>
            <span>Next </span>
          </div>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div
          ref={navigationPrevRef}
          className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
        >
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShowcasesFullScreenCircleSlide;
