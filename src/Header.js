// The Header Component -- file is capitalized because it is an component
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

function Header() {
    return (
        <div>
            <PersonIcon />
            <h2>I am a header</h2>
            <MessageIcon />
        </div>
    )
}

export default Header