import React, { useState, useEffect } from "react";
import axios from "axios";

const ProdutoInfo = ({ match, history }) => {
  const id = match.params.id;
  const [produto, setProduto] = useState({ nome: "", preco: "" });
  const [messageNotFound, setMessageNotFound] = useState(false);

  useEffect(() => {
    getProduto();
  }, []);

  const getProduto = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/produtos/${id}`);
      setProduto(response.data.data);
    } catch (error) {
      setMessageNotFound(true);
    }
  };

  return (
    <div>
      {!messageNotFound && (
        <div className="mt-4">
          <h1>Produto: {produto.nome}</h1>
          <h2>Preço: {produto.preco}</h2>
        </div>
      )}
      {messageNotFound && (
        <h1 className="mt-4 text-center text-danger">
          Produto não encontrado!
        </h1>
      )}
    </div>
  );
};

export default ProdutoInfo;
