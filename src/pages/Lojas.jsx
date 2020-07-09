import React, { useState, useEffect } from "react";
import axios from "axios";
import LojaItem from "../components/LojaItem";

const Lojas = () => {
  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    getLojas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = (id) => {
    console.log("ID", id);
    axios
      .delete(`http://localhost:5000/lojas/${id}`)
      .then((response) => console.log(response));
    setLojas(lojas.filter((loja) => loja.id !== id));
  };

  const getLojas = async () => {
    const response = await axios.get("http://localhost:5000/lojas");

    console.log(response.data.data);
    setLojas(response.data.data);
    console.log("Lojas", lojas);
  };

  return (
    <div>
      <h1>Lojas</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Adicionar Produtos</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {lojas.map((loja) => (
            <LojaItem key={loja.id} loja={loja} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lojas;
