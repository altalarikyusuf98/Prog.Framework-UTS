import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Setrika from "./container/Kipas/Kipas";
import Keranjang from "./container/Kipas/Keranjang";

function App() {
  return (
    <Router>
      <div>

        <ul className="menu">
          <li>
            <Link to="/"><span>Home</span></Link>
          </li>
          <li>
            <Link to="/list-product"><span>List Produk</span></Link>
          </li>
          <li>
            <Link to="/keranjang"><span>Keranjang</span></Link>
          </li>
          <li>
            <Link to="/about"><span>About</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list-product">
            <Products />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <center><h2>WELCOME</h2></center>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <center><h2>Biodata</h2></center>
      
    </div>
  );
}

function Products() {
  return (
    <div>
      <Setrika />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

export default App;
