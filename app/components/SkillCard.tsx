// src/components/SkillCard.tsx

import React from "react";
import { IconType } from "react-icons"; // Para recibir el componente de icono

interface SkillCardProps {
  name: string;
  description: string;
  Icon: IconType; // Recibimos el componente de icono como una prop
}

export const SkillCard = ({ name, description, Icon }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-start p-6 rounded-xl shadow-md 
                    bg-white dark:bg-gray-800 
                    border border-gray-200 dark:border-gray-700
                    hover:scale-105 transition-transform duration-300">
      
      <div className="flex items-center mb-3">
        {/* Renderizamos el icono aquí. size y className para el estilo. */}
        <Icon className="text-blue-600 dark:text-blue-400 mr-3" size={32} />
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm text-left">
        {description}
      </p>
    </div>
  );
};