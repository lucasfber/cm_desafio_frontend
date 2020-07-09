import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="row mt-4">
      <div className="col-6">
        <div className="card text-center">
          <div className="card-body">
            <Link to="/minhas-lojas">Minhas Lojas</Link>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card text-center">
          <div className="card-body">
            <Link to="/meus-produtos">Meus Produtos</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
