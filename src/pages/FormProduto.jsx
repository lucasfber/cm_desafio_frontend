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
      <h3>Nova Produto</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            required
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            placeholder="Nome do produto"
            value={produto.nome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            required
            type="text"
            className="form-control"
            id="preco"
            name="preco"
            placeholder="Preõ do produto"
            value={produto.preco}
            onChange={handleChange}
          />
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Atualizar Produto"
        />
      </form>
    </div>
  );
};

export default FormProduto;
