import React from "react";
import Header from "./components/header";
import "./App.css";
import About  from "./components/about";
const App = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <About />

      {/* <BrowserRouter>
  
     
     <Route exact path="/" component={Header} />

  
  
  
  </BrowserRouter> */}
    </>
  );
};

export default App;
