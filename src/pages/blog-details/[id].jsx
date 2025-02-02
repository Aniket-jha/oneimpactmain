import React from "react";
import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/blog-details";
import PageHeader from "../../components/Page-header/page-header";
import {useRouter} from "next/router"
import Footer from "../../components/Footer/footer";
import {  pinDetailQuery } from "../../../lib/queries";
import { client,urlFor } from "../../../lib/client";
import axios from "axios";
const BlogDetailsDark = ({blogDetails,blogs}) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const router = useRouter()
  console.log(blogDetails)
  
  // const fetchPinDetails = () => {
  //   let query = pinDetailQuery(pinId);

  //   if (query) {
  //     client.fetch(query).then((data) => {
  //       setPinDetail(data[0]);

  //       if (data[0]) {
  //         query = pinDetailMorePinQuery(data[0]);
  //         client.fetch(query).then((res) => setPins(res));
  //       }
  //     });
  //   }
  // };
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    initializeGoogleTagManager('G-KVXKVSP4TJ');
  }, [navbarRef]);
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="Blog Details."
        paragraph="All the most current news and events of our creative team."
      />
          <BlogDetails details={blogDetails[0]} />
          <Footer blogs={blogs} />
    </DarkTheme>
  );
};


export const getServerSideProps = async ({params}) =>{

 
   const blogDetailsQuery = `*[_type == "journal" &&  _id == '${params.id}']{
    
    bannerImage{
      asset->{
        url
      }
    },
    _id,
    title, 
    
    category,

    content,
    introText
    
  }`;
  const blogDetails = await client.fetch(blogDetailsQuery);
   const query = '*[_type == "journal"]';
  const blogs = await client.fetch(query);
  return{
    props:{blogDetails,blogs}
  }
}
 
export default BlogDetailsDark;
