import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LojaInfo = ({ match, history }) => {
  const id = match.params.id;
  const [loja, setLoja] = useState({ nome: "", endereco: "", telefone: "" });
  const [produtos, setLojaProdutos] = useState([]);
  const [messageNotFound, setMessageNotFound] = useState(false);

  useEffect(() => {
    getLoja();
    getLojaProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLoja = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/lojas/${id}`);
      setLoja(response.data.data);
    } catch (error) {
      setMessageNotFound(true);
    }
  };

  const getLojaProdutos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/lojas/${id}/produtos`
      );
      setLojaProdutos(response.data.data);
    } catch (error) {
      setMessageNotFound(true);
    }
  };

  return (
    <div>
      <Link className="btn btn-default" to="/minhas-lojas">
        Voltar para Minhas Lojas
      </Link>
      {!messageNotFound && (
        <div className="mt-4">
          <h2>
            Loja: <span className="text-muted">{loja.nome}</span>
          </h2>
          <h3>
            Endereço: <span className="text-muted">{loja.endereco}</span>
          </h3>
          <h4>
            Telefone para contato:{" "}
            <span className="text-muted">{loja.telefone}</span>
          </h4>
        </div>
      )}
      {produtos.length > 0 && (
        <div className="mt-4">
          <h5>Produtos cadastrados na loja:</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Nome:</th>
                <th>Preço:</th>
                <th>Quantidade:</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => (
                <tr key={produto.nome}>
                  <td>{produto.nome}</td>
                  <td>{produto.preco}</td>
                  <td>{produto.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {messageNotFound && (
        <h2 className="mt-4 text-center text-danger">Loja não encontrada!</h2>
      )}
    </div>
  );
};

export default LojaInfo;
