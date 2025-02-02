/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const JobList = ({ jobs }) => {
  console.log(jobs);
  return (
    <section className="blog-pg blog-list section-padding pt-0">
      {jobs.length !== 0 ? (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="posts mt-80">
                {jobs.map((job, index) => (
                  <div
                    className="item mb-80 wow fadeInUp"
                    key={index}
                    data-wow-delay=".3s"
                  >
                    <div className="row">
                      <div className="col-lg-6 valign">
                        <div className="cont">
                          <div>
                            {/* <div className="info">
                            <Link href="/blog/blog-dark">
                              <a className="date">
                                <span>
                                  <i>{blogItem.date.day}</i>
                                  {blogItem.date.month}
                                </span>
                              </a>
                            </Link>
                            <span>/</span>
                            {blogItem.tags.map((tag, index) => (
                              <Link key={index} href="/blog/blog-dark">
                                <a className="tag">
                                  <span>{tag}</span>
                                </a>
                              </Link>
                            ))}
                          </div> */}
                            <h5>
                              <Link href="/blog-details/blog-details-dark">
                                <a>{job.positionName}</a>
                              </Link>
                            </h5>
                            <p className="mt-10">{job.description}</p>
                            <div className="btn-more mt-30">
                              <a href="#contact-arch" className="simple-btn">
                                Apply Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center", marginTop: "80px" }}>
            No Opening Right Now
          </h1>
          <p className="text-center">
            Interested in working with us. Fill the form below
          </p>
        </div>
      )}
    </section>
  );
};

export default JobList;
