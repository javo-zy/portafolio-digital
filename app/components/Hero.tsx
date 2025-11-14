// src/components/Hero.tsx

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // <-- Importamos los iconos

export const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
        
        <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-lg">

          <Image
            src="/javier.png"
            alt="Javier Baldizon - Foto de Perfil"
            layout="fill"
            objectFit="cover"
            priority 
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Javier Baldizon
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-blue-600 dark:text-blue-400 mb-4">
            Backend Developer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg mb-6">
            Apasionado por la programación, siempre buscando nuevas oportunidades para aprender y crecer.
          </p>

          {/* Enlaces Sociales */}
          <div className="flex justify-center md:justify-start gap-6">
            <Link 
              href="https://www.linkedin.com/in/javier-baldizon"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
              aria-label="LinkedIn de Javier"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link 
              href="https://github.com/javo-zy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="GitHub de Javier"
            >
              <FaGithub size={32} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};