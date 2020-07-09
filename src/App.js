import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormProduto from "./pages/FormProduto";
import "./App.css";
import Lojas from "./pages/Lojas";
import FormLoja from "./pages/FormLoja";
import MeusProdutos from "./pages/MeusProdutos";
import Navbar from "./components/Navbar";
import EditarLoja from "./pages/EditarLoja";
import Home from "./pages/Home";
import EditarProduto from "./pages/EditarProduto";
import LojaInfo from "./pages/LojaInfo";
import ProdutoInfo from "./pages/ProdutoInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/edit/lojas/:id" component={EditarLoja} />
          <Route exact path="/edit/produtos/:id" component={EditarProduto} />
          <Route exact path="/lojas/:id" component={LojaInfo} />
          <Route exact path="/produtos/:id" component={ProdutoInfo} />
          <Route path="/nova-loja" component={FormLoja} />
          <Route path="/novo-produto" component={FormProduto} />
          <Route path="/minhas-lojas" component={Lojas} />
          <Route path="/meus-produtos" component={MeusProdutos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
