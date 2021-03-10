import React, { useState, useRef, useEffect } from "react";
import socket from "socket";
import Scrollable from "components/Scrollable/Scrollable";
import "./Chat.css";

const Chat = () => {
  const endMsgRef = useRef();
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");
  const [history, setHistory] = useState([]);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    socket.on("users", (userList) => {
      setUsers(userList);
      console.log("Setting users");
    });
    socket.on("chatHistory", (hist) => {
      setHistory(hist);
      console.log("Setting history");
    });
  }, []);

  useEffect(() => {
    if (endMsgRef.current) {
      socket.on("chatMsg", (msg) => {
        setHistory((history) => {
          console.log(history);
          return [...history, msg];
        });
        scrollToBottom();
      });
    }
  }, [endMsgRef]);

  const sendMsg = (e) => {
    e.preventDefault();
    if (msg != "") socket.emit("chatMsg", msg);
    setMsg("");
  };

  const scrollToBottom = () => {
    endMsgRef.current.scrollIntoView();
  };

  const onInputChange = (e) => {
    setMsg(e.target.value);
  };

  const renderMessages = () =>
    history.map(({ name, color, msg }, i) => (
      <li className="chatMsg" key={i}>
        <span
          className="chatMsgName"
          style={{ color: `rgb(${color[0]},${color[1]},${color[2]})` }}
        >
          {name}
        </span>
        :&nbsp;<span className="chatMsgText">{msg}</span>
      </li>
    ));

  return (
    <div className="chatContainer">
      <div className="chatHeader">Chat</div>
      <div className="chatSep"></div>
      <div className="chatFlexBox">
        <Scrollable
          className="chatMsgBox"
          scrollColor="rgb(27,27,27)"
          scrollBorder="rgb(55,55,55)"
          scrollWidth="10px"
          scrollRadius="25px"
          transitionDuration="0.5s"
          transitionDelay="1.5s"
        >
          <ul className="chatMsgList">
            {renderMessages()}
            <div ref={endMsgRef} />
          </ul>
        </Scrollable>
      </div>
      <div className="chatInputBox">
        <form onSubmit={sendMsg}>
          <input
            className="chatInput"
            value={msg}
            onChange={onInputChange}
          ></input>
        </form>
      </div>
    </div>
  );
};
export default Chat;
