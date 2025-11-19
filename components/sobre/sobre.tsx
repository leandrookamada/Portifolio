"use client";

import { motion } from "framer-motion";
import { personalData } from "../../lib/data";
import { Linkedin, Github, Twitter } from "lucide-react";

export default function About() {
     return (
          <section
               id="about"
               className="min-h-screen flex flex-col justify-center items-center  text-center py-20"
          >
               <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl flex flex-col gap-4"
               >
                    <h2 className="text-4xl font-bold mb-8">Sobre Mim</h2>
                    <p className="text-lg text-gray-300 mb-8 ">
                         {personalData.description}
                    </p>
                    <div className="flex justify-center gap-8">
                         <a
                              href={personalData.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors duration-300"
                         >
                              <Linkedin size={32} />
                         </a>
                         <a
                              href={personalData.socialLinks.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors duration-300"
                         >
                              <Github size={32} />
                         </a>
                         <a
                              href={personalData.socialLinks.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-white transition-colors duration-300"
                         >
                              <Twitter size={32} />
                         </a>
                    </div>
               </motion.div>
          </section>
     );
}
