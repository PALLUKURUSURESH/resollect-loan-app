import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./component/Header";
import Navbar from "./component/NavBar";
import Portfolio from './component/portfolio'
import './App.css'

const App=()=>{
    return(
      <div className="header-container">
        <Header />
      <div className="App">
       <BrowserRouter>
        <Navbar/>
       <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
       </Routes>
       </BrowserRouter>
       </div>
       </div>
    )
}

export default App