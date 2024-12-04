"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import { api } from "../lib/axios";

import Form from "../components/forms/Form";
import Logo from "../components/title/Logo";
import { Exercises } from "../components/forms/exercises";

interface formDataProps {
  education: string;
  discipline: string;
  content: string;
}

const ExercisesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({questions: [], title: ''});
  const [isGenerated, setIsGenerated] = useState(false);

  const handleFormSubmit = async (params: formDataProps) => {
    setIsLoading(true);
    api.post('/create_questions', params).then(response => {
      setData({questions: response.data.questoes, title: response.data.titulo});
      setIsGenerated(true);
    }).catch((error: Error) => {
      console.error(error);
    }).finally(() => {
      setIsLoading(false);
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
                <Exercises data={data} />
                <div className="mt-2 pt-6 border-t-2 border-gray-300 flex flex-col items-start">
                  <button
                    onClick={() => setIsGenerated(false)}
                    className="text-blue-500 hover:text-blue-700 mb-2 hover:underline"
                  >
                    Gerar nova lista de exercícios
                  </button>
                  <Link href={"/"} className="text-blue-500 hover:text-blue-700 hover:underline">
                    Voltar ao início
                  </Link>
                </div>
              </div>
            ) : (
              <Form name={"lista de exercícios"} onSubmit={handleFormSubmit} />
            )
          }
        </div>
      </main>
      {isLoading || isGenerated && (
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
      )}
    </>
  );
}

export default ExercisesPage;