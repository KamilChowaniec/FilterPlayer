import React, { useState } from "react";
import "./Home.css";
import ikonka from "./img/ikonka.png";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="homeBackgroundContainer">
    <div className="homeMiddleContainer">
      <div className="homeMiddleText">
        <div className="homeMiddleBox">
          <img src={ikonka}></img>
          <h1>Welcome to FilterPlayer!</h1>
        </div>
      </div>
      <button type="homeCreateRoomButton">
        <Link to="/Room/test">Create Room</Link>
      </button>
    </div>
    <div className="homePublicRoomsContainer"></div>
  </div>
);
export default Home;
