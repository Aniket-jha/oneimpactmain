import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesFullScreenCircleSlide from "../../components/Showcases-full-screen-circle-slide/showcases-full-screen-circle-slide.jsx";
import DarkTheme from "../../layouts/Dark";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
const Showcase3Dark = () => {
  React.useEffect(()=>{
   
  },[])
  return (
    <>
     <Head>
        <title>Service - One Impact Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
  name="description"
  content="Building 360 degree digital marketing solutions to help your brand achieve that ONE big bang IMPACT! "
/>
<GoogleAnalytics gaId="G-YJZ32KR6QZ" />
</Head>
    <DarkTheme>
      <NavbarFullMenu />
      <ShowcasesFullScreenCircleSlide />
    </DarkTheme>
    </>
  );
};

export default Showcase3Dark;
