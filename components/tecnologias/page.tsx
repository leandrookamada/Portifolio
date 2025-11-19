"use client";

import React from "react";
// Não precisamos mais do 'Image' do Next.js para os ícones
// import Image from "next/image";
import {motion} from "framer-motion";

// Passo 1: Importar o CSS do Devicon
// (Lembre-se de instalar com 'npm install devicon' ou 'yarn add devicon')
import "devicon/devicon.min.css";

export default function Tecnologia() {
    // Passo 2: Atualizar a lista com as classes do Devicon
    // Em vez do nome do arquivo, usamos a classe CSS correspondente.
    const tech = [
        {
            nome: "HTML5",
            icon: "devicon-html5-plain-wordmark colored", // Adicionei 'colored' para manter a cor
            description: "Linguagem de marcação para estruturar páginas web e seus conteúdos.",
        },
        {
            nome: "CSS3",
            icon: "devicon-css3-plain-wordmark colored",
            description:
                "Linguagem de estilização usada para descrever a apresentação de um documento escrito em HTML.",
        },
        {
            nome: "C++",
            icon: "devicon-cplusplus-plain colored",
            description: "Linguagem de programação de alto desempenho, ideal para sistemas complexos e jogos.",
        },
        {
            nome: "JavaScript",
            icon: "devicon-javascript-plain colored",
            description: "Linguagem de programação que permite implementar itens complexos em páginas web.",
        },
        {
            nome: "Node.js",
            icon: "devicon-nodejs-plain colored",
            description:
                "Ambiente de execução JavaScript no lado do servidor, construindo aplicações de rede escaláveis.",
        },
        {
            nome: "TypeScript",
            icon: "devicon-typescript-plain colored",
            description: "Um superset do JavaScript que adiciona tipagem estática opcional ao código.",
        },
        {
            nome: "Tailwind CSS",
            icon: "devicon-tailwindcss-original colored", // Este já é colorido
            description: "Framework CSS utility-first para criar rapidamente interfaces de usuário customizadas.",
        },
        {
            nome: "Python",
            icon: "devicon-python-plain-wordmark colored",
            description:
                "Linguagem de alto nível, interpretada, usada para desenvolvimento web, ciência de dados e automação.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8">
            <h1 className="font-titulo text-5xl text-center drop-shadow-lg mb-16 tracking-wider">TECNOLOGIAS</h1>

            <ol className="relative timeline max-w-4xl flex flex-col gap-8">
                {tech.map((e, index) => (
                    <motion.li
                        key={e.nome}
                        className="relative mb-12 flex items-start"
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                    >
                        <div className="p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6 shadow-lg w-full max-w-2xl mx-auto">
                            {/* Passo 3: Substituir <Image> por <i> */}
                            {/* Usamos a classe do ícone e definimos um tamanho com 'font-size' */}
                            <div className="flex justify-center items-center text-5xl">
                                <i className={e.icon}></i>
                            </div>

                            <div>
                                <h3 className="font-titulo text-3xl font-bold">{e.nome}</h3>
                                <p className="font-subtitulo text-lg">{e.description}</p>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ol>
        </div>
    );
}
