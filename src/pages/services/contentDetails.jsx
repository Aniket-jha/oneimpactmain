import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import Navbar from "../../components/Navbar/navbar";
import ShowcasesFullScreenCircleSlide from "../../components/Showcases-full-screen-circle-slide/showcases-full-screen-circle-slide.jsx";
import DarkTheme from "../../layouts/Dark";
import Services5 from "../../components/Services5/services5"
import ContentDetails from "../../components/Services5/contentServices"
import Footer from "../../components/Footer/footer";
import { client } from "../../../lib/client";
const Showcase3Dark = ({blogs}) => {
  return (
    <DarkTheme>
      <Navbar/>
      <div>
        <ContentDetails/>
         
         </div>
         <Footer blogs={blogs} />
    </DarkTheme>
  );
};
export const getServerSideProps = async ()=>{
  const query = '*[_type == "journal"]';
  const blogs = await client.fetch(query);
  
   return {
    props: { blogs}
  }
}
export default Showcase3Dark;
