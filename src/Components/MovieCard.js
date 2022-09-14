
import * as React from 'react';
import { CardMedia, Grid } from '@mui/material';
import axios from 'axios'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function MovieCard(props) {

    useEffect((id) => {

    })
    const { moviedata } = props;
    console.log(moviedata.Search, 'data')



    return (
        <>
            <Grid container>
                {moviedata.map((elem) => (
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <Grid container >
                                <Grid item xs={12} style={{ width: "300px", height: "300px" }}>
                                    <img src={elem.Poster} style={{ width: "100%", height: "100%" }} />

                                </Grid>
                            </Grid>


                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    MovieName:{elem.Title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                               
                              <Link exact to={`/moviedetail/${elem.imdbID}`} > Read More</Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </>
    );
}
