import Image from "next/image";

import OptionBox from "./components/buttons/OptionBox";
import logoImg from '@/app/img/logo.png'

export default function Home() {
  return (
    <main className="px-8 p-16 lg:p-24 bg-gradient-to-r from-[#2675B3] to-[#060E3D] min-h-screen">
      <div className="flex justify-center">
        <div className="flex items-center mb-8">
          <Image 
            src={logoImg}
            alt="Gabarita_A.I"
            width={120}
            className="mr-4"
            priority
          />
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
            Gabarita A.I
          </h1>
        </div>
      </div>
      <div className="lg:mx-30 flex text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 md:mb-10 lg:mb-12 pb-4 md:pb-3 border-b-2">
        Do que precisa hoje?
      </div>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-16">
        <OptionBox title={"Resumo"} icon={"resumo.svg"} link={"/summary"}/>
        <OptionBox title={"Lista de Exercícios"} icon={"lista.svg"} link={"/exercises"}/>
      </div>
    </main>
  );
}
