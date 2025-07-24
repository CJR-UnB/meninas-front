"use client";
import { useState } from "react";
import Image from "next/image";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export default function AccordionSection({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#EFC0C1] rounded-xl text-black font-bold text-2xl transition-all duration-300 m-4">
      {/* Cabeçalho */}
      <div
        className="flex justify-between items-center p-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{title}</div>
        <Image
          src="/arrow.svg"
          alt="Seta"
          width={30}
          height={30}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Conteúdo expansível */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100 pb-4" : "max-h-0 opacity-0"
        } px-4`}
      >
        <div className="text-base font-normal">{children}</div>
      </div>
    </div>
  );
}
