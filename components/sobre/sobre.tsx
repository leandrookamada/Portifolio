"use client";

import { motion } from "framer-motion";
import { personalData } from "../../lib/data";
import { Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

const portifolioData = [
     {
          id: 1,
          title: "A Base e o Salto para o React",
          description:
               "Minha jornada começou no desenvolvimento Web (React/Next.js), o que me deu uma base sólida para entender a arquitetura de aplicações modernas. Hoje, utilizo esse conhecimento para atuar na outra ponta: Segurança da Informação (AppSec) e Automação.\n\nComo estudante de Engenharia da Computação, combino minha habilidade de codificação para criar scripts em Python que automatizam processos manuais e minha visão analítica para desenvolver Dashboards de Gestão, unindo técnica à eficiência operacional.",
     },
     {
          id: 2,
          title: "Especialização: TypeScript e Next.js",
          description:
               "A minha especialização está em construir aplicações front-end escaláveis usando React e Next.js para otimizar o desempenho e a SEO. Escolhi o TypeScript para garantir a robustez e a escalabilidade dos projetos. Ele me permite detectar erros em tempo de desenvolvimento, tornando o código mais seguro e facilitando a manutenção em equipe.",
     },
     {
          id: 3,
          title: "Ferramentas e Stack Principal",
          description:
               "No Front-end, utilizo principalmente React, Next.js e TypeScript. Para design e prototipação, tenho familiaridade com o Figma. No fluxo de trabalho, aplico o controle de versão com Git/GitHub e busco me adequar às práticas de desenvolvimento ágil.",
     },
     {
          id: 4,
          title: "Segurança da Informação (AppSec)",
          description:
               "Meu foco atual está em Segurança de Aplicações (AppSec), onde aplico conhecimentos do OWASP Top 10 para identificar e mitigar vulnerabilidades em aplicações web. Utilizo ferramentas como Burp Suite para testes de segurança, análise de vulnerabilidades e pentesting. Além disso, desenvolvo automações em Python para processos de segurança, criação de scripts para análise de logs e detecção de anomalias, unindo desenvolvimento e segurança ofensiva.",
     },
     {
          id: 5,
          title: "Objetivo Profissional",
          description:
               "Sou uma pessoa com fácil comunicação e aprendizado rápido. Minha motivação é o desenvolvimento contínuo por meio de estudos e vivência prática. Busco oportunidades que integrem Segurança da Informação, Automação e Análise de Dados, onde possa aplicar tanto minha base técnica em desenvolvimento quanto minha paixão por proteger sistemas e otimizar processos através de código.",
     },
];

export default function About() {
     const [activeTab, setActiveTab] = useState(portifolioData[0].id);
     const handlerTabItem = (id: number) => {
          setActiveTab(id);
     };
     const activeItem = portifolioData.find((item) => item.id === activeTab);
     return (
          <section
               id="about"
               className="min-h-screen flex flex-col justify-center items-center text-center py-10 px-2 sm:px-4"
          >
               <section className="w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto h-full min-h-[15em] shadow-2xl shadow-gray-900 bg-gray-900 rounded-xl overflow-hidden">
                    {/* ARÉA DE TÍTULOS */}
                    <div className="flex flex-wrap gap-2 bg-azul justify-center items-center rounded-t-2xl border-white px-2 sm:px-4 py-2">
                         {portifolioData.map((item) => (
                              <button
                                   key={item.id}
                                   onClick={() => handlerTabItem(item.id)}
                                   className="hover:bg-azulMedio p-2 sm:p-3 text-xs sm:text-base rounded transition-colors"
                                   style={{
                                        minWidth: "120px",
                                        wordBreak: "break-word",
                                   }}
                              >
                                   {item.title}
                              </button>
                         ))}
                    </div>
                    {/* ARÉA DE DESCRIÇÃO */}
                    <div className="flex justify-center items-center px-2 sm:px-6 py-4">
                         {activeItem && (
                              <motion.p
                                   key={activeItem.id}
                                   initial={{ opacity: 0, y: 10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.3 }}
                                   className="text-base sm:text-lg text-gray-300 whitespace-pre-wrap text-left sm:text-center"
                              >
                                   {activeItem.description}
                              </motion.p>
                         )}
                    </div>
               </section>
          </section>
     );
}
