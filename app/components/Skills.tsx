// src/components/Skills.tsx

import { IconType } from "react-icons";
import { 
  FaJs, FaPython, FaWordpressSimple, FaFigma, FaTable, FaChartBar 
} from "react-icons/fa";
// Para Next.js, Tailwind, Supabase usaremos otros
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiElementor , SiCss3, SiHtml5,} from "react-icons/si";

// Importa el SkillCard que acabamos de crear
import { SkillCard } from "./SkillCard"; // <-- Importa SkillCard

// Definimos la interfaz (ya la teníamos)
interface Skill {
  name: string;
  description: string;
  icon: IconType; 
}

// Ahora, con los iconos importados, actualizamos skillsData
const skillsData: Skill[] = [
  { 
    name: "JavaScript", 
    description: "Desarrollo web interactivo y backend con Node.js", 
    icon: FaJs 
  },
  { 
    name: "Python", 
    description: "Desarrollo backend, scripting y análisis de datos", 
    icon: FaPython 
  },
  { 
    name: "Next.js", 
    description: "Framework React para aplicaciones web robustas", 
    icon: SiNextdotjs 
  },
  { 
    name: "Supabase", 
    description: "Backend-as-a-Service, bases de datos y autenticación", 
    icon: SiSupabase 
  },
  { 
    name: "Tailwind CSS", 
    description: "Framework CSS utilitario para estilos rápidos y responsivos", 
    icon: SiTailwindcss 
  },
  { 
    name: "WordPress", 
    description: "Gestión de contenido y desarrollo de sitios web", 
    icon: FaWordpressSimple 
  },
  { 
    name: "Elementor", 
    description: "Constructor visual de páginas para WordPress", 
    icon: SiElementor 
  },
  { 
    name: "Figma", 
    description: "Herramienta de diseño para prototipos y UI/UX", 
    icon: FaFigma 
  },
  { 
    name: "Excel", 
    description: "Análisis y visualización de datos en hojas de cálculo", 
    icon: FaTable
  },
  { 
    name: "Power BI", 
    description: "Creación de dashboards interactivos e informes de negocio", 
    icon: FaChartBar
  },
    { 
    name: "Css", 
    description: "Definir la presentación y el estilo de los documentos web",
    icon: SiCss3
  },
    { 
    name: "HTML", 
    description: "Estructurar y oganizar el contenido de páginas web ", 
    icon: SiHtml5
  },
  
];


export const Skills = () => {
  return (
    <section 
      id="skills" // Le damos un ID también, aunque no lo hayamos enlazado aún
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mis Habilidades y Tecnologías
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Estas son las tecnologías que utilizo en mis proyectos y en las que tengo experiencia.
        </p>
        
        {/* Grid para las SkillCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill) => (
            <SkillCard 
              key={skill.name}
              name={skill.name}
              description={skill.description}
              Icon={skill.icon} // Pasamos el componente de icono
            />
          ))}
        </div>
      </div>
    </section>
  );
};