// src/components/Header.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="flex items-center justify-between p-4 backdrop-blur-md bg-white/30 dark:bg-gray-900/30">
        
        <Link href="/rubik.png" className="text-xl font-bold">
          Javier Baldizon
        </Link>
        
        {/* Enlaces de Navegación (para escritorio) */}
        <div className="hidden md:flex gap-6">
          <Link href="#sobre-mi" className="hover:text-gray-700 dark:hover:text-gray-300">Sobre Mí</Link>
          <Link href="#habilidades" className="hover:text-gray-700 dark:hover:text-gray-300">Habilidades y Tecnologías</Link>
          <Link href="#proyectos" className="hover:text-gray-700 dark:hover:text-gray-300">Proyectos</Link>
          <Link href="#contacto" className="hover:text-gray-700 dark:hover:text-gray-300">Contacto</Link>
          
        
        </div>

        {/* Botón de Menú (para móvil) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* Icono de hamburguesa (simple) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú desplegable (para móvil) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center p-4 backdrop-blur-md bg-white/90 dark:bg-gray-900/90">
          <Link href="#sobre-mi" className="py-2" onClick={() => setIsOpen(false)}>Sobre Mí</Link>
          <Link href="#habilidades" className="py-2" onClick={() => setIsOpen(false)}>Habilidades</Link>
          <Link href="#proyectos" className="py-2" onClick={() => setIsOpen(false)}>Proyectos</Link>
          <Link href="#contacto" className="py-2" onClick={() => setIsOpen(false)}>Contacto</Link>

        </div>
      )}
    </header>
  );
};