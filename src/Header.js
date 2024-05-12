// The Header Component -- file is capitalized because it is an component
import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";

// Can use function or ES6 arrow function
function Header() {
    return (
        // BEM <<<<
        <div className='header'>
            <IconButton>
                <PersonIcon className='person icon' />
            </IconButton>
            {/* Adding Linking to main page (with the cards) */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <p>Tinder 🔥</p>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <MessageIcon className='message icon' />
                </IconButton>
            </Link>
        </div>
    );
}

export default Header;