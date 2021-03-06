import React from "react";
import Navbar from "components/Navbar/Navbar.jsx";
import Playlist from "components/Playlist/Playlist.jsx";
import Videoplayer from "components/Videoplayer/Videoplayer.jsx";
import Chat from "components/Chat/Chat.jsx";

const Room = () => (
  <div className="container">
    <Navbar />
    <div className="">
      <Playlist />
      <Videoplayer />
      <Chat />
    </div>
  </div>
);

export default Room;
