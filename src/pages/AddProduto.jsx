import React, { useState, useEffect } from "react";
import axios from "axios";
import LojaItem from "../components/LojaItem";

const AddProduto = ({ match, history }) => {
  const id = match.params.id;
  console.log(history);
  const [produto, setProduto] = useState({ produtoId: null, quantidade: 1 });
  const [produtos, setProdutos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/lojas/${id}`).then((response) => {
      getProdutos();
    });
  }, []);

  const handleSelectChange = (e) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  };

  const getProdutos = () => {
    axios.get(`http://localhost:5000/produtos/`).then((response) => {
      setProdutos(response.data.data);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submeteu");
    axios
      .post(`http://localhost:5000/lojas/${id}/produtos`, {
        produtoId: produto.produtoId,
        quantidade: produto.quantidade,
      })
      .then((response) => {
        console.log(response);
        history.push("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };

  return (
    <div className="mt-4">
      {error && (
        <h5 className="text-info text-right">
          Você já possui esse produto na sua loja! Tente adicionar outro
        </h5>
      )}
      <h3>Adicionar produtos a loja</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Produto:</label>
          <select
            className="form-control"
            value={produto.produtoId}
            name="produtoId"
            onChange={handleSelectChange}
          >
            {produtos &&
              produtos.map((produto) => (
                <option key={produto.id} value={produto.id}>
                  {produto.nome}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            required
            type="number"
            min="1"
            className="form-control"
            id="quantidade"
            name="quantidade"
            placeholder="Quantidade"
            value={produto.quantidade}
            onChange={handleChange}
          />
        </div>
        <input
          className="btn btn-primary"
          type="submit"
          value="Adicionar produto a loja"
        />
      </form>
    </div>
  );
};

export default AddProduto;
