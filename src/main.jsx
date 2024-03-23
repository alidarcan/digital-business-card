import React from "react";
import ReactDOM from "react-dom/client";
import Info from "../components/info";
import About from "../components/about";
import Footer from "../components/footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Info/>
    <About/>
    <Footer/>
  </React.StrictMode>
);
