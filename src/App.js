import React, { useState, useRef } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import { signOut } from "firebase/auth";   // ✅ fix here
import { auth } from "./firebase-config";
import { Chat } from "./components/chat";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState("");

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom("");
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <label htmlFor=""> Enter Room Name:</label>
          <input
            ref={roomInputRef}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button
            onClick={() => {
              if (roomInputRef.current.value !== "") {
                setRoom(roomInputRef.current.value);
              }
            }}
          >
            Enter Room
          </button>
        </div>
      )}
      <div className="signout">
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default App;
