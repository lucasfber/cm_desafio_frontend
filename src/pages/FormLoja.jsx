import React, { useState } from "react";
import axios from "axios";

const FormLoja = () => {
  const [loja, setLoja] = useState({ nome: "", endereco: "", telefone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/lojas", loja).then((data) => {
      console.log(data);
      setLoja({ nome: "", endereco: "", telefone: "" });
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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
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
