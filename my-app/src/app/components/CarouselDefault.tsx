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
      <div className="overflow-hidden w-full">
        <div className="flex transition-transform duration-500 ease-in-out" style = {{width: "100%"}}>
          {images.slice(0, visibleCount).map((src, i) => (
            <div
              key={i}
              className="min-w-[30%] flex justify-center m-4"
              style={{ height: "300px" }} // altura padrão
            >
              <div className="relative w-[400px] h-[300px]">
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
