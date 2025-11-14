// src/components/ProjectCard.tsx

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Iconos

// Definimos los tipos de 'props' que recibirá la tarjeta
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string; // Opcional
  demoUrl?: string;   // Opcional
}

export const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  githubUrl, 
  demoUrl 
}: ProjectCardProps) => {
  return (
    <div className="rounded-lg shadow-xl overflow-hidden bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
      
      {/* Imagen del Proyecto */}
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={`Captura de pantalla de ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>

        {/* Etiquetas (Tecnologías) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                         text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Enlaces (GitHub y Demo) */}
        <div className="flex gap-4">
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <FaGithub size={20} />
              GitHub
            </Link>
          )}
          {demoUrl && (
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <FaExternalLinkAlt size={20} />
              Demo
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};