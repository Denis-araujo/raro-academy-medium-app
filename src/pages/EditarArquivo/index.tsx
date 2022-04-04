import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

import apiClient from '../../services/api-cliente'

export const EditarArquivoPage = () => {
  const [artigo, setArtigo] = useState<ArticleThumbnailProps>()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if(id) {
      buscarArtigo()
    }
  }, [id])

  async function buscarArtigo() {
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`
    );
    

    setArtigo(response.data)
  }

  async function handleSubmit(artigo: ArticleThumbnailProps) {
    if (artigo.id) {
      await apiClient.patch(`/artigos/${artigo.id}`, {...artigo})
      navigate(`/artigo/${artigo.id}`)
    } else {
      const guardaArtigo = await apiClient.post(`/artigos`, {...artigo})
      navigate(`/artigo/${guardaArtigo.data.id}`)
    }
  }

  async function deletarArquivo() {
    await apiClient.delete(`/artigos/${id}`)
    navigate(`/artigos`)
  }

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm article={artigo} onSubmit={ handleSubmit } onClick={deletarArquivo}/>
      </div>
    </>
  );
};
