import Image from "next/image";
import AccordionSection from "../components/AccordionSection";
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

  <div className="w-full items-center flex justify-center bg-[#F2E0DF]">
    <Image
          className="place-content-center" src="/Site.png" alt="Next.js logo" width={800} height={100}  
        />
  </div>

  <div className="bg-[#F0E6D4] flex flex-col justify-center items-center place-content-center ">
    <div className="font-bold text-6xl text-[#9C1B2E] text-center w-/6 pt-16 ">CONHEÇA AS FRENTES DE ATUAÇÃO DO MENINAS.COMP</div>
    <div className="text-black w-5/6  text-3xl font-light p-12">lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per </div>
    <div > 
    </div>

      <div className="w-5/6">
          <AccordionSection title="COMUNICAÇÃO">
            <p>Conteúdo sobre a frente de comunicação.</p>
          </AccordionSection>

          <AccordionSection title="COMPETIÇÕES">
            <p>Conteúdo sobre competições.</p>
          </AccordionSection>

          <AccordionSection title="COLEÇÕES">
            <p className="bg-white">Conteúdo sobre coleções.</p>
          </AccordionSection>

          <AccordionSection title="INTELIGÊNCIA ARTIFICIAL">
            <p>Conteúdo sobre IA.</p>
          </AccordionSection>

          <AccordionSection title="SEGURANÇA">
            <p>Conteúdo sobre segurança.</p>
          </AccordionSection>

          <AccordionSection title="ROBÓTICA">
            <p>Conteúdo sobre robótica.</p>
          </AccordionSection>

          <AccordionSection title="JOGOS">
            <p>Conteúdo sobre jogos.</p>
          </AccordionSection>
        </div>
    <CarouselDefault/>

  </div>
</div>
  )};