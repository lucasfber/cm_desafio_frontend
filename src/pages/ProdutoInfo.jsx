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
          <h2>
            Produto: <span className="text-muted">{produto.nome}</span>
          </h2>
          <h3>
            Preço: <span className="text-muted">{produto.preco}</span>
          </h3>
        </div>
      )}
      {messageNotFound && (
        <h2 className="mt-4 text-center text-danger">
          Produto não encontrado!
        </h2>
      )}
    </div>
  );
};

export default ProdutoInfo;
