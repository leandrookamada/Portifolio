"use client";

import React, { useState } from "react";

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
     "Segurança & Automação": [
          {
               name: "Python (Automação/Scripts)",
               score: 4,
               level: "Avançado",
               description:
                    "Desenvolvimento de scripts para automação de processos, manipulação de dados e criação de ferramentas de segurança.",
          },
          {
               name: "SQL / Análise de Dados",
               score: 3,
               level: "Intermediário",
               description:
                    "Consultas complexas, análise de dados e otimização de queries para dashboards e relatórios.",
          },
          {
               name: "Burp Suite / OWASP Top 10",
               score: 2,
               level: "Fundamentos",
               description:
                    "Conhecimento das principais vulnerabilidades web e uso de ferramentas para testes de segurança de aplicações.",
          },
          {
               name: "Linux / Bash",
               score: 3,
               level: "Intermediário",
               description:
                    "Administração de sistemas Linux, automação via shell scripts e troubleshooting de ambientes.",
          },
     ],
     "Web & Visualização de Dados": [
          {
               name: "React/Next.js (Dashboards)",
               score: 4,
               level: "Avançado",
               description:
                    "Desenvolvimento de dashboards interativos e aplicações web escaláveis com foco em visualização de dados.",
          },
          {
               name: "TypeScript",
               score: 3,
               level: "Intermediário",
               description:
                    "Tipagem forte para código seguro e manutenção de projetos grandes.",
          },
          {
               name: "Power BI / Visualização",
               score: 3,
               level: "Intermediário",
               description:
                    "Criação de dashboards de gestão e relatórios visuais para análise de dados e tomada de decisões.",
          },
          {
               name: "HTML/CSS/SASS",
               score: 5,
               level: "Master",
               description:
                    "Base sólida em responsividade, performance e pré-processadores CSS.",
          },
     ],
     Ferramentas: [
          {
               name: "Git/GitHub",
               score: 5,
               level: "Master",
               description:
                    "Controle de versão, *branching* e *merge requests* em equipe.",
          },
          {
               name: "Docker",
               score: 2,
               level: "Básico",
               description:
                    "Containerização de aplicações e gerenciamento básico de ambientes.",
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

const ACCENT_COLOR = "#3B82F6";

export default function SkillRadar() {
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
                                                  onMouseEnter={() =>
                                                       setActiveSkill(skill)
                                                  }
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
                         ),
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
