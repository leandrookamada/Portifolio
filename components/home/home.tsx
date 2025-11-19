"use client";

import { motion } from "framer-motion";
import { personalData } from "../../lib/data";
import TextType from "../blocks/TextAnimations/TextType/TextType";

export default function Home() {
     return (
          <section
               id="home"
               className="min-h-screen flex flex-col justify-center items-center text-center"
          >
               <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
               >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                         {personalData.name}
                    </h1>
                    <TextType
                         text={[
                              personalData.role,
                              "Apaixonado por tecnologia",
                              "Criando o futuro, uma linha de código de cada vez",
                         ]}
                         typingSpeed={70}
                         pauseDuration={2000}
                         className="text-2xl md:text-4xl text-gray-300"
                    />
               </motion.div>
          </section>
     );
}
