import React from "react";
import Navbar from "../../components/Navbar/navbar";


import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import DarkTheme from "../../layouts/Dark";
import { client } from "../../../lib/client";
const About = ({blogs,aboutContent}) => {
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
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
      <PagesHeader aboutContent={aboutContent[0]} />
      <AboutIntro aboutContent={aboutContent[0]} />
      
      
     
  
      <CallToAction /> 
       <Footer blogs={blogs}  />
    </DarkTheme> 
  );
};

export const getServerSideProps = async ({res,req})=>{
 res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
  const query = '*[_type == "journal"]';
  const blogs = await client.fetch(query);
  const aboutQuery = '*[_type == "aboutContent"]'
  const aboutContent = await client.fetch(aboutQuery);
   return {
    props: { blogs,aboutContent}
  }
}

export default About;
