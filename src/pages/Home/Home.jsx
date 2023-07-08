import React from "react";
import Navbar from "../../components/NavBar";
import IconBar from "../../components/IconBar";
import Experience from "../Animations/Experience";
import "./Home.css";


const Home = () => {

  return (
    <div className="main">
      <Navbar />
      <IconBar />
      <Experience />
    </div>
  );
};

export default Home;