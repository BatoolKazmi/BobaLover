import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className='chats'>
            <Chat
                name="Sarah"
                message="Hey! how are you :D"
                timestamp="35 minutes ago"
                pic="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg" />
            <Chat
                name="Ellen"
                message="Hey! how are you :D"
                timestamp="35 minutes ago"
                pic="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg" />
            <Chat
                name="Sandra"
                message="Hey! how are you :D"
                timestamp="35 minutes ago"
                pic="" />
        </div>
    )
}

export default Chats;