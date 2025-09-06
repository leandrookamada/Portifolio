"use client";

import React from "react";
import Image from "next/image";
// A importação correta para o que vamos fazer:
import {motion} from "framer-motion";

export default function Tecnologia() {
    const tech = [
        {
            nome: "HTML5",
            icon: "html5.svg",
            description: "Linguagem de marcação para estruturar páginas web e seus conteúdos.",
        },
        {
            nome: "CSS3",
            icon: "css.svg",
            description:
                "Linguagem de estilização usada para descrever a apresentação de um documento escrito em HTML.",
        },
        {
            nome: "C++",
            icon: "cplusplus.svg",
            description: "Linguagem de programação de alto desempenho, ideal para sistemas complexos e jogos.",
        },
        {
            nome: "JavaScript",
            icon: "javascript.svg",
            description: "Linguagem de programação que permite implementar itens complexos em páginas web.",
        },
        {
            nome: "Node.js",
            icon: "nodedotjs.svg",
            description:
                "Ambiente de execução JavaScript no lado do servidor, construindo aplicações de rede escaláveis.",
        },
        {
            nome: "TypeScript",
            icon: "typescript.svg",
            description: "Um superset do JavaScript que adiciona tipagem estática opcional ao código.",
        },
        {
            nome: "Tailwind CSS",
            icon: "tailwindcss.svg",
            description: "Framework CSS utility-first para criar rapidamente interfaces de usuário customizadas.",
        },
        {
            nome: "Python",
            icon: "python.svg",
            description:
                "Linguagem de alto nível, interpretada, usada para desenvolvimento web, ciência de dados e automação.",
        },
    ];

    return (
        // 1. CONTAINER CORRIGIDO: Usando padding para espaçamento
        <div className="py-24 px-4 sm:px-8">
            <h2 className="text-5xl font-titulo text-center text-white mb-16 tracking-wider">TECNOLOGIAS</h2>

            <ol className="relative timeline max-w-4xl mx-auto">
                {tech.map((e, index) => (
                    // 5. ANIMAÇÃO: Substituímos 'li' por 'motion.li'
                    <motion.li
                        key={e.nome}
                        className="relative mb-16 flex items-start gap-8"
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                    >
                        {/* 2. CÍRCULO RECRIADO AQUI */}
                        <div className="z-10 flex-shrink-0 bg-gray-700 p-2 rounded-full border-2 border-blue-500">
                            <Image src={`/linguagens/${e.icon}`} alt={`Logo ${e.nome}`} width={45} height={45} />
                        </div>

                        {/* 3. BALÃO DE CONTEÚDO CORRIGIDO */}
                        <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full">
                            {/* 4. FONTES APLICADAS */}
                            <h3 className="font-titulo text-3xl font-semibold text-blue-400 tracking-wide">{e.nome}</h3>
                            <p className="mt-3 font-subtitulo text-gray-300 text-lg">{e.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ol>
        </div>
    );
}
