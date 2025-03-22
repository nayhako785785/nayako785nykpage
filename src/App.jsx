import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import unchiLogo from '/shinningunchi.svg'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css'

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        This is card.
      </Typography>
      <Typography variant="h5" component="div">
        Unchi
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>secondary unchi</Typography>
      <Typography variant="body2">
        unchi
        <br />
        {'"unchi"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>nayako785 homepage</h1>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={unchiLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={unchiLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>

        <p className="read-the-unchi">
          unchi is load.
        </p>
    </>
  )
}

export default App

