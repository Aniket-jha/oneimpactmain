import React from 'react'
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar"
import Team2 from '../../components/Team2/team2';
import Footer from "../../components/Footer/footer";
import VideoWithTeam from '../../components/Video-with-team/video-with-team';
import Video2 from "../../components/Video2/video2"
import Works from '../../components/Works/works';
import WorksStyle1 from "../../components/Works-style1/works-style1";
import Clients from "../../components/Clients/clients"
import Clients2 from "../../components/Clients2/clients2"
import Clients3 from "../../components/Clients3/clients3"
import { client } from '../../../lib/client';
import Head from 'next/head';
const index = ({clients,blogs}) => {

  return (
    <>
     <Head>
        <title>Clients - One Impact Agency</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
  name="description"
  content="Building 360 degree digital marketing solutions to help your brand achieve that ONE big bang IMPACT! "
/>
</Head>
    <DarkTheme>
    <Navbar/>
        <Clients3 clients={clients} />
    <Footer blogs={blogs}/>
   </DarkTheme>
   </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "clients"]';
  const clients = await client.fetch(query);
     const blogsQuery = '*[_type == "journal"]';
  const blogs = await client.fetch(blogsQuery);
  
  return {
    props: { clients, blogs}
  }
}


export default index