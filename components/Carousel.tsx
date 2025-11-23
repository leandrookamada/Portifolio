"use client";

import { useEffect, useState, useRef } from "react";
import { motion, PanInfo, useMotionValue } from "motion/react";
import React, { JSX } from "react";

// replace icons with your own if needed
import {
     FiCircle,
     FiCode,
     FiFileText,
     FiLayers,
     FiLayout,
} from "react-icons/fi";
export interface CarouselItem {
     title: string;
     description: string;
     id: number;
     icon: React.ReactNode;
     url?: string; // URL do site (abre em nova aba ao clicar)
     image?: string; // Caminho da imagem/screenshot do projeto
     technologies?: string[]; // Tecnologias usadas
}

export interface CarouselProps {
     items?: CarouselItem[];
     baseWidth?: number;
     autoplay?: boolean;
     autoplayDelay?: number;
     pauseOnHover?: boolean;
     loop?: boolean;
     round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
     {
          title: "Site Institucional, Grupo Sudeste Banzai",
          description: `Esta seção mostra o que o sistema faz e por que ele é importante.

<b>Gestão Centralizada de Conteúdo:</b> O sistema possui uma Área Administrativa robusta protegida por login. Usuários autorizados podem cadastrar, editar e desativar produtos dinamicamente, gerindo todo o catálogo de forma eficiente.
<b>Módulos de Relacionamento (B2B):</b> Permite o cadastro de depoimentos de empresas parceiras, fortalecendo a credibilidade e a relação B2B. Inclui também funcionalidades para gerenciar links úteis e recursos de apoio.
<b>Flexibilidade de Catálogo:</b> O sistema suporta a alteração dinâmica de kits de produtos, permitindo que a empresa ajuste suas ofertas rapidamente sem depender de desenvolvimento externo.
<b>Experiência de Usuário (UX):</b> A interface foi desenhada para ser intuitiva, garantindo que a navegação e a busca por produtos sejam fluidas tanto para a equipe interna quanto para parceiros externos (onde aplicável).`,
          id: 1,
          icon: <FiLayout className="h-4 w-4 text-white" />,
          url: "https://gruposudestebanzai.com.br/",
          image: "/image/site-sudeste.png",
          technologies: ["React", "TypeScript", "Next.js", "TailwindCSS"],
     },
     {
          title: "Portal da Transparência",
          description: `Participei do desenvolvimento de um Portal de Transparência customizado, com o objetivo principal de fornecer aos cidadãos acesso claro, organizado e em tempo real a informações governamentais, cumprindo integralmente as exigências legais de Transparência Pública.
               Esta seção mostra como o projeto agrega valor à administração pública e à sociedade:
<b>Acesso e Governança:</b> O portal atua como um hub central para dados cruciais, como relatórios financeiros, informações sobre receitas, despesas, contratos, licitações e folha de pagamento. A arquitetura de interface foi planejada para garantir a facilidade de busca e navegação para o público leigo.
<b>Integridade dos Dados:</b> O projeto exigiu a criação de um sistema robusto para importação e consolidação de dados de diferentes fontes da administração pública. Minha atuação garantiu que os dados apresentados fossem sempre atuais e refletissem com precisão a situação fiscal e administrativa.
<b>Relatórios Dinâmicos:</b> Implementei recursos para a geração de relatórios e filtros dinâmicos, permitindo que o usuário customize a visualização dos dados (por período, setor ou tipo de gasto), transformando dados brutos em informação acionável.`,
          id: 2,
          icon: <FiCode className="h-4 w-4 text-white" />,
          url: "https://portal-da-transparencia-one.vercel.app",
          image: "/image/portal-da-transparencia.png",
          technologies: [
               "Vue",
               "TypeScript",
               "TailwindCSS",
               "Python",
               "Lambda AWS",
               "DuckDB",
          ],
     },
     {
          title: "Triade Tech",
          description: `Desenvolvi o website e a plataforma inicial da Triade Tech, uma empresa focada em [Insira o Foco da Empresa, ex: soluções de software personalizadas / consultoria em dados / desenvolvimento full-stack]. O projeto visa estabelecer uma presença digital sólida, apresentar os serviços da empresa e servir como o ponto de partida para futuras integrações de gestão de clientes e projetos.
          
          Esta seção destaca o papel do site para os objetivos de negócio da Triade Tech:
     <b>Identidade Digital e Credibilidade:</b> A arquitetura e o design foram criados para refletir os valores da marca (ex: Inovação, Confiança, Eficiência). O site funciona como a principal ferramenta de aquisição de clientes, comunicando claramente o escopo dos serviços oferecidos.
     <b>Escalabilidade Planejada:</b> O design da interface e a arquitetura do código foram construídos com a futura expansão em mente, permitindo fácil integração de módulos avançados (ex: Área do Cliente, Portal de Suporte, Painel de Gestão de Projetos) sem a necessidade de reestruturação completa.
     <b>Comunicação de Valor:</b> A estrutura de conteúdo (serviços, projetos e case studies) foi otimizada para guiar o potencial cliente através do funil de vendas, demonstrando a competência e a experiência da Triade Tech em projetos complexos.`,
          id: 3,
          icon: <FiFileText className="h-4 w-4 text-white" />,
          url: "https://www.triadetech.store/",
          image: "/image/triade-tech.png",
          technologies: [
               "React",
               "TypeScript",
               "TailwindCSS",
               "Framer Motion",
               "Next.js",
               "MDX",
          ],
     },
     {
          title: "Em desenvolvimento: Sistema de análise esportiva",
          description: `Desenvolvi uma plataforma de análise profissional em tempo real focada em estatísticas esportivas. O objetivo principal é fornecer dados detalhados e previsões de resultados com alta taxa de acerto, auxiliando usuários a tomar decisões informadas em eventos esportivos.
          \n<b>Funcionalidade Central:</b> O sistema recebe grandes volumes de dados de jogos por meio de APIs externas, processa e analisa o comportamento das equipes em tempo real, gerando um resultado esperado e estatísticas detalhadas para ligas e competições.
          \n<b>Backend/Lógica:</b> O backend está em fase de implementação, onde sou responsável pela arquitetura de processamento e análise dos dados em Python, garantindo a precisão das previsões e a entrega de métricas como Média de Gols e Taxa de Acerto.`,
          id: 4,
          icon: <FiLayers className="h-4 w-4 text-white" />,
          url: "https://seu-site-3.com",
          image: "/image/analise.png",
          technologies: [
               "React",
               "TypeScript",
               "TailwindCSS",
               "Framer Motion",
               "Python",
               "Pandas",
          ],
     },
     {
          title: "Em desenvolivmento: FitMind+ ",
          description: `FitMind+, um aplicativo focado em saúde e desenvolvimento pessoal. A plataforma transforma a jornada de fitness por meio da personalização e da gamificação.

          <b>Funcionalidade Central (IA):</b> O sistema coleta dados detalhados do usuário (anamnese: Dados Pessoais, Objetivos, Treino, etc.) e utiliza a lógica de programação para gerar planos de treino e dietas totalmente personalizados e otimizados, simulando a funcionalidade de uma IA.

          <b>Sua Contribuição (Backend/Lógica):</b> Fui responsável pela criação do backend em Python, desenvolvendo a lógica robusta que processa as informações da anamnese e gera o plano personalizado.

          <b>Funções Adicionais:</b> O aplicativo oferece módulos avançados, como análise de desenvolvimento pessoal, recursos de gamificação e a capacidade de criação de grupos de amigos para motivar o processo e acompanhar o progresso.`,
          id: 5,
          icon: <FiCircle className="h-4 w-4 text-white" />,
          url: "https://seu-site-5.com",
          image: "/image/saude.png",
          technologies: [
               "React",
               "TypeScript",
               "TailwindCSS",
               "Python",
               "GEMINI2.5-flash",
          ],
     },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function Carousel({
     items = DEFAULT_ITEMS,
     baseWidth = 300,
     autoplay = false,
     autoplayDelay = 3000,
     pauseOnHover = false,
     loop = false,
     round = false,
}: CarouselProps): JSX.Element {
     const containerPadding = 16;
     const itemWidth = baseWidth - containerPadding * 2;
     const trackItemOffset = itemWidth + GAP;

     const carouselItems = loop ? [...items, items[0]] : items;
     const [currentIndex, setCurrentIndex] = useState<number>(0);
     const x = useMotionValue(0);
     const [isHovered, setIsHovered] = useState<boolean>(false);
     const [isResetting, setIsResetting] = useState<boolean>(false);

     const containerRef = useRef<HTMLDivElement>(null);
     useEffect(() => {
          if (pauseOnHover && containerRef.current) {
               const container = containerRef.current;
               const handleMouseEnter = () => setIsHovered(true);
               const handleMouseLeave = () => setIsHovered(false);
               container.addEventListener("mouseenter", handleMouseEnter);
               container.addEventListener("mouseleave", handleMouseLeave);
               return () => {
                    container.removeEventListener(
                         "mouseenter",
                         handleMouseEnter
                    );
                    container.removeEventListener(
                         "mouseleave",
                         handleMouseLeave
                    );
               };
          }
     }, [pauseOnHover]);

     useEffect(() => {
          if (autoplay && (!pauseOnHover || !isHovered)) {
               const timer = setInterval(() => {
                    setCurrentIndex((prev) => {
                         if (prev === items.length - 1 && loop) {
                              return prev + 1;
                         }
                         if (prev === carouselItems.length - 1) {
                              return loop ? 0 : prev;
                         }
                         return prev + 1;
                    });
               }, autoplayDelay);
               return () => clearInterval(timer);
          }
     }, [
          autoplay,
          autoplayDelay,
          isHovered,
          loop,
          items.length,
          carouselItems.length,
          pauseOnHover,
     ]);

     const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

     const handleAnimationComplete = () => {
          if (loop && currentIndex === carouselItems.length - 1) {
               setIsResetting(true);
               x.set(0);
               setCurrentIndex(0);
               setTimeout(() => setIsResetting(false), 50);
          }
     };

     const handleDragEnd = (
          _: MouseEvent | TouchEvent | PointerEvent,
          info: PanInfo
     ): void => {
          const offset = info.offset.x;
          const velocity = info.velocity.x;
          if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
               if (loop && currentIndex === items.length - 1) {
                    setCurrentIndex(currentIndex + 1);
               } else {
                    setCurrentIndex((prev) =>
                         Math.min(prev + 1, carouselItems.length - 1)
                    );
               }
          } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
               if (loop && currentIndex === 0) {
                    setCurrentIndex(items.length - 1);
               } else {
                    setCurrentIndex((prev) => Math.max(prev - 1, 0));
               }
          }
     };

     const dragProps = loop
          ? {}
          : {
                 dragConstraints: {
                      left: -trackItemOffset * (carouselItems.length - 1),
                      right: 0,
                 },
            };

     return (
          <div
               ref={containerRef}
               className={`relative overflow-hidden p-4 ${
                    round
                         ? "rounded-full border border-white"
                         : "rounded-3xl border border-[#222]"
               }`}
               style={{
                    width: `${baseWidth}px`,
                    ...(round && { height: `${baseWidth}px` }),
                    height: "100%",
               }}
          >
               <motion.div
                    className="flex"
                    drag="x"
                    {...dragProps}
                    style={{
                         width: itemWidth,
                         height: "95%",
                         gap: `${GAP}px`,
                         perspective: 1000,
                         perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                         x,
                    }}
                    onDragEnd={handleDragEnd}
                    animate={{ x: -(currentIndex * trackItemOffset) }}
                    transition={effectiveTransition}
                    onAnimationComplete={handleAnimationComplete}
               >
                    {carouselItems.map((item, index) => {
                         const handleVisitClick = (e: React.MouseEvent) => {
                              e.stopPropagation();
                              if (item.url) {
                                   window.open(
                                        item.url,
                                        "_blank",
                                        "noopener,noreferrer"
                                   );
                              }
                         };

                         return (
                              <motion.div
                                   key={index}
                                   className={`relative shrink-0 flex flex-col ${
                                        round
                                             ? "items-center justify-center text-center bg-[#060010] border-0"
                                             : "items-start bg-[#222] border border-[#222] rounded-xl"
                                   } overflow-hidden cursor-grab active:cursor-grabbing group`}
                                   style={{
                                        width: itemWidth,
                                        height: "",
                                        ...(round && { borderRadius: "50%" }),
                                   }}
                                   transition={effectiveTransition}
                              >
                                   {/* Preview com imagem do projeto */}
                                   {item.image && !round && (
                                        <div
                                             className="relative w-full min-h-100 overflow-hidden border-b-2 border-gray-700 bg-cover bg-center bg-no-repeat hover:scale-110 transition-transform duration-300 group/image"
                                             style={{
                                                  backgroundImage: `url(${item.image})`,
                                             }}
                                        >
                                             {item.url && (
                                                  <div className="absolute inset-0 bg-opacity-0 group-hover/image:bg-opacity-50 transition-all duration-300 flex items-center justify-center z-10">
                                                       <span className="text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                                                            Ver Projeto →
                                                       </span>
                                                  </div>
                                             )}
                                        </div>
                                   )}

                                   <div className="flex-1 flex flex-col justify-between w-full p-5">
                                        <div>
                                             {!item.image && !item.url && (
                                                  <div className="mb-4">
                                                       <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#060010]">
                                                            {item.icon}
                                                       </span>
                                                  </div>
                                             )}
                                             <div className="mb-2 font-black text-lg text-white">
                                                  {item.title}
                                             </div>
                                             <div
                                                  className="text-sm text-gray-300 mb-3 whitespace-pre-line"
                                                  dangerouslySetInnerHTML={{
                                                       __html: item.description,
                                                  }}
                                             />
                                             {item.technologies &&
                                                  item.technologies.length >
                                                       0 && (
                                                       <div className="flex flex-wrap gap-2 mb-4">
                                                            {item.technologies.map(
                                                                 (tech, i) => (
                                                                      <span
                                                                           key={
                                                                                i
                                                                           }
                                                                           className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                                                                      >
                                                                           {
                                                                                tech
                                                                           }
                                                                      </span>
                                                                 )
                                                            )}
                                                       </div>
                                                  )}
                                        </div>

                                        {/* Botão Visitar Site */}
                                        {item.url && (
                                             <button
                                                  onClick={handleVisitClick}
                                                  className="w-full mt-auto py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                                             >
                                                  Visitar Site
                                                  <svg
                                                       className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                                                       fill="none"
                                                       stroke="currentColor"
                                                       viewBox="0 0 24 24"
                                                  >
                                                       <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                       />
                                                  </svg>
                                             </button>
                                        )}
                                   </div>
                              </motion.div>
                         );
                    })}
               </motion.div>
               <div
                    className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""}`}
               >
                    <div className="mt-4 flex w-[150px] justify-between px-8">
                         {items.map((_, index) => (
                              <motion.div
                                   key={index}
                                   className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                                        currentIndex % items.length === index
                                             ? round
                                                  ? "bg-white"
                                                  : "bg-[#333333]"
                                             : round
                                               ? "bg-[#555]"
                                               : "bg-[rgba(51,51,51,0.4)]"
                                   }`}
                                   animate={{
                                        scale:
                                             currentIndex % items.length ===
                                             index
                                                  ? 1.2
                                                  : 1,
                                   }}
                                   onClick={() => setCurrentIndex(index)}
                                   transition={{ duration: 0.15 }}
                              />
                         ))}
                    </div>
               </div>
          </div>
     );
}
