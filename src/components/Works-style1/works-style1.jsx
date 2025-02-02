/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../common/tooltipEffect";
import { urlFor } from "../../../lib/client";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
const WorksStyle1 = ({gallery}) => {
  React.useEffect(() => {
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  return (
    <section className="works section-padding pt-30 pb-30">
      <h2 style={{textAlign:"center",marginBottom:"35px"}}>Life at One Impact</h2>
      <div className="container">
       <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                  {
          gallery.map((item)=>(
             
              
                  <div
                    className="galleryImage"
                    data-tooltip-tit="Life at One Impact"
                    data-tooltip-sub="Gallery"
                  >
                    <img src={urlFor(item.galleryImage.asset)} alt="" />
                  </div>
            
          ))
        }
                </Masonry>
            </ResponsiveMasonry>
        <div className="row ">
        
        
         
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
