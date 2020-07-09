import React, { useState, useEffect } from "react";
import axios from "axios";
import LojaItem from "../components/LojaItem";

const EditarLoja = ({ match, history }) => {
  const id = match.params.id;
  console.log(history);
  const [loja, setLoja] = useState({ nome: "", endereco: "", telefone: "" });

  useEffect(() => {
    axios.get(`http://localhost:5000/lojas/${id}`).then((response) => {
      setLoja(response.data.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Editou");
    axios
      .put(`http://localhost:5000/lojas/${id}`, loja)
      .then((response) => console.log(response));
    history.push("/");
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
        <input
          className="btn btn-primary"
          type="submit"
          value="Atualizar Loja"
        />
      </form>
    </div>
  );
};

export default EditarLoja;
