import React from "react";
import { Link } from "react-router-dom";

const LojaItem = ({ loja, onDelete }) => {
  return (
    <tr>
      <td>
        <Link className="" to={`/lojas/${loja.id}`}>
          {loja.nome}
        </Link>
      </td>
      <td>{loja.endereco}</td>
      <td>{loja.telefone}</td>
      <td>
        <Link className="btn btn-success" to={`/add/produtos/${loja.id}`}>
          Adicionar produtos a loja
        </Link>
      </td>
      <td>
        <Link className="btn btn-primary" to={`/edit/lojas/${loja.id}`}>
          Editar
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(loja.id)}>
          Excluir
        </button>
      </td>
    </tr>
  );
};

export default LojaItem;
