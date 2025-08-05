import Image from "next/image";
import AccordionSection from "../components/AccordionSection";
import {CarouselDefault} from "../components/CarouselDefault";
import Header from "../components/Header";

export default function Home() {
  return (
  <div>
    <Header/>
  <div className="w-full items-center flex justify-center bg-[#F2E0DF]">
    <Image
          className="place-content-center" src="/Site.png" alt="Next.js logo" width={800} height={100}  
        />
  </div>

  <div className="bg-[#F0E6D4] flex flex-col justify-center items-center place-content-center ">
    <div className="font-bold text-6xl text-[#9C1B2E] text-center w-4/6 pt-16 ">CONHEÇA AS FRENTES DE ATUAÇÃO DO MENINAS.COMP</div>
    <div className="text-black w-6/7  text-3xl font-light p-12 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae quos nostrum tempore ad harum delectus accusamus id! Accusantium rerum unde accusamus tenetur temporibus, quibusdam aliquam harum praesentium pariatur velit.lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per </div>
    <div > 
    </div>

      <div className="w-5/6">
          <AccordionSection title="COMUNICAÇÃO">
            <p className="bg-white h-48 rounded-lg text-3xl">Conteúdo sobre a frente de comunicação.</p>
          </AccordionSection>

          <AccordionSection title="COMPETIÇÕES">
            <p className="bg-white h-48 rounded-lg text-3xl">Conteúdo sobre competições.</p>
          </AccordionSection>

          <AccordionSection title="COLEÇÕES">
            <p className="bg-white h-48 rounded-lg text-3xl">Conteúdo sobre coleções.</p>
          </AccordionSection>

          <AccordionSection title="INTELIGÊNCIA ARTIFICIAL">
            <p className="bg-white h-48 rounded-lg text-3xl">Conteúdo sobre IA.</p>
          </AccordionSection>

          <AccordionSection title="SEGURANÇA">
            <p className="bg-white h-48 rounded-lg text-3xl">Conteúdo sobre segurança.</p>
          </AccordionSection>

          <AccordionSection title="ROBÓTICA">
            <p className="bg-white h-48 rounded-lg text-3xl">Conteúdo sobre robótica.</p>
          </AccordionSection>

          <AccordionSection title="JOGOS">
            <p className="bg-white h-48 rounded-lg text-3xl">Conteúdo sobre jogos.</p>
          </AccordionSection>
        </div>

    <div className="w-full">    
      <CarouselDefault/>
    </div>   

  </div>
</div>
  )};