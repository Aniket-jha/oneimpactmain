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
const index = ({blogs}) => {

  return (
    <DarkTheme>
    <Navbar/>
    <section className='section-padding pt-64 pb-64'>
    <div className='comingSoonBox'>
        <img src="/img/comingsoon.png"  alt="" />
        
       <h1 style={{textAlign:"center"}} className='color-font fw-600'>Coming Soon</h1>
      </div>
       </section>
    <Footer blogs={blogs}/>
   </DarkTheme>
  )
}


export const getServerSideProps = async () => {
  
     const blogsQuery = '*[_type == "journal"]';
  const blogs = await client.fetch(blogsQuery);
  
  return {
    props: {  blogs}
  }
}


export default index