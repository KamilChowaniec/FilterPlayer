const uniqid = require("uniqid");

module.exports = ({ rooms }, io) => (sock, next) => {
  console.log("Socket connected!");
  sock.on("disconnect", () => {
    console.log("Socket disconnected!");
  });

  // sock.on("create room", () => {
  //   let { rooms } = data;
  //   let id = uniqid.time("Room#");
  //   rooms[id] = new Room(id);
  // });

  sock.on("join room", ({ id, name }) => {
    if (rooms.hasOwnProperty(id)) {
      let room = rooms[id];
      room.addPlayer(sock, name);
      io.to(sock.id).emit("room joined");
    } else io.to(sock.id).emit("room not joined", id);
  });

  // sock.on("drawing", (data) => {
  //   console.log(data);
  //   sock.broadcast.emit("drawing", data);
  // });

  // sock.on("message", (msg) => {
  //   history.push(msg);
  //   io.emit("message", msg);
  // });

  next();
};
