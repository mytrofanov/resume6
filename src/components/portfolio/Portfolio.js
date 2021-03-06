import React, {useContext} from 'react'
import s from './Portfolio.module.css'
import {Work} from './Work'
import {Grid} from "@material-ui/core";
import {MyWorks} from './data'
import AnimatedPortfolio from "../animated/animatedPortfolio/animatedPortfolio";
import {Context} from "../../App";


export const Portfolio = () => {
    let language = useContext(Context);

    return (
        <div className={s.PortfolioBlock}>
            <div className={s.PortfolioName}>
                {language === 'English'&& 'Portfolio' }
                {language === 'Ukrainian'&& 'Портфоліо' }
            </div>
            <div className={s.AnimatedPortfolioBlock}>
                <AnimatedPortfolio/>
            </div>
            <Grid container spacing={5}>

                {MyWorks.map(item =>

                    <Work key={item.id}
                          image={item.image}
                          name={item.name}
                          description={item.description}
                          reference={item.reference}
                          print={'This is work props ====================='}
                    />
                )
                }
            </Grid>


        </div>
    )

}
