import { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import unchiLogo from '/shinningunchi.svg';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import unchimusicLogo from '/unchi_music.svg';
import unchipictLogo from '/unchi_picture.svg';
import unchipostLogo from '/unchi_post.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import './App.css'

const card_music = (
  <React.Fragment>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography>
          Compose music
        </Typography>
        <a href="https://youtube.com/channel/UC6uK8bFigWAA02OTIvYpXww?si=EnDFlKKmbq9ek7nL" target="_blank">
          <img src={unchimusicLogo} className="logo1" alt="unchimusic" />
        </a>
      </CardContent>
    </Box>
  </React.Fragment>
);

const card_draw = (
  <React.Fragment>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography>
          draw picture 
        </Typography>
        <a href="https://www.pixiv.net/users/85787762" target="_blank">
          <img src={unchipictLogo} className="logo2" alt="unchipict" />
        </a>
      </CardContent>
    </Box>
  </React.Fragment>
);
const card_diary = (
  <React.Fragment>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography>
          post diary 
        </Typography>
        <a href="https://x.com/ko757ka" target="_blank">
          <img src={unchipostLogo} className="logo3" alt="unchipict" />
        </a>
      </CardContent>
    </Box>
  </React.Fragment>
);

function App() {
  const matches = useMediaQuery('(min-width:600px)');
  if (matches) {
    return (
      <>
        <h1>nayako785 homepage</h1>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <img src={unchiLogo} className="logo" alt="Vite logo" />
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <Typography align='left' >
                Hello! {matches}
              </Typography>
              <Typography align='left'>
                My name is nayako785. 
              </Typography>
              <Typography align='left'>
                shinning poop.
              </Typography>
            </Box>
          </Box>
  
          <Box sx={{ minWidth: 600, display: 'flex', borderRadius: 1, flexDirection: 'row', margin: 2 }}>
            <Card sx={{ display: 'flex', margin: 1 }}>{card_music}</Card>
            <Card sx={{ display: 'flex', margin: 1 }}>{card_draw}</Card>
            <Card sx={{ display: 'flex', margin: 1 }}>{card_diary}</Card>
          </Box>
      </>
    )
  } else {
    return (
      <>
        <h1>nayako785 homepage</h1>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={unchiLogo} className="logo" alt="Vite logo" />
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <Typography align='left' >
                Hello! {matches}
              </Typography>
              <Typography align='left'>
                My name is nayako785. 
              </Typography>
              <Typography align='left'>
                shinning poop.
              </Typography>
            </Box>
          </Box>
  
          <Box sx={{ minWidth: 600, display: 'flex', borderRadius: 1, flexDirection: 'column', margin: 2 }}>
            <Card sx={{ display: 'flex', margin: 1 }}>{card_music}</Card>
            <Card sx={{ display: 'flex', margin: 1 }}>{card_draw}</Card>
            <Card sx={{ display: 'flex', margin: 1 }}>{card_diary}</Card>
          </Box>
      </>
    )
  }

}

export default App

