import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import ShowcasesFullScreen from "../../components/Showcases-full-screen/showcases-full-screen";
import DarkTheme from "../../layouts/Dark";
import { client } from "../../../lib/client";
import Head from "next/head";
const ShowcaseDark = ({banners}) => {
  console.log(banners)
  return (
   
   
    <DarkTheme>
       <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
  name="description"
  content="Building 360 degree digital marketing solutions to help your brand achieve that ONE big bang IMPACT! "
/>
      </Head>
      <NavbarFullMenu />
      <ShowcasesFullScreen banners={banners} />
    </DarkTheme>
  
  );
};



export default ShowcaseDark;
