interface SummaryProps {
    data: {
    titulo: string;
    definicao: string;
    exemplos: string[];
    aplicacoes: string;
    teoria_e_pratica: string;
    exercicios: string[];
    dicas_estudo: string[];
    referencias: string[];}
}

export function Summary({data: {
  titulo,
  aplicacoes,
  definicao,
  dicas_estudo,
  exemplos,
  exercicios,
  referencias,
  teoria_e_pratica
}}: SummaryProps) {
  return (
    <div className="flex flex-col">
      <h1 className="self-center font-bold text-2xl">{titulo}</h1>
      <h2 className="font-bold text-lg mt-10 mb-2">Definição:</h2>
      <p className="ml-2">{definicao}</p>
      <h2 className="font-bold text-lg mt-10 mb-2">Exemplos</h2>
      <ul className="list-disc ml-4">
        {exemplos.map((exemplo, index) => (
          <li className="mt-2" key={index}>{exemplo}</li>
        ))}
      </ul>
      <h2 className="font-bold text-lg mt-10 mb-2">Aplicações</h2>
      <p className="ml-2">{aplicacoes}</p>
      <h2 className="font-bold text-lg mt-10 mb-2">Teoria e Prática</h2>
      <p className="ml-2">{teoria_e_pratica}</p>
      <h2 className="font-bold text-lg mt-10 mb-2">Dicas de Estudo</h2>
      <ul className="list-disc ml-4">
        {dicas_estudo.map((dica, index) => (
          <li className="mt-2" key={index}>{dica}</li>
        ))}
      </ul>
      <h2 className="font-bold text-lg mt-10 mb-2">Exercícios</h2>
      <ul className="list-disc ml-4">
        {exercicios.map((exercicio, index) => (
          <li className="mt-2" key={index}>{exercicio}</li>
        ))}
      </ul>
      <h2 className="font-bold text-lg mt-10 mb-2">Referências</h2>
      <ul className="list-disc ml-4">
        {referencias.map((referencia, index) => (
          <li className="mt-2" key={index}>{referencia}</li>
        ))}
      </ul>
    </div>
  )
}