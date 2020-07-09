import React from "react";
import { Link } from "react-router-dom";

const ProdutoItem = ({ produto, onDelete }) => {
  return (
    <tr>
      <td>
        <Link className="" to={`/produtos/${produto.id}`}>
          {produto.nome}
        </Link>
      </td>
      <td>{produto.nome}</td>
      <td>{produto.preco}</td>
      <td>
        <Link className="btn btn-primary" to={`/edit/produtos/${produto.id}`}>
          Editar
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(produto.id)}>
          Excluir
        </button>
      </td>
    </tr>
  );
};

export default ProdutoItem;
