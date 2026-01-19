"use client";

import { useState } from "react";
import Image from "next/image";
import {
     Home,
     User,
     Code,
     FolderGit2,
     Github,
     Linkedin,
     Instagram,
     Menu,
     X,
} from "lucide-react";
import { personalData } from "../../lib/data";

const navLinks = [
     { name: "Início", href: "#home", icon: Home },
     { name: "Sobre", href: "#about", icon: User },
     { name: "Habilidades", href: "#skills", icon: Code },
     { name: "Projetos", href: "#projects", icon: FolderGit2 },
];

const socialLinks = [
     {
          name: "GitHub",
          href: personalData.socialLinks.github,
          icon: Github,
          color: "hover:text-gray-400",
     },
     {
          name: "LinkedIn",
          href: personalData.socialLinks.linkedin,
          icon: Linkedin,
          color: "hover:text-blue-500",
     },
     {
          name: "Instagram",
          href: personalData.socialLinks.instagram,
          icon: Instagram,
          color: "hover:text-pink-500",
     },
];

export default function Sidebar() {
     const [isOpen, setIsOpen] = useState(false);

     const toggleSidebar = () => {
          setIsOpen(!isOpen);
     };

     const closeSidebar = () => {
          setIsOpen(false);
     };

     return (
          <>
               {/* Botão Menu Mobile */}
               <button
                    onClick={toggleSidebar}
                    className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors shadow-lg"
                    aria-label="Toggle menu"
               >
                    {isOpen ? (
                         <X className="w-6 h-6" />
                    ) : (
                         <Menu className="w-6 h-6" />
                    )}
               </button>

               {/* Overlay para fechar sidebar no mobile */}
               {isOpen && (
                    <div
                         className="lg:hidden fixed inset-0 bg-black/50 z-30"
                         onClick={closeSidebar}
                    />
               )}

               {/* Sidebar */}
               <aside
                    className={`
                         w-80 h-screen fixed top-0 left-0 bg-gray-800 p-8 
                         flex flex-col items-center justify-center text-center shadow-lg z-40
                         transition-transform duration-300 ease-in-out
                         overflow-y-auto
                         ${isOpen ? "translate-x-0" : "-translate-x-full"}
                         lg:translate-x-0
                    `}
               >
                    <div className="mb-8 text-center flex items-center flex-col gap-3">
                         <Image
                              src="/image/perfil.jpeg"
                              alt="Foto de Perfil"
                              width={128}
                              height={128}
                              className="rounded-full mx-auto mb-4 border-4 border-gray-600"
                         />
                         <h1 className="text-2xl font-bold">
                              {personalData.name}
                         </h1>
                         <p className="text-gray-400">{personalData.role}</p>
                    </div>

                    <nav className="mt-12 flex flex-col gap-2 w-full">
                         {navLinks.map((link) => (
                              <div
                                   key={link.name}
                                   className="flex justify-center items-start"
                              >
                                   <a
                                        href={link.href}
                                        onClick={closeSidebar}
                                        className="flex items-center w-[60%] h-8 p-3 gap-4 text-lg text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-300"
                                   >
                                        <link.icon className="w-6 h-6" />
                                        <span>{link.name}</span>
                                   </a>
                              </div>
                         ))}
                    </nav>

                    {/* Redes Sociais */}
                    <div className="mt-auto pt-8 flex gap-4 justify-center">
                         {socialLinks.map((social) => (
                              <a
                                   key={social.name}
                                   href={social.href}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className={`text-gray-400 transition-all duration-300 ${social.color} hover:scale-110`}
                                   aria-label={social.name}
                              >
                                   <social.icon className="w-6 h-6" />
                              </a>
                         ))}
                    </div>
               </aside>
          </>
     );
}
