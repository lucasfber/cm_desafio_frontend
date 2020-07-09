import React, { useState, useEffect } from "react";
import axios from "axios";

const EditarProduto = ({ match, history }) => {
  const id = match.params.id;
  console.log(history);
  const [produto, setProduto] = useState({ nome: "", preco: "" });

  useEffect(() => {
    axios.get(`http://localhost:5000/produtos/${id}`).then((response) => {
      setProduto(response.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Editou");
    axios
      .put(`http://localhost:5000/produtos/${id}`, produto)
      .then((response) => console.log(response));
    history.push("/");
  };

  const handleChange = (e) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-4">
      <h3>Editar Produto</h3>
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
            className="form-control"
            min="1"
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
          value="Atualizar Produto"
        />
      </form>
    </div>
  );
};

export default EditarProduto;
