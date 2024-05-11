// The Header Component -- file is capitalized because it is an component
import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { IconButton } from '@mui/material';

// Can use function or ES6 arrow function
function Header() {
    return (
        // BEM <<<<
        <div className='header'>
            <IconButton>
                <PersonIcon className='person icon' />
            </IconButton>
            <p> Tinder 🔥</p>
            <IconButton>
                <MessageIcon className='message icon' />
            </IconButton>
        </div>
    );
}

export default Header;