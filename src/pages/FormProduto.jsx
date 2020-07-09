import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const FormProduto = ({ history }) => {
  const [produto, setProduto] = useState({ nome: "", preco: 1 });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/produtos`, produto)
      .then((data) => {
        console.log(data);
        history.push("/");
      })
      .catch((err) => {
        setError(true);
      });
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
      {error && (
        <h5 className="text-right text-danger">
          Já existe um produto cadastrado com esse nome! Por favor, escolha
          outro.
        </h5>
      )}
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
            type="number"
            min="1"
            className="form-control"
            id="preco"
            name="preco"
            placeholder="Preço do produto"
            value={produto.preco}
            onChange={handleChange}
          />
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Cadastrar Produto"
        />
      </form>
    </div>
  );
};

export default FormProduto;
