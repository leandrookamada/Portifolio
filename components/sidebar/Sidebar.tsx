"use client";

import Image from "next/image";
import { Home, User, Code, FolderGit2, Mail } from "lucide-react";
import { personalData } from "../../lib/data";

const navLinks = [
     { name: "Início", href: "#home", icon: Home },
     { name: "Sobre", href: "#about", icon: User },
     { name: "Habilidades", href: "#skills", icon: Code },
     { name: "Projetos", href: "#projects", icon: FolderGit2 },
     { name: "Contato", href: "#contact", icon: Mail },
];

export default function Sidebar() {
     return (
          <aside className="w-100 h-screen fixed top-0 left-0 bg-gray-800 p-8 flex flex-col items-center justify-center text-center shadow-lg">
               <div className="mb-8 text-center flex items-center flex-col gap-3 ">
                    <Image
                         src="/image/perfil.jpeg"
                         alt="Foto de Perfil"
                         width={128}
                         height={128}
                         className="rounded-full mx-auto mb-4 border-4  border-gray-600"
                    />
                    <h1 className="text-2xl font-bold">{personalData.name}</h1>
                    <p className="text-gray-400">{personalData.role}</p>
               </div>
               <nav className="mt-12 flex flex-col  gap-2 w-full">
                    {navLinks.map((link) => (
                         <div
                              key={link.name}
                              className=" flex justify-center   items-start "
                         >
                              <a
                                   href={link.href}
                                   className="flex items-center w-[60%] h-[32px] p-3 gap-4 text-lg text-gray-300 hover:text-white hover:bg-gray-700  rounded-lg transition-colors duration-300"
                              >
                                   <link.icon className="w-6 h-6" />
                                   <span>{link.name}</span>
                              </a>
                         </div>
                    ))}
               </nav>
          </aside>
     );
}
