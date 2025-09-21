import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { collection, serverTimestamp, query, where, orderBy, onSnapshot, addDoc } from "firebase/firestore";
import "../styles/chat.css";
import { RANDOM_FACTOR } from "@firebase/util";

export const Chat = (props) => {
    const {room} = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesRef = collection(db, "messages");

    useEffect(() => {
        const q = query(
            messagesRef,
            where("room", "==", room),
            orderBy("createdAt")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });

        return () => unsubscribe();
    }, [room]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            userId: auth.currentUser.uid,
            room,
        });
        setNewMessage("");
    };

    return (
        <div className="chat-app">
            <div className="header">Welcome to {room} room</div>
            <div className="messages">
            {messages.map((message) => (
                <div key={message.id}>
                    <h1>{message.text}</h1>
                    <span className="user">{message.user}</span>
                    {message.text}
                </div>
            ))}
            </div>
            <form onSubmit={handleSubmit} className="new-message-form">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    className="new-message-input"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit" className="send-button">Send</button>
            </form>
        </div>
    );
}
