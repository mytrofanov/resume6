import React from 'react'
import {Card, Grid, CardMedia, CardContent, Typography} from "@material-ui/core";


export const Work = (props) => {
    return (
        <Grid item xs={12} md={12}>
            <Card>
                <CardMedia
                    src={props.image}
                    title={props.id}
                    sx={{height: 140}}
                    id={props.image} alt={props.id}/>
                <CardContent>
                    <Typography variant="h5"
                    component="h3">{props.name}</Typography>
                    <Typography variant="h6" >{props.description}</Typography>
                    <Typography variant="body1">{props.reference}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
