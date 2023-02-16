import React from "react";
import Header from "./components/header";
import "./App.css";
import Welcome  from "./components/welcome";
const App = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Welcome />

      {/* <BrowserRouter>
  
     
     <Route exact path="/" component={Header} />

  
  
  
  </BrowserRouter> */}
    </>
  );
};

export default App;
