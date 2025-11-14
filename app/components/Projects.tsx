// src/components/Projects.tsx

import { ProjectCard } from "./ProjectCard";
const projectsData = [
  {
    title: "Resisearch",
    description: "Aquí va la descripción de tu proyecto Resisearch. Explica qué hace, cuál fue tu rol, etc.",
    tags: ["Power App", "Figma", ],
    imageUrl: "/resisearch.png", 
    githubUrl: "#",
    demoUrl: "#",  
  },
  {
    title: "Chambi",
    description: "Aquí va la descripción de tu proyecto Chambi. ¿Qué problema resuelve? ¿Qué aprendiste?",
    tags: ["WordPress", "Figma", "PostgreSQL"], 
    imageUrl: "/chambi.png",
    githubUrl: "#",
    demoUrl: "#",  
  },
  {
    title: "Jambo",
    description: "Aquí va la descripción de tu proyecto Jambo. ¿Fue un proyecto en equipo? ¿Qué tecnologías usaste?",
    tags: ["Supabase", "Next.js",],
    imageUrl: "/jambo.png", 
    githubUrl: "https://github.com/javo-zy/jambo-app.git", 
  },
];


export const Projects = () => {
  return (
    <section 
      id="proyectos" // ID para la navegación
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900" // Fondo alterno
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proyectos
        </h2>
        
        {/* Grid para las tarjetas de proyecto */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Mapeamos los datos del proyecto y creamos una tarjeta para cada uno */}
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}

        </div>
      </div>
    </section>
  );
};