import React from "react";
import Navbar from "../../components/Navbar/navbar";


import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import DarkTheme from "../../layouts/Dark";
import { client } from "../../../lib/client";
import AuthorSidebar from "../../components/author/AuthorSidebar";
import AuthorDetail from "../../components/author/AuthorDetail";

const test = ({blogs}) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

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
  
  }, [navbarRef]);
  return (
    <div>
       <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
      <div className="authorMainBox" >
        <AuthorSidebar />
        <AuthorDetail blogs={blogs} />
      </div>
      
     
  
     
       <Footer blogs={blogs}  />
    </DarkTheme>
    </div>
  )
}
export const getServerSideProps = async ({res,req})=>{
  res.setHeader(
       'Cache-Control',
       'public, s-maxage=10, stale-while-revalidate=59'
     )
   const query = '*[_type == "journal"]';
   const blogs = await client.fetch(query);
  
    return {
     props: { blogs}
   }
 }

export default test