"use client";

import Carousel from "../Carousel";
import React from "react";

import "swiper/css";
import "swiper/css/pagination";

export default function ProjetosCarousel() {
     return (
          <section
               id="projects"
               className="py-16 max-w-full h-auto overflow-hidden"
          >
               <div className="container flex flex-col items-center mx-auto px-0">
                    <h2 className="font-titulo text-5xl text-center drop-shadow-lg mb-16 tracking-wider">
                         PROJETOS
                    </h2>

                    <div style={{ height: "60em", position: "static" }}>
                         <Carousel
                              baseWidth={800}
                              autoplay={true}
                              autoplayDelay={3000}
                              pauseOnHover={true}
                              loop={true}
                              round={false}
                         />
                    </div>
               </div>
          </section>
     );
}
