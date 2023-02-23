import React from "react";
import "./App.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import Contact from "./components/contact";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Routes>

      <Welcome />
    </>
  );
};

export default App;
