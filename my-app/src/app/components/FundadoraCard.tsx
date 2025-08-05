"use client";
import Image from "next/image";

type FundadoraProps = {
  name: string;
  yearbirth: number;
  yeardeath: number;
  description: string;
  imageSrc: string;
};

export default function FundadoraCard({
  name,
  yearbirth,
  yeardeath,
  description,
  imageSrc
}: FundadoraProps) {
  return (
    <div className=" rounded-xl text-black p-4 m-4 shadow-lg flex flex-row">
      <div className=" w-3/5 aspect-square relative m-4 justify-items-start ">
        <Image
          src={imageSrc}
          alt={`Foto de ${name}`}
          fill
          className="rounded-full object-cover"
        />

      </div>
      <div className="h-3/5 ml-2">
        <div className="text-2xl font-semibold m-2">{name}</div>
        <div className="text-md text-gray-600 m-2">
          ({yearbirth} - {yeardeath})
        </div>
        <p className="text-base px-2 m-2">{description}</p>
      </div>

    </div>
  );
}
