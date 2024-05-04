// The Header Component -- file is capitalized because it is an component
import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

function Header() {
    return (
        // BEM <<<<
        <div className='header'>
            <PersonIcon className='person icon' />
            <p> BobaTinder 🧋🌸🍧</p>
            <MessageIcon className='message icon' />
        </div>
    )
}

export default Header