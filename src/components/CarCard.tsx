import { Car } from "@/types";
import Image from "next/image";



const CarCard = ({ car }: { car: Car }) => {
  const imageUrl = car.images.image[0]
    ? (car.images.image[0].startsWith("http")
        ? car.images.image[0]
        : `https://testing-api.ru-rating.ru${car.images.image[0]}`)
    : "/no-image.png";

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <section className="w-full h-40 bg-gray-100 relative">
        <Image
          src={imageUrl}
          alt={car.model_rel.name}
          fill
          className="object-cover"
        />
      </section>

      <section className="p-3 flex flex-col flex-grow">
        <h3 className="text-lg mb-1">{car.model_rel.name} {car.modification_id}</h3>
        <p className="text-blue-600  text-xl mb-2">
          {car.price.toLocaleString("ru-RU")} ₽
        </p>

        <div className="flex flex-wrap text-gray-600 text-sm gap-2 mb-3">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2h8l1 4h-10l1-4zM3 8h14v6H3V8z"/></svg>
            <span>{car.run.toLocaleString()} тыс. км</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 016 6v6a6 6 0 01-12 0V8a6 6 0 016-6z"/></svg>
            <span>{car.owners_number}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M4 9h12v2H4z"/></svg>
            <span>{car.state}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2h8v16H6z"/></svg>
            <span>{car.year}</span>
          </div>
        </div>

        <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white rounded py-2 transition-colors">
          Купить
        </button>
      </section>
    </article>
  );
};

export default CarCard;
