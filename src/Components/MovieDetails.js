import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { Card, Grid } from '@mui/material';

const MovieDetails = () => {
    const [data, setdata] = useState([])
    const { id } = useParams()
    useEffect(() => {
        movieDetails()
    }, [])

    const movieDetails = () => {
        axios.get(`http://www.omdbapi.com/?apiKey=69b4cbe5&i=${id}&Plot=full`)
            .then((res) => {
                console.log(res.data, "datatata")
                setdata(res.data)
            })
    }

    const { Title, Actors, BoxOffice, Country, Language, Poster, Released, Runtime, imdbRating } = data


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80vh", width: "100%", background: 'black' }} >
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                {/* <Grid items xs={3}></Grid> */}

                <Grid items xs={3} style={{ width: "300px", height: "300px", paddingRight: "25px" }}>
                    <img src={Poster} style={{ height: "100%", width: "100%" }} />
                </Grid>
                <Grid items xs={6}>
                    <Grid container>
                        <Grid item xs={12} style={{ marginBottom: '20px', color: 'white' }}>
                            <h2>MovieTitle :{Title}</h2>
                        </Grid>
                        <Grid items xs={3}>
                            <Card sx={{ maxWidth: 345, height: "100px", marginRight: "15px", background: "black", border: "1px solid white", color: "white" }}>
                                ActorName:{Actors}
                            </Card>
                        </Grid>
                        <Grid items xs={3}>
                            <Card sx={{ maxWidth: 345, height: "100px", marginRight: "15px", background: "black", border: "1px solid white", color: "white" }}>
                                BoxOffice:{BoxOffice}
                            </Card>
                        </Grid>
                        <Grid items xs={3}>
                            <Card sx={{ maxWidth: 345, height: "100px", marginRight: "15px", background: "black", border: "1px solid white", color: "white" }}>
                                Country:{Country}
                            </Card>
                        </Grid>
                        <Grid items xs={3}>
                            <Card sx={{ maxWidth: 345, height: "100px", marginRight: "15px", background: "black", border: "1px solid white", color: "white" }}>
                                Language:{Language}
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid items xs={12} style={{ color: 'white', marginTop: '10px' }}>
                            Released:{Released}

                        </Grid>
                        <Grid items xs={12} style={{ color: 'white', marginTop: '10px' }}>
                            Runtime:{Runtime}

                        </Grid>
                        <Grid items xs={12} style={{ color: 'white', marginTop: '10px' }}>
                            imdbRating:{imdbRating}
                        </Grid>

                    </Grid>
                </Grid>



            </Grid>

        </div>
    )
}

export default MovieDetails