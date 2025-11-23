"use client";

import React, { useState } from "react";

// =================================================================
// ⭐️ 1. INTERFACES E DADOS (Definidos no próprio componente)
// =================================================================

interface SkillItem {
     name: string;
     score: number; // 1 a 5
     level: string;
     description: string;
}

interface SkillRadarData {
     [category: string]: SkillItem[];
}

const skillRadarData: SkillRadarData = {
     "Frontend Core": [
          {
               name: "React/Next.js",
               score: 5,
               level: "Master",
               description:
                    "Desenvolvimento de aplicações escaláveis, Hooks, padrões de componentes.",
          },
          {
               name: "TypeScript",
               score: 4,
               level: "Avançado",
               description:
                    "Tipagem forte para código seguro e manutenção de projetos grandes.",
          },
          {
               name: "HTML/CSS/SASS",
               score: 4,
               level: "Avançado",
               description:
                    "Base sólida em responsividade, performance e pré-processadores CSS.",
          },
     ],
     "Backend & Lógica": [
          {
               name: "Python",
               score: 3,
               level: "Intermediário",
               description: "Foco em APIs, scripts e manipulação de dados.",
          },
          {
               name: "C / C++",
               score: 5,
               level: "Sólido (Fundamentos)",
               description:
                    "Base lógica e estrutural inegável para entender algoritmos.",
          },
          {
               name: "APIs REST",
               score: 3,
               level: "Em Expansão",
               description:
                    "Criação e consumo de endpoints, entendendo a arquitetura RESTful.",
          },
     ],
     "Ferramentas & Workflow": [
          {
               name: "Git/GitHub",
               score: 5,
               level: "Master",
               description:
                    "Controle de versão, *branching* e *merge requests* em equipe.",
          },
          {
               name: "Figma",
               score: 3,
               level: "Intermediário",
               description:
                    "Leitura de designs, prototipação básica e colaboração com UX.",
          },
          {
               name: "Tailwind CSS",
               score: 4,
               level: "Avançado",
               description:
                    "Desenvolvimento rápido de interfaces com utilitários.",
          },
     ],
};

// ⭐️ Cor de destaque que definimos para o estado ativo
const ACCENT_COLOR = "#3B82F6";

// =================================================================
// ⭐️ 2. COMPONENTE RADAR
// =================================================================

export default function SkillRadar() {
     // ➡️ Estado para rastrear a skill que o usuário está olhando
     const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

     return (
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl text-left p-4">
               {/* 1. MAPA DE HABILIDADES (ESQUERDA) */}
               <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4 text-white">
                         Mapa de Proficiência
                    </h3>

                    {Object.entries(skillRadarData).map(
                         ([category, skills]) => (
                              <div key={category} className="mb-6">
                                   <h4 className="text-lg font-medium text-gray-400 mb-2 border-b border-gray-700 pb-1">
                                        {category}
                                   </h4>

                                   <div className="space-y-3">
                                        {skills.map((skill) => (
                                             <div
                                                  key={skill.name}
                                                  className="cursor-pointer"
                                                  // ⭐️ O evento 'onMouseEnter' deve atualizar o estado 'activeSkill'
                                                  onMouseEnter={() =>
                                                       setActiveSkill(skill)
                                                  }
                                                  // ⭐️ O evento 'onMouseLeave' deve limpar o estado
                                                  onMouseLeave={() =>
                                                       setActiveSkill(null)
                                                  }
                                             >
                                                  <div className="flex justify-between items-center mb-1">
                                                       <span
                                                            className={`text-base font-medium ${activeSkill?.name === skill.name ? "text-white" : "text-gray-300"}`}
                                                       >
                                                            {skill.name}
                                                       </span>
                                                       <span className="text-sm text-gray-500">
                                                            {skill.level}
                                                       </span>
                                                  </div>

                                                  {/* ⭐️ BARRA DE PROFICIÊNCIA VISUAL */}
                                                  <div className="w-full bg-gray-700 rounded-full h-2">
                                                       <div
                                                            className="h-2 rounded-full transition-all duration-500"
                                                            style={{
                                                                 width: `${skill.score * 20}%`, // 5/5 = 100%
                                                                 backgroundColor:
                                                                      ACCENT_COLOR,
                                                            }}
                                                       ></div>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         )
                    )}
               </div>

               {/* 2. DETALHE DA HABILIDADE (DIREITA) */}
               <div className="md:w-1/2 bg-gray-800 p-6 rounded-lg border border-gray-700 self-start sticky top-4">
                    <h3
                         className="text-xl font-semibold mb-3"
                         style={{ color: ACCENT_COLOR }}
                    >
                         {activeSkill
                              ? activeSkill.name
                              : "Passe o mouse para detalhar"}
                    </h3>

                    {activeSkill ? (
                         <>
                              <p className="text-gray-300 mb-4">
                                   {activeSkill.description}
                              </p>
                              <div className="mt-4">
                                   <span className="text-sm font-bold text-gray-500 mr-2">
                                        Nível de Domínio:
                                   </span>
                                   <span
                                        className="text-base font-bold"
                                        style={{ color: ACCENT_COLOR }}
                                   >
                                        {activeSkill.level}
                                   </span>
                              </div>
                         </>
                    ) : (
                         <p className="text-gray-500">
                              Esta seção detalha minhas habilidades técnicas.
                              Interaja com as barras à esquerda para ver o
                              contexto e o nível de domínio de cada tecnologia.
                         </p>
                    )}
               </div>
          </div>
     );
}
