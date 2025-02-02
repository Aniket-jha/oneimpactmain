import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesFullScreenCircleSlide from "../../components/Showcases-full-screen-circle-slide/showcases-full-screen-circle-slide.jsx";
import DarkTheme from "../../layouts/Dark";
import Head from "next/head";
import { initializeGoogleTagManager } from '../googleTagManager';
const Showcase3Dark = () => {
  React.useEffect(()=>{
    initializeGoogleTagManager('G-KVXKVSP4TJ');
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
</Head>
    <DarkTheme>
      <NavbarFullMenu />
      <ShowcasesFullScreenCircleSlide />
    </DarkTheme>
    </>
  );
};

export default Showcase3Dark;
