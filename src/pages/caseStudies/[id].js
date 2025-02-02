import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectDate from "../../data/project-details2.json";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";
import { client } from "../../../lib/client";
const ProjectDetails2Dark = ({blogs,caseStudiesDetails}) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
    console.log(caseStudiesDetails)
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
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        {/* <ProjectDetails2Header projectHeaderData={ProjectDate} />
        <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
        <ProjectGallery />
        <ProjectDescription projectDescriptionData={ProjectDate.description} />
        <ProjectVideo projectVideoDate={ProjectDate} />
        <NextProject /> */}
        {/* <Footer blogs={blogs} /> */}
      </div>
    </DarkTheme>
  );
};

export const getServerSideProps = async ({params}) =>{

 
   const caseStudiesDetailsQuery = `*[_type == "allWork" &&  _id == '${params.id}']{
    
    bannerImage{
      asset->{
        url
      }
    },
    images[]{
      asset->{url}
    },
    starterImage{
      asset->{
        url
      }
    },
     videos{
        asset->{
          _id,
          url
        }
      },

    _id,
    title, 
    subTitle,
    category,

    contentOne,
    contentTwo,
      
    
  }`;
  const caseStudiesDetails = await client.fetch(caseStudiesDetailsQuery);
   const query = '*[_type == "journal"]';
  const blogs = await client.fetch(query);
  return{
    props:{caseStudiesDetails,blogs}
  }
}
 


export default ProjectDetails2Dark;
