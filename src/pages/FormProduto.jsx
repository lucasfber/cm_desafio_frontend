import React, { useState, useEffect } from "react";
import axios from "axios";

const FormProduto = () => {
  const [produto, setProduto] = useState({ nome: "", preco: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/produtos", produto)
      .then((data) => console.log(data));
  };

  const handleChange = (e) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Nome:{" "}
        <input
          type="text"
          name="nome"
          value={produto.nome}
          onChange={handleChange}
        />
        Preço:{" "}
        <input
          type="text"
          name="preco"
          value={produto.preco}
          onChange={handleChange}
        />
        <input type="submit" value="Cadastrar Produto" />
      </form>
    </div>
  );
};

export default FormProduto;
