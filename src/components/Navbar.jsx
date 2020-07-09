import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/nova-loja">
                Nova Loja
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/novo-produto">
                Novo Produto
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/minhas-lojas">
                Minhas Lojas
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/meus-produtos">
                Meus Produtos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
