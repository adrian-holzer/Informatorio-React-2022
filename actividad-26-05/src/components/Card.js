import React from 'react'
import '../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';


function Cards() {

    
  return (

    

   <>
    
    <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image= {process.env.PUBLIC_URL + "/img/blog6.jpg"}
          alt="green iguana"
        />
        <CardContent  >
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

        </CardContent>
       

      </CardActionArea>
      <Button className='btnIrCurso'  color="primary">Ir al Curso</Button>
    </Card>
    </>
  )
}

export default Cards;