/* eslint-disable @next/next/no-img-element */
import React from "react";
import { urlFor } from "../../../lib/client";
const ProjectGallery = ({photos}) => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
        { photos.map((photo)=>(
             <a href="#" className="col-md-3 popimg">
            <img alt="" src={urlFor(photo.asset._ref)} />
          </a>
        ))
          
        }
         
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
