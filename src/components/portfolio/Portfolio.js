import React from 'react'
import s from './Portfolio.module.css'
import samurai from '/src/images/samurai.jpg'


export const Portfolio = () => {
        return (
        <div className={s.PortfolioBlock}>

            Portfolio

            <div className={s.resume} id="resume">
                <img src={samurai} className={s.samurai} id="samurai" alt="Социальная сеть"/>
                <div className={s.name}>Social Network</div>
                <div className={s.description}>Social Network was made using React, Redux, React-Redux, Typescript </div>
                <div className={s.reference}>View Project </div>
            </div>

        </div>
    )

}