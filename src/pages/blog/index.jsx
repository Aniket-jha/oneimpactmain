import React from "react";
import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogGrid from "../../components/Blog-grid/blog-grid.jsx";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import { client } from "../../../lib/client";
const BlogGridDark = ({blogs}) => {
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
        title="Our Journals."
        paragraph="All the most stories and informational content."
      />
      <BlogGrid blogs={blogs} />
      <Footer blogs={blogs} />
    </DarkTheme>
  );
};

export const getServerSideProps = async ()=>{
  const query = '*[_type == "journal"] | order(releaseDate desc) | order(_createdAt desc)';
  const blogs = await client.fetch(query);
  
   return {
    props: { blogs}
  }
}

export default BlogGridDark;
