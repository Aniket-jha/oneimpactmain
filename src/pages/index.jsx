import React,{useEffect} from "react";
import Head from "next/head";
import { client } from "../../lib/client";
import ShowcaseDark from "./showcase/showcase-dark";
import { initializeGoogleTagManager } from './googleTagManager';
const Home = ({banners}) => {
  useEffect(()=>{
    initializeGoogleTagManager('G-KVXKVSP4TJ');
  },[])
  return (
    <>
    <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
  name="description"
  content="Building 360 degree digital marketing solutions to help your brand achieve that ONE big bang IMPACT! "
/>
  



      </Head>
      
      <ShowcaseDark banners={banners}/>
    </>
  );
};

export const getServerSideProps= async () => {
  const query = '*[_type == "homeBanners"] | order(releaseDate asc) | order(_createdAt asc)';
  const banners = await client.fetch(query);

  return{
    props:{banners}
  }
}

export default Home;
