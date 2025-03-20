import React from 'react'
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import WorksHeader from "../../components/Works-header/works-header";
import WorksStyle2 from "../../components/Works-style2/works-style2";
import WorksStyle3 from "../../components/Works-style3/works-style3"
import WorksStyle4 from "../../components/Works-style4/works-style4"
import WorksStyle5 from "../../components/Works-style5/works-style5"
import BlogListed from "../../components/Blog-list/blog-list";
import Works4 from "../../components/Works4/works4";
import { client } from "../../../lib/client";
import Head from 'next/head';
import Works3 from "../../components/Works3/works3"
import JobList from '../../components/Jobs/JobList';
import ContactArch from '../../components/Contact-arch/contact-arch';
import ContactHeader from '../../components/Works-header/ContactHeader';
import { GoogleAnalytics } from '@next/third-parties/google';
const index = ({career,blogs}) => {
     const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
   
  React.useEffect(() => {
   
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
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
   
  }, [fixedHeader, MainContent, navbarRef]);
  return (
      <>
     <Head>
        <title>Career - One Impact Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
  name="description"
  content="Building 360 degree digital marketing solutions to help your brand achieve that ONE big bang IMPACT! "
/>
<GoogleAnalytics gaId="G-YJZ32KR6QZ" />
</Head>
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ContactHeader sliderRef={fixedHeader} />
      <div ref={MainContent} className="main-content">
         <JobList jobs={career} />
         <ContactArch/>
        <Footer blogs={blogs} />
      </div>
    </DarkTheme>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "job"]';
  const career = await client.fetch(query);
   const blogsQuery = '*[_type == "journal"]';
  const blogs = await client.fetch(blogsQuery);
  
  return {
    props: { career,blogs}
  }
}

export default index