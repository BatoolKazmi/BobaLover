import React from 'react';
import "./SwipeButtons.css";

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';


function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='repeat'>
                <ReplayIcon />
            </IconButton>
            <IconButton className='left'>
                <CloseIcon />
            </IconButton>
            <IconButton className='star'>
                <StarIcon />
            </IconButton>
            <IconButton className='right'>
                <FavoriteIcon />
            </IconButton>
            <IconButton className='lightning'>
                <FlashOnIcon />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;