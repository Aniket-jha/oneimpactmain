import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import WorksHeader from "../../components/Works-header/works-header";
import WorksStyle2 from "../../components/Works-style2/work-style-2production";
import WorksStyle3 from "../../components/Works-style3/works-style3"
import WorksStyle4 from "../../components/Works-style4/works-style4"
import WorksStyle5 from "../../components/Works-style5/works-style5"
import Works4 from "../../components/Works4/works4";
import { client } from "../../../lib/client";
import Works3 from "../../components/Works3/works3"
import axios from 'axios'
import { allHeroVideosQuery, allProductionVideosQuery } from "../../../lib/queries";
const WorksDark = ({works,productions,shoots,reels,productionReels,heroVideos,blogs}) => {
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
  console.log(reels)
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <WorksHeader title="Production" sliderRef={fixedHeader} />
      <div ref={MainContent} className="main-content">
         <WorksStyle2  productions={productions} heroVideos={heroVideos} grid={3} filterPosition="center" />
        <Footer blogs={blogs} />
      </div>
    </DarkTheme>
  );
};

export const getServerSideProps = async () => {
  console.log(process.env.BASE_URL)
 const productionQuery = `*[_type == "production"] | order(_createdAt desc){
    _id,
    name,
       videos{
        asset->{
          _id,
          url
        }
      },
    
  }`;
  const productionsResponse = await client.fetch(productionQuery);
  const heroQuery = `*[_type == "heroVideos"] | order(_createdAt desc){
    _id,
    title,
       videos{
        asset->{
          _id,
          url
        }
      },
    
  }`;
  const heroResponse = await client.fetch(heroQuery);
   const blogsQuery = '*[_type == "journal"]';
  const blogs = await client.fetch(blogsQuery);
  return {
    props: { productions:productionsResponse,heroVideos:heroResponse,blogs }
  }
}


export default WorksDark;
