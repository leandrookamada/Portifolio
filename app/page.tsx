import Home from "../components/home/home";
import About from "../components/sobre/sobre";
import Tecnologia from "../components/tecnologias/page";
import ProjetosCarousel from "../components/projects/projects";

export default function Page() {
     return (
          <>
               <Home />
               <About />
               <Tecnologia />
               <ProjetosCarousel />
          </>
     );
}
