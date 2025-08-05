"use client";
import Image from "next/image";
import { useState } from "react";

export function CarouselDefault() {
  const initialImages = [
    "/carro1.jpeg",
    "/carro4.jpg",
    "/carro5.jpg"
  ];

  const [images, setImages] = useState(initialImages);
  const visibleCount = 3;

  const nextSlide = () => {
    const [first, ...rest] = images;
    setImages([...rest, first]);
  };

  const prevSlide = () => {
    const last = images[images.length - 1];
    const rest = images.slice(0, images.length - 1);
    setImages([last, ...rest]);
  };

  return (
    <div className="relative w-5/6 mx-auto justify-items-center">
      {/* Botão esquerdo */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#EFC0C1] hover:bg-[#dba6a7] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center"
      >
        {"<"}
      </button>
      {/* Carrossel */}
    <div className="overflow-hidden w-full p-8">
      <div className="flex transition-transform duration-500 ease-in-out gap-4">
        {images.slice(0, visibleCount).map((src, i) => (
          <div
            key={i}
            className="w-1/3 flex justify-center"
            style={{ aspectRatio: "4 / 3" }} // largura:altura (ex: 400x300)
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Imagem ${i + 1}`}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* Botão direito */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#EFC0C1] hover:bg-[#dba6a7] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center"
      >
        {">"}
      </button>
    </div>
  );
}
