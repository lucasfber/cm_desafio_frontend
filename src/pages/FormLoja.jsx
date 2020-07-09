import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";

const FormLoja = ({ history }) => {
  const [loja, setLoja] = useState({ nome: "", endereco: "", telefone: "" });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/lojas`, loja)
      .then((data) => {
        console.log(data);
        setLoja({ nome: "", endereco: "", telefone: "" });
        history.push("/");
      })
      .catch((err) => {
        setError(true);
      });
  };

  const handleChange = (e) => {
    setLoja({
      ...loja,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-4">
      <h3>Nova Loja</h3>
      {error && (
        <h5 className="text-right text-danger">
          Já existe uma loja cadastrada com esse nome! Por favor, escolha outro.
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
            placeholder="Nome da loja"
            value={loja.nome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input
            required
            type="text"
            className="form-control"
            id="endereco"
            name="endereco"
            placeholder="Endereço da loja"
            value={loja.endereco}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            required
            type="text"
            className="form-control"
            id="telefone"
            name="telefone"
            placeholder="Telefone da loja"
            value={loja.telefone}
            onChange={handleChange}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default FormLoja;
