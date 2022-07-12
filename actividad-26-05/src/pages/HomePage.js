import React from 'react'
import '../App.css'
import Header from '../components/Header'
import Card from '../components/Card'
import Grid from '@mui/material/Grid';


function HomePage() {
    const [spacing, setSpacing] = React.useState(10);

  return (

    <>
<Header></Header>


<Grid item xs={12} m={10} pt={2}>
      <Grid container justifyContent="center" spacing={spacing}>
        {[0, 1, 2,3,4,5,6,7,8].map((value) => (


          <Grid key={value} item>
            <Card></Card>


          </Grid>
        ))}
      </Grid>
    </Grid>
    
    </>
  )
}

export default HomePage