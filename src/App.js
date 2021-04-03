import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Kipas from "./container/Kipas/Kipas";
import Keranjang from "./container/Kipas/Keranjang";
import Home from "./component/Kipas/Home";
import About from "./component/Kipas/About";

function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">KipasAngin</a>
        <ul className="navbar-nav ml-auto">
          <li>
            <Link to="/list-product" className="nav-link">List Produk</Link>
          </li>
          <li>
            <Link to="/keranjang" className="nav-link">Keranjang</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/list-product" component={Kipas}/>
          <Route path="/keranjang" component={Keranjang}/>
          <Route path="/about" component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;