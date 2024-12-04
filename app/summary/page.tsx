"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import { api } from "../lib/axios";

import Form from "../components/forms/Form";
import Logo from "../components/title/Logo";
import { Summary } from "../components/summary/summary";

interface formDataProps {
  education: string;
  discipline: string;
  content: string;
}

const emptyData = {titulo: '', definicao: '', exemplos: [], aplicacoes: '', teoria_e_pratica: '', exercicios: [], dicas_estudo: [], referencias: []};

const SummaryPage = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [data, setData] = useState(emptyData);

  const handleFormSubmit = (params: formDataProps) => {

    api.post('/generate_summary', params).then(response => {
      setData(response.data)
      setIsGenerated(true);
    }).catch((error: Error) => {
      console.error(error);
    });
  };

  return (
    <>
      <main className="p-4 md:p-8 lg:py-12 lg:px-24">
        <div className="flex flex-col items-center gap-8">
          <Logo />
          {
            isGenerated ? (
              <div className="py-6 px-8 w-auto bg-white rounded-lg border-1 border-gray-200 shadow-lg">
                <Summary  data={data}/>
                <div className="mt-2 pt-6 border-t-2 border-gray-300 flex flex-col items-start">
                  <button
                    onClick={() => setIsGenerated(false)}
                    className="text-blue-500 hover:text-blue-700 mb-2 hover:underline"
                  >
                    Gerar novo resumo
                  </button>
                  <Link href={"/"} className="text-blue-500 hover:text-blue-700 hover:underline">
                    Voltar ao início
                  </Link>
                </div>
              </div>
            ) : (
              <Form name={"resumo"} onSubmit={handleFormSubmit} />
            )
          }
        </div>
      </main>
      <div className="flex justify-center text-center text-white py-8">
        O Gabarita A.I. gerou
        <div className={`mx-1.5 ${isGenerated ? '' : 'text-yellow-400 underline'}`}>
          {isGenerated ? 'o' : (
            <Image
              src={"/dot_loading.svg"}
              alt="Loading"
              width={20}
              height={20}
              className="mt-1.5"
            />
          )}
        </div>
        resumo!
      </div>
    </>
  );
}

export default SummaryPage;