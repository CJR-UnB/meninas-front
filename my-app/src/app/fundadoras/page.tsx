import Header from "../components/Header";
import Image from "next/image";
import FundadoraCard from "../components/FundadoraCard";

export default function Home() {
  const fundadoras = [
    {
      name: "Maria Gaetana Agnesi",
      yearbirth: 1718,
      yeardeath: 1799,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
      imageSrc: "/gaetana.jpg"
    },
    {
      name: "Ana Pereira",
      yearbirth: 1815,
      yeardeath: 1852,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
      imageSrc: "/ada.jpg"
    },
    {
      name: "Joana Souza",
      yearbirth: 1914,
      yeardeath: 2000,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
      imageSrc: "/hedy.jpg"
    }
    // Adicione mais fundadoras aqui se quiser
  ];

  return (
    <div className="bg-[#F5F1E9] w-full">
      <Header />

      <div className="w-full items-center flex justify-center bg-[#F2E0DF]">
        <Image
          className="place-content-center"
          src="/Site2.png"
          alt="Next.js logo"
          width={800}
          height={100}
        />
      </div>

      <div className=" flex flex-col justify-center items-center place-content-center ">
        <div className="font-bold text-6xl text-[#9C1B2E] text-center w-/6 pt-16">
          FUNDADORAS
        </div>

        <div className=" ">
          {fundadoras.map((fundadora, index) => (
            <FundadoraCard key={index} {...fundadora} />
          ))}
        </div>
      </div>
    </div>
  );
}
