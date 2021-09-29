import React from 'react'
import {Card, Grid, CardMedia, CardContent, Typography, CardActions} from "@material-ui/core";
import Button from "@mui/material/Button";


export const Work = (props) => {
    const ref = props.reference
    return (
        <Grid item xs={12} md={12}>
            <Card>
                <CardMedia
                    src={props.image}
                    component="img"
                    title={props.id}
                    sx={{width: 700}}
                    id={props.image} alt={props.id}/>
                <CardContent>
                    <Typography variant="h5"
                    component="h3">{props.name}</Typography>
                    <Typography variant="h6" >{props.description}</Typography>
                    <CardActions>
                    <Button
                        variant="contained"
                        value="<?php the_field('Открыть проект');?>"
                        onClick={()=>{window.open(ref)}}
                         >Открыть проект</Button>
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}
