import React from 'react'
import {Card, Grid, CardMedia, CardContent, Typography, CardActions} from "@material-ui/core";
import Button from "@mui/material/Button";

export const Work = (props) => {
    const ref = props.reference
    return (

        <Grid item xs={12} md={6}>
            <Card >
                <CardMedia
                    image={props.image}
                    component="img"
                    title={props.id}
                    alt={props.id}
                    id={props.image}/>
                <CardContent >
                    <Typography variant="h5"
                    component="h3">{props.name}</Typography>
                    <Typography variant="h6"

                    >{props.description}</Typography>
                    <CardActions>
                    <Button

                        variant="contained"
                        value="<?php the_field('Открыть проект');?>"
                        onClick={()=>{window.open(ref)}}
                         >Open project</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>

    )
}
