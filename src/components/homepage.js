import React from "react";
import "../index.css";
import Navbar from "./navbar";
const Homepage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="HomepageCenter">
        <div className="hcLeft">
          <h1>Not just another</h1>
          <h1>football club</h1>
          <div className="hclRowTN">
            <div className="hclrtickets">TICKETS</div>
            <div className="hclrnews">NEWS</div>
          </div>
          <div className="hclRowDR">
            <span>TuskerFC Anthem Ignites New Dreams</span>
            <div className="btnContainer">
              <img alt="btn" src="./assets/images/Button.png"></img>
            </div>
          </div>
        </div>
        <div className="hcRight">
          <img alt="kick" src="./assets/images/homepagepic.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
