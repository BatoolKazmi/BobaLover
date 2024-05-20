import React from 'react';
import Avatar from '@mui/material/Avatar';

function Chat(name, message, timestamp, pic) {
    return (
        <div className='chat'>
            <Avatar className="chat_image" alt={name} src={pic} />
        </div>
    )
}

export default Chat;