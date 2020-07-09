import React, { useState, useEffect } from "react";
import axios from "axios";
import ProdutoItem from "../components/ProdutoItem";
import { API_URL } from "../utils/constants";

const MeusProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    const response = await axios.get(`${API_URL}/produtos`);
    setProdutos(response.data.data);
  };

  const onDelete = (id) => {
    console.log("ID", id);
    axios
      .delete(`${API_URL}/produtos/${id}`)
      .then((response) => console.log(response));
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  return (
    <div>
      <h1>Meus Produtos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <ProdutoItem
              key={produto.id}
              produto={produto}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeusProdutos;
