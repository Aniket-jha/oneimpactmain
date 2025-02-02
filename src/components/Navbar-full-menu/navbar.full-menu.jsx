/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import initFullNavbarMenu from "../../common/initFullNavbarMenu";
import Image from "next/image"
import NewsletterSubscribe from "../Newsletter/NewsletterSubscribe";
const NavbarFullMenu = ({ theme }) => {
  React.useEffect(() => {
    initFullNavbarMenu()
  }, [])
  return (
    <>
      <div
        id="nav"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <Link href="/">
              {theme ? (
                theme === "light" ? (
                  <Image src={appData.darkLogo} width="90px" height="60px" alt="logo" />
                ) : (
                  <Image src={appData.lightLogo} width="90px" height="60px" alt="logo" />
                )
              ) : (
                <Image src={appData.lightLogo} width="150px" height="50px" alt="logo" />
              )}
            </Link>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text word">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                 <li>
                    <div className="o-hidden">
                      <Link href={`/`}>
                        <a className="link">
                          <span className="nm">01.</span>Home
                        </a>
                      </Link>
                    </div>
                  </li>
                   <li>
                    <div className="o-hidden">
                      <Link href={`/About`}>
                        <a className="link">
                          <span className="nm">02.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                     <li>
                    <div className="o-hidden">
                      <Link href={`/services`}>
                        <a className="link">
                          <span className="nm">03.</span>Our Services
                        </a>
                      </Link>
                    </div>
                  </li>
                  {/* <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">03.</span>Our Work
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/work/statics`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>Statics
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/work/reels`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>Reels
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/work/production`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>Production
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
            */}
              
                  {/* <li>
                    <div className="o-hidden">
                      <span className="link ">
                        <span className="nm">01.</span>Home
                        
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home1-dark`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>Main Home
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home2-dark`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>Creative Agency
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home5-dark`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>Digital Agency
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home4-dark`}>
                              <a className="sub-link">
                                <span className="nm">04.</span>Business One Page
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home3-dark`}>
                              <a className="sub-link">
                                <span className="nm">05.</span>Corporate
                                Business
                              </a>
                            </Link>
                          </div>
                        </li>

                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home6-dark`}>
                              <a className="sub-link">
                                <span className="nm">06.</span>Modern Agency
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home7-dark`}>
                              <a className="sub-link">
                                <span className="nm">07.</span>Freelancer
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/homepage/home8-dark`}>
                              <a className="sub-link">
                                <span className="nm">08.</span>Architecture
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/about/about-dark`}>
                        <a className="link">
                          <span className="nm">02.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">03.</span>Works
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/showcase/showcase-dark`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>ShowCase Parallax
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/showcase4/showcase4-dark`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>ShowCase Carousel
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/showcase3/showcase3-dark`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>ShowCase Circle
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/works/works-dark`}>
                              <a className="sub-link">
                                <span className="nm">04.</span>Portfolio Masonry
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/works2/works2-dark`}>
                              <a className="sub-link">
                                <span className="nm">05.</span>Portfolio
                                Filtering
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/works3/works3-dark`}>
                              <a className="sub-link">
                                <span className="nm">06.</span>Portfolio Gallery
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">04.</span>Blogs
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/blog/blog-dark`}>
                              <a className="sub-link">
                                <span className="nm">01.</span>Blog Standerd
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/blog-list/blog-list-dark`}>
                              <a className="sub-link">
                                <span className="nm">02.</span>Blog List
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/blog-grid/blog-grid-dark`}>
                              <a className="sub-link">
                                <span className="nm">03.</span>Blog Grid
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href={`/blog-details/blog-details-dark`}>
                              <a className="sub-link">
                                <span className="nm">04.</span>Blog Details
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                  <li>
                    <div className="o-hidden">
                      <Link href={`/contact`}>
                        <a className="link">
                          <span className="nm">04.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                   <li>
                    <div className="o-hidden">
                      <a href="https://cdn.sanity.io/files/p67wd3hf/production/ed39fe3295f3055be3ea05493e969c3baeaa3d36.pdf">
                        <a className="link">
                          <span className="nm">05.</span>Work
                        </a>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/Clients`}>
                        <a className="link">
                          <span className="nm">06.</span>Clients
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <Link href={`/career`}>
                        <a className="link">
                          <span className="nm">07.</span>Career
                        </a>
                      </Link>
                    </div>
                  </li>
                   <li>
                    <div className="o-hidden">
                      <Link href={`/Team`}>
                        <a className="link">
                          <span className="nm">08.</span>Team
                        </a>
                      </Link>
                    </div>
                  </li>
                     <li>
                    <div className="o-hidden">
                      <Link href={`/blog`}>
                        <a className="link">
                          <span className="nm">09.</span>Blog
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                
                <div className="item">
                  <h6>Address :</h6>
                  <p>
                    Office No 2037, 2nd Floor, Oberoi Garden Estate, Chandivali Farm Rd, Andheri East, Mumbai 400072
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a target="_blank" href="mailto:contact@oneimpact.co">contact@oneimpact.co</a>
                  </p>
                </div>
                <div className="item">
                  <h6>Contact No :</h6>
                  <p>
                    <a target="_blank" href="mailto:contact@oneimpact.co">+91 90049 77350</a>
                  </p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
