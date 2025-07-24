"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
            <div className="bg-[#EFC0C1] rounded-xl text-black font-bold text-2xl p-4 m-4 transition-all duration-300">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <div>COMUNICAÇÃO</div>
                    <Image src="/arrow.svg" alt="Seta" width={52} height={38} className={`transition-transform duration-300 ${ isOpen ? "rotate-180" : ""}`}/>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ${ isOpen ? "max-h-[500px]" : "max-h-0 opacity-0"}`}>
                    <div className="bg-white rounded-xl shadow p-4 mx-4 text-black">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nobis aliquam obcaecati dolor animi ducimus, possimus accusamus expedita vitae, itaque pariatur ut placeat, tenetur consequatur et nihil quidem magnam neque?</p>
                    </div>
                </div>


        </div>
    )    
}