// src/components/Contact.tsx

// Importamos nuestro nuevo formulario
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section 
      id="contacto" // ID para la navegación
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900" 
    >
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contacto
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          ¿Interesado en colaborar? Rellena el formulario
          <br />
          o contáctame directamente en mis redes.
        </p>

        {/* Aquí renderizamos el formulario */}
        <ContactForm />

      </div>
    </section>
  );
};