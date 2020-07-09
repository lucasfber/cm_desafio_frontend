import React, { useState, useEffect } from "react";
import axios from "axios";

const LojaInfo = ({ match, history }) => {
  const id = match.params.id;
  const [loja, setLoja] = useState({ nome: "", endereco: "", telefone: "" });
  const [messageNotFound, setMessageNotFound] = useState(false);

  useEffect(() => {
    getLoja();
  }, []);

  const getLoja = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/lojas/${id}`);
      setLoja(response.data.data);
    } catch (error) {
      setMessageNotFound(true);
    }
  };

  return (
    <div>
      {!messageNotFound && (
        <div className="mt-4">
          <h1>Loja: {loja.nome}</h1>
          <h2>Endereço: {loja.endereco}</h2>
          <h3>Telefone para contato: {loja.telefone}</h3>
        </div>
      )}
      {messageNotFound && (
        <h1 className="mt-4 text-center text-danger">Loja não encontrada!</h1>
      )}
    </div>
  );
};

export default LojaInfo;
