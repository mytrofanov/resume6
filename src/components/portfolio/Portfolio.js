import React from 'react'
import s from './Portfolio.module.css'
import {Work} from './Work'
import {Grid} from "@material-ui/core";
import resume from "../../images/resume.jpg";
import landing from "../../images/landing.jpg";
import samurai from "./samurai.jpg";
import vanila from "../../images/vanilaJS.jpg";

export const Portfolio = () => {
    const MyWorks = [{
        id: 'Resume',
        image: resume,
        name: 'Resume',
        description: 'This site was made using HTML5, CSS3, React, JavaScript, Material UI, react-hook-form, Git',
        reference: 'https://mytrofanov.github.io/second/#/profile'
    }, {
        id: 'Landing Page',
        image: landing,
        name: 'Landing Page',
        description: 'This Landing Page was made using HTML5, CSS3, JavaScript, Git',
        reference: 'https://mytrofanov.github.io/wpd/index.html#'
    },{
        id: 'Social Network',
        image: samurai,
        name: 'The social-network website',
        description: 'This Social Network was build using React, Redux, JavaScript, TypeScript, CSS, Ajax, API, ' +
            'cookie, react-hook-form, Git',
        reference: 'https://mytrofanov.github.io/second/#/profile'
    },{
        id: 'VanillaJS',
        image: vanila,
        name: 'VanillaJS',
        description: 'This project was made using only Vanilla Javascript, HTML5, CSS3 and Git',
        reference: 'https://mytrofanov.github.io/Tasks/'
    }
    ]

    return (
        <div className={s.PortfolioBlock}>
            <div className={s.PortfolioName}>
                Portfolio
            </div>
            This is portfolio
            <Grid container spacing={5}>
                {MyWorks.map(item =>

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