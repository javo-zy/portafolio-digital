

import { TestimonialCard } from "./TestimonialCard";
const testimonialsData = [
  {
    quote: "Javier Baldizon es una persona comprometida en sus trabajos, una persona proactiva en todas sus actividades, siempre trata la manera de realizar su trabajo de la mejor manera posible, además de eso se esfuerza por comprender aquellas cosas que le resultan difíciles.",
    name: "Angie Casco",
    title: "Estudiante del Centro ¡Supérate! Hilasal",
    imageUrl: "/angie.jpg",
  },
  {
    quote: "Trabajar con Javier en el proyecto Jambo fue una gran experiencia. Su conocimiento en backend y Supabase fue... (completa lacita).",
    name: "Eduardo Paices",
    title: "Colega Desarrollador en Proyecto Y",
    imageUrl: "", 
  },
  {
    quote: "Trabajar con Javier en el proyecto Jambo fue una gran experiencia. Su conocimiento en backend y Supabase fue... (completa lacita).",
    name: "Mercy Segura",
    title: "Colega Desarrollador en Proyecto Y",
    imageUrl: "", 
  },

];


export const Testimonials = () => {
  return (
    <section 
      id="testimonios"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900" 
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Testimonios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              imageUrl={testimonial.imageUrl}
            />
          ))}

        </div>
      </div>
    </section>
  );
};