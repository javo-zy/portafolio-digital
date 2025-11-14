// src/components/Footer.tsx

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright */}
        <div className="text-sm text-center md:text-left">
          © {currentYear} Javier Baldizon. Todos los derechos reservados.
        </div>

        {/* Enlaces Sociales del Footer */}
        <div className="flex gap-6">
          <Link 
            href="https://www.linkedin.com/in/javier-baldizon"
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link 
            href="https://github.com/javo-zy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </Link>
                    <Link 
            href="https://www.instagram.com/javierywz_?igsh=M2czam9neW1mOWRm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaInstagram size={24} />
          </Link>
        </div>

      </div>
    </footer>
  );
};