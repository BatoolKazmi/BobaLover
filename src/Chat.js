import React from 'react';
import Avatar from '@mui/material/Avatar';

function Chat(name, message, profilePic, timestamp) {
    return (
        <div className='chat'>
            <Avatar className="chat_image" alt={name} src={profilePic} />
        </div>
    )
}

export default Chat;