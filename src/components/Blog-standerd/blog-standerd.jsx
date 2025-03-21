/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "../../../lib/client";

const BlogStanderd = ({ blogs }) => {
  console.log(blogs)
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs?.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem.id}
                >
                  <div className="img">
                    <Link href={`/blog-details/${blogItem._id}`}>
                      <a>
                        <img src={urlFor(blogItem.bannerImage.asset._ref)} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <Link href={`/blog/blog-dark`}>
                          <a className="date">
                            <span className="num">{blogItem.releaseDate}</span>
                        
                          </a>
                        </Link>
                        <div className="tags">
                          {/* {blogItem.tags.map((tag, index) => (
                            <Link key={index} href="/blog/blog-dark">
                              {tag}
                            </Link>
                          ))} */}
                        </div>
                        <h4 className="title">
                          <Link href={`/blog-details/${blogItem._id}`}>
                            {blogItem.title}
                          </Link>
                        </h4>
                        <p>{blogItem.introText}</p>
                        <Link href={`/blog-details/${blogItem._id}`}>
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="pagination">
                <span className="active">
                  <Link href={`/blog/blog-dark`}>1</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>2</Link>
                </span>
                <span>
                  <Link href={`/blog/blog-dark`}>
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </Link>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
