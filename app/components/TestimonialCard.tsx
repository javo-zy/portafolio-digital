import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

export const TestimonialCard = ({ quote, name, title, imageUrl }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden
                    bg-white dark:bg-gray-800
                    border border-gray-200 dark:border-gray-700">
      
      <div className="p-6 flex-grow">
        <q className="block text-gray-700 dark:text-gray-300 italic mb-4 text-justify ">
          {quote}
        </q>
      </div>
      
      {/* El autor */}
      <div className="flex items-center p-6 bg-gray-50 dark:bg-gray-700">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 shrink-0">
          <Image
            src={imageUrl}
            alt={`Foto de ${name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <p className="font-bold text-gray-900 dark:text-white text-left">
            {name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-left">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};