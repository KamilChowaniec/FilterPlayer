import React, { useState } from "react";
import "./Home.css";
import ikonka from "./img/ikonka.png";

const Home = () => (
  <div className="homeBackgroundContainer">
    <div className="homeMiddleContainer">
      <div className="homeMiddleText">
        <div className="homeMiddleBox">
          <h1>Welcome to FilterPlayer!</h1>
          <img src={ikonka}></img>
        </div>
        <button type="homeCreateRoomButton">Create Room</button>
      </div>
    </div>
    <div className="homePublicRoomsContainer">
    </div>
  </div>
);
export default Home;
