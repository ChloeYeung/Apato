import React from "react";
import Card from "react-bootstrap/Card";
import SupportNavbar from "../Components/SupportNavbar"

export default function SupportChat() {
  return (
    <>
    <SupportNavbar/>
      <div id="chatty">
        <button id="join">Join a room</button>

        <div id="chat-window">
          <div id="output"></div>
        </div>

        <div id="echo">
          <p>&nbsp;</p>
        </div>
        <input type="text" id="handle" placeholder="ID" />
        <input type="text" id="message" placeholder="Message" />
        <button id="send">Send</button>
      </div>
    </>
  );
}
