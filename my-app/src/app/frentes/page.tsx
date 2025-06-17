import Image from "next/image";
import { CarouselDefault } from "../components/CarouselDefault";

export default function Home() {
  return (
  <div>
  <div className="flex flex-row place-content-end bg-[#9C1B2E] p-4 text-2xl font-medium text-white">
    <div className="pr-6">INÍCIO</div>
    <div className="pr-6">ÁREAS DE ATUAÇÃO</div>
    <div className="pr-6">CONTEÚDOS</div>
    <div className="pr-6">CONTATO</div>
  </div>

  <div className="bg-[#FFE7E8] h-40 text-black">
    imagem
  </div>

  <div className="bg-[#F0E6D4] flex flex-col justify-center items-center place-content-center ">
    <div className="font-bold text-6xl text-[#9C1B2E] text-center w-/6 p-6 ">CONHEÇA AS FRENTES DE ATUAÇÃO DO MENINAS.COMP</div>
    <div className="text-black w-5/6  text-3xl font-light p-12">Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per </div>
    
    <div className="bg-yellow-500 w-5/6">
      <div className="bg-[#EFC0C1] h-24 rounded-xl text-black font-bold text-2xl place-content-center flex flex-row  justify-between p-4 m-4">
        <div className="place-content-center">COMUNICAÇÃO</div>
        <Image className="" src="/arrow.svg" alt="Next.js logo" width={52} height={38} priority/>
      </div>

      <div className="bg-[#EFC0C1] h-24 rounded-xl text-black font-bold text-2xl place-content-center flex flex-row  justify-between p-4 m-4">
        <div className="place-content-center">COMPETIÇÕES</div>
        <Image className="" src="/arrow.svg" alt="Next.js logo" width={52} height={38} priority/>
      </div>
  
      <div className="bg-[#EFC0C1] h-24 rounded-xl text-black font-bold text-2xl place-content-center flex flex-row  justify-between p-4 m-4">
        <div className="place-content-center">COLEÇÕES</div>
        <Image className="" src="/arrow.svg" alt="Next.js logo" width={52} height={38} priority/>
      </div>

      <div className="bg-[#EFC0C1] h-24 rounded-xl text-black font-bold text-2xl place-content-center flex flex-row  justify-between p-4 m-4">
        <div className="place-content-center">INTELIGÊNCIA ARTIFICIAL</div>
        <Image className="" src="/arrow.svg" alt="Next.js logo" width={52} height={38} priority/>
      </div>

      <div className="bg-[#EFC0C1] h-24 rounded-xl text-black font-bold text-2xl place-content-center flex flex-row  justify-between p-4 m-4">
        <div className="place-content-center">SEGURANÇA</div>
        <Image className="" src="/arrow.svg" alt="Next.js logo" width={52} height={38} priority/>
      </div>

      <div className="bg-[#EFC0C1] h-24 rounded-xl text-black font-bold text-2xl place-content-center flex flex-row  justify-between p-4 m-4">
        <div className="place-content-center">ROBÓTICA</div>
        <Image className="" src="/arrow.svg" alt="Next.js logo" width={52} height={38} priority/>
      </div>

      <div className="bg-[#EFC0C1] h-24 rounded-xl text-black font-bold text-2xl place-content-center flex flex-row  justify-between p-4 m-4">
        <div className="place-content-center">JOGOS</div>
        <Image className="" src="/arrow.svg" alt="Next.js logo" width={52} height={38} priority/>
      </div>

    </div>
    <CarouselDefault/>

  </div>
</div>
  )};