import { Link } from "react-router-dom";
import { ArtigoPage } from "../Artigo";

export const SemArtigo = () => (
  <div className='flex h-screen items-center justify-center bg-white'>
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <h2 className="text-gray-800 text-3xl font-semibold">
        Opa, você ainda não postou nada,
      <Link to="/artigos/novo" className="`
                  hover:bg-blue-400 bg-blue-300 text-white
                  delay-100 duration-100
                  rounded-full py-1 px-2 text-xs text-2xl
                  `">poste alguma coisa</Link>
      </h2>
    </div>
    {/* <p className="text-5xl text-white md:text-7xl lg:text-9xl">Você não publicou nada ainda</p> */}
  </div>
);