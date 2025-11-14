// src/components/About.tsx

export const About = () => {
  return (
    <section 
      id="sobre-mi" 
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Título de la Sección */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sobre Mí
        </h2>
        
        {/* Párrafo (Tu contenido) */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
           Apasionado por el aprendizaje y el crecimiento, tengo sólidas habilidades en inglés e informática. Me considero un agente de cambio positivo, comprometido con mi desarrollo continuo para ser mejor persona y profesional. Disfruto de entornos de trabajo dinámicos donde puedo adaptarme y contribuir, destacando en la colaboración en equipo y la organización de proyectos.
        </p>

      </div>
    </section>
  );
};