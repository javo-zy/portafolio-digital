// src/components/ContactForm.tsx

"use client";
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgvrwlyy");
  if (state.succeeded) {
      return (
        <p className="mt-4 text-lg text-green-600 dark:text-green-400">
          ¡Mensaje enviado con éxito! Te responderé pronto.
        </p>
      );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Fila para Nombre y Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-left mb-2">
            Nombre
          </label>
          <input
            id="name"
            type="text" 
            name="name"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm mt-1 text-left"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-left mb-2">
            Email
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-1 text-left"
          />
        </div>
      </div>

      {/* Campo de Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-left mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1 text-left"
        />
      </div>

      {/* Botón de Envío */}
      <div className="text-center">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-block bg-blue-600 text-white font-bold text-lg 
                     py-3 px-8 rounded-full shadow-lg 
                     hover:bg-blue-700 transition-colors duration-300
                     disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {state.submitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
        
        
        {state.errors && !state.errors.fieldErrors && (
          <p className="mt-4 text-red-600 dark:text-red-400">
            Hubo un error al enviar el formulario.
          </p>
        )}
      </div>
    </form>
  );
};