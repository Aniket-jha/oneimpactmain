import React from 'react'
import DarkTheme from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import Team2 from '../../components/Team2/team2';
import Footer from "../../components/Footer/footer";
import VideoWithTeam from '../../components/Video-with-team/video-with-team';
import Video2 from "../../components/Video2/video2"
import Works from '../../components/Works/works';
import WorksStyle1 from "../../components/Works-style1/works-style1";
import { client } from '../../../lib/client';
import Head from 'next/head';

const index = ({gallery,teamData,seniorsData,blogs }) => {
  React.useEffect(()=>{
     
    },[])
  return (
    
    <>
     <Head>
        <title>Team</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
  name="description"
  content="Building 360 degree digital marketing solutions to help your brand achieve that ONE big bang IMPACT! "
/>
</Head>
   <DarkTheme>
    <NavbarFullMenu/>
   <Video2/>


    <Team2 seniorsData={seniorsData} teamData={teamData}/>
    <WorksStyle1 gallery={gallery} />
    <Footer blogs={blogs} />
   </DarkTheme>

   </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "teamGallery"]';
  const gallery = await client.fetch(query);
  const teamQuery = '*[_type == "team"]';
  const teamData = await client.fetch(teamQuery);
   const seniorsQuery = '*[_type == "seniors"]';
  const seniorsData = await client.fetch(seniorsQuery);
   const blogsQuery = '*[_type == "journal"]';
  const blogs = await client.fetch(blogsQuery);
  return {
    props: { gallery, teamData,seniorsData,blogs }
  }
}

export default index