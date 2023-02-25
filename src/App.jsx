import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Welcome from "./components/welcome";
import About from "./components/about";
import Contact from "./components/contact";
import MyProjects from "./components/myProjects";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route exact path="/myProjects" element={<MyProjects />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
