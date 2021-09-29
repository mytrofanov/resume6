import React from 'react'
import s from './Portfolio.module.css'
import {Work} from './Work'
import {Grid} from "@material-ui/core";


export const Portfolio = (props) => {
    return (
        <div className={s.PortfolioBlock}>
            <div>
                Portfolio
            </div>
            <Grid container spacing={5}>
                {props.MyWorks.map(item =>

                    <Work key={item.id}
                          image={item.image}
                          name={item.name}
                          description={item.description}
                          reference={item.reference}
                    />
                )
                }
            </Grid>

        </div>
    )

}