import React from "react";
import Navbar from "../../components/NavBar";
import IconBar from "../../components/IconBar";
import "./Home.css";


const Home = () => {

  return (
    <div className="main">
      <Navbar />
      <IconBar />
      <div className="home-writing">
        <h1>Hi, I'm <span className="name">Renee</span>.</h1>
        <p>Junior Software Developer.</p>
      </div>
    </div>
  );
};

export default Home;