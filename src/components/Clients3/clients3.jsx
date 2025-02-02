import React from "react";
import { urlFor } from "../../../lib/client";
import { clients } from "../../data/clientsData";
const Clients3 = () => {
  console.log(clients)
  return (
    <section className="brands pt-80 pb-80 bg-dark" data-overlay-dark="0">
      <div className="container">
        <div className="head mt-30 mb-60 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="text">
                <h2>
                Our Clientele
                  
                </h2>
               
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
        {clients.map(client=>(
           <div style={{}} className="col-lg-2 col-6  col-md-3">
            <div className="">
              <div className="">
                <a href="#0">
                  <img
                    style={{backgroundColor: "rgba(255,255,255,0.0)", padding:"20px",  borderRadius:"50%",margin:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}
                    src={client}
                    alt=""
                    className="front"
                  />
                 
                </a>
              </div>
            </div>
          </div>
       ) )}
        </div>
      </div>
      <div className="circle-blur"></div>
    </section>
  );
};

export default Clients3;
