import React from 'react'
import s from './Portfolio.module.css'
import {Work} from './Work'
import {Grid} from "@material-ui/core";
import {MyWorks} from './data'


export const Portfolio = () => {


    return (
        <div className={s.PortfolioBlock}>
            <div className={s.PortfolioName}>
                Portfolio
            </div>
           <Grid container spacing={5}>

                {MyWorks.map(item =>

                    <Work key={item.id}
                          image={item.image}
                          name={item.name}
                          description={item.description}
                          reference={item.reference}
                          git={item.git}
                          print={'This is work props ====================='}
                    />
                )
                }
            </Grid>

        </div>
    )

}