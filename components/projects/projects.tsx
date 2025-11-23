"use client";

import Carousel from "../Carousel";
import React from "react";
// Importe os componentes e módulos do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Importe os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";

// Seus dados dos projetos (exemplo)
const projetos = [
     {
          nome: "Projeto Alpha",
          descricao: "Um sistema de gerenciamento para clientes.",
          imagem: "/imagens/projeto-alpha.png", // Caminho para a imagem
     },
     {
          nome: "Projeto Beta",
          descricao: "Plataforma de e-commerce com foco em UX.",
          imagem: "/imagens/projeto-beta.png",
     },
     {
          nome: "Projeto Gamma",
          descricao: "Aplicativo mobile para agendamento de serviços.",
          imagem: "/imagens/projeto-gamma.png",
     },
     {
          nome: "Projeto Delta",
          descricao: "Website institucional para uma startup de tecnologia.",
          imagem: "/imagens/projeto-delta.png",
     },
     {
          nome: "Projeto Epsilon",
          descricao: "Ferramenta de análise de dados em tempo real.",
          imagem: "/imagens/projeto-epsilon.png",
     },
];

export default function ProjetosCarousel() {
     return (
          <section id="projects" className="py-16 max-w-full overflow-hidden">
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
