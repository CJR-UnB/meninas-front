import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export function CarouselDefault() {
  return (
    <div className="bg-red-700 p-4">
      <Carousel className="rounded-xl h-[300px] w-full">
        <Image
          src="/carro1.jpeg"
          alt="Carro 1"
          width={800}
          height={300}
          className="w-full object-cover"
        />
        <Image
          src="/carro2.png"
          alt="Carro 2"
          width={800}
          height={300}
          className="w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
