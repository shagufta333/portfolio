import React from "react";
import Header from "./components/header";
import "./App.css";
import Welcome  from "./components/welcome";
import About from "./components/about";
import Contact from "./components/contact";
import { Routes, Route  } from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <div className="container">//</div> */}
        <Header />
        <Routes>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/about" component={About}></Route>
        
        <Route exact path="/contact" component={Contact}></Route>
        </Routes>

        <Welcome />
      
        
      

      {/* <BrowserRouter>
  
     
     <Route exact path="/" component={Header} />

  
  
  
  </BrowserRouter> */}
    </>
  );
};

export default App;
