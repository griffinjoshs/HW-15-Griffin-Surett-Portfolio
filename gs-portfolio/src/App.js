import React from "react";
// import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar/Navbar";
// import HeroSection from './components/HeroSection/HeroSection'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Contact } from './pages/Contact'

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Contact' exact component={Contact}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
