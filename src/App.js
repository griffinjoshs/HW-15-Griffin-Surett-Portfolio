import React from "react";
// import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar";
// import HeroSection from './components/HeroSection/HeroSection'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Router basename='/'>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
