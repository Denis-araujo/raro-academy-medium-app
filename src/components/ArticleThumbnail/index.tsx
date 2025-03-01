import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formataData } from "../../helpers/date";
import { ArticleThumbnailProps } from "./ArticleThumbnail.types";

export const ArticleThumbnail: React.FC<ArticleThumbnailProps> = ({
  id,
  imagem,
  titulo,
  resumo,
  dataPublicacao,
  tempoLeitura = '7 min',
  autor,
}) => {

  const [editavel, setEditavel] = useState(false)

  useEffect(() => {
    const usuarioAtual = Number(localStorage.getItem('id'))

    setEditavel(autor.id === usuarioAtual)
  }, [autor])

  return (
    <div className="flex flex-col w-2/3 mt-5">
      <Link to={`/artigo/${id}`}>
        <header className="flex flex-row gap-3 items-center">
          <img
            src={ autor.avatar }
            className="rounded-full"
            style={{ width: '30px', height: '30px' }}
          />
          <div>{ autor.nome }</div>
          <div className="text-sm text-gray-500">{ formataData(dataPublicacao) }</div>
        </header>
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-3 flex flex-col">
            <div className="font-bold text-lg pt-3">
              { titulo }
            </div>
            <div className="font-light pt-2 text-base text-gray-600">
              { resumo }
            </div>
          </div>
          <div className="flex items-center h-[100px]">
            <img className="mt-10" src={ imagem } alt={`imagem-do-artigo-${titulo}`}/>
          </div>
        </div>
      </Link>
      <Link to={`/artigos/editar/${id}`}>
        <footer className="flex flex-row pt-7 gap-3 items-center">
          <div className="text-gray-500 text-xs my-1">
            { tempoLeitura } de leitura
          </div>
          {
            editavel && (
              <button
                className={
                  `
                  hover:bg-blue-400 bg-blue-300 text-white
                  delay-100 duration-100
                  rounded-full py-1 px-2 text-xs
                  `
                }
              >
                Editar
              </button>
            )
          }
        </footer>
      </Link>
      <hr className="mt-5" />
    </div>
  );
}