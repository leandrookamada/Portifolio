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

                    <div style={{ height: "40em", position: "static" }}>
                         <Carousel
                              baseWidth={800}
                              autoplay={true}
                              autoplayDelay={3000}
                              pauseOnHover={true}
                              loop={true}
                              round={false}
                         />
                    </div>
                    {/*<div className="relative max-w-full">
                         <Swiper
                              // Módulos que vamos usar
                              modules={[Autoplay, Pagination]}
                              // Configurações do Carrossel
                              spaceBetween={20} // Reduzido o espaço entre slides
                              slidesPerView={2.5} // Ajustado para mostrar 2.5 slides por vez
                              centeredSlides={false} // Centraliza os slides
                              loop={true} // Habilita o loop infinito
                              autoplay={{
                                   delay: 2500, // Tempo em ms para trocar de slide
                                   disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
                              }}
                              pagination={{
                                   clickable: true, // Permite clicar nas bolinhas de paginação
                              }}
                              breakpoints={{
                                   // Quando a tela for menor que 640px
                                   320: {
                                        slidesPerView: 1,
                                        spaceBetween: 15,
                                   },
                                   // Quando a tela for maior ou igual a 768px
                                   768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                   },
                                   // Quando a tela for maior ou igual a 1024px
                                   1024: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 20,
                                   },
                              }}
                              className="projects-swiper w-full pb-12" // Classe específica para este swiper
                         >
                              {projetos.map((projeto, index) => (
                                   <SwiperSlide key={index}>
                                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 h-64 flex flex-col justify-center items-center text-center">
                                             <h3 className="text-2xl font-bold text-white mb-2">
                                                  {projeto.nome}
                                             </h3>
                                             <p className="text-gray-400">
                                                  {projeto.descricao}
                                             </p>
                                        </div>
                                   </SwiperSlide>
                              ))}
                         </Swiper>
                    </div>*/}
               </div>
          </section>
     );
}
