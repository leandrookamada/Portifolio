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
               "Minha jornada de desenvolvimento começou com a criação de interfaces sólidas usando HTML e CSS. Rapidamente fiz o salto para o React**, onde pude adotar uma abordagem de desenvolvimento baseada em componentes, focando na reusabilidade e na criação de Sites Institucionais dinâmicos e de alta performance.",
     },
     {
          id: 2,
          title: "Especialização: TypeScript e Next.js",
          description:
               "A minha especialização está em construir aplicações front-end escaláveis usando React e Next.js para otimizar o desempenho e a SEO. Escolhi o TypeScript para garantir a robustez e a escalabilidade dos projetos. Ele me permite detectar erros em tempo de desenvolvimento, tornando o código mais seguro e facilitando a manutenção em equipe.",
     },
     // ⭐️ NOVA ABA (ID 3): Foco em ferramentas, metodologias e tecnologias principais
     {
          id: 3,
          title: "Ferramentas e Stack Principal",
          description:
               "No Front-end, utilizo principalmente React, Next.js e TypeScript. Para design e prototipação, tenho familiaridade com o Figma. No fluxo de trabalho, aplico o controle de versão com Git/GitHub e busco me adequar às práticas de desenvolvimento ágil.",
     },
     {
          id: 4,
          title: "Desenvolvimento Backend e Fundamentos",
          description:
               "Busco aprofundamento na área de Backend. Comecei com C, o que me deu uma base sólida em lógica. Atualmente, foco em Python para desenvolvimento de projetos, mantendo o C++ para estudos. Sou motivado a explorar a criação de APIs REST e sistemas de gerenciamento de dados.",
     },
     {
          id: 5,
          title: "Soft Skills e Próximos Passos",
          description:
               "Sou uma pessoa com fácil comunicação e aprendizado rápido. Minha motivação é o desenvolvimento contínuo por meio de estudos e vivência prática. Meu objetivo profissional é migrar integralmente para o Backend, buscando oportunidades na área de Dados ou como Desenvolvedor Backend.",
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
