import React from 'react'
import BlogGrid from '../Blog-grid/blog-grid'
import { urlFor } from '../../../lib/client'
import Link from 'next/link'

const AuthorDetail = ({blogs}) => {
    console.log(blogs)
  return (
    <div className='authorDetailsBox' >
        <div>
        <h3 className="wow color-font">About Us</h3>
        <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
    <br /> <br />
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
<br /> <br />
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
        </div>
        <div className='articlesMainBox' >
        <h3 className="wow  color-font">Articles</h3>
        <div className='mt-4 row' >
        <div className="col-lg-6" key={blogs[0]?.id}>
                <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img">
                   {blogs[0]?.bannerImage && <img src={urlFor(blogs[0]?.bannerImage?.asset?._ref)} alt="" />}
                  </div>
                  <div className="cont">
                    <div>
                      
                      <h5>
                        <Link href={`/blog-details/${blogs[0]?._id}`}>
                          {blogs[0]?.title?.substr(0, 55) + "..."}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link href={`/blog-details/${blogs[0]?._id}`}>
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" key={blogs[1]?.id}>
                <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img">
                   {blogs[1]?.bannerImage && <img src={urlFor(blogs[1]?.bannerImage?.asset?._ref)} alt="" />}
                  </div>
                  <div className="cont">
                    <div>
                      
                      <h5>
                        <Link href={`/blog-details/${blogs[1]?._id}`}>
                          {blogs[1]?.title?.substr(0, 55) + "..."}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link href={`/blog-details/${blogs[1]?._id}`}>
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" key={blogs[2]?.id}>
                <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img">
                   {blogs[2]?.bannerImage && <img src={urlFor(blogs[2]?.bannerImage?.asset?._ref)} alt="" />}
                  </div>
                  <div className="cont">
                    <div>
                      
                      <h5>
                        <Link href={`/blog-details/${blogs[2]?._id}`}>
                          {blogs[2]?.title?.substr(0, 55) + "..."}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link href={`/blog-details/${blogs[2]?._id}`}>
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" key={blogs[3]?.id}>
                <div className="item mb-80 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img">
                   {blogs[3]?.bannerImage && <img src={urlFor(blogs[3]?.bannerImage?.asset?._ref)} alt="" />}
                  </div>
                  <div className="cont">
                    <div>
                      
                      <h5>
                        <Link href={`/blog-details/${blogs[3]?._id}`}>
                          {blogs[3]?.title?.substr(0, 55) + "..."}
                        </Link>
                      </h5>
                      <div className="btn-more">
                        <Link href={`/blog-details/${blogs[3]?._id}`}>
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
        </div>
    </div>
  )
}

export default AuthorDetail