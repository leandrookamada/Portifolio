import Home from "../components/home/home";
import About from "../components/sobre/sobre";
import SkillRadar from "@/components/tecnologias/page";
import ProjetosCarousel from "../components/projects/projects";

export default function Page() {
     return (
          <>
               <Home />
               <About />
               <SkillRadar />
               <ProjetosCarousel />
          </>
     );
}
