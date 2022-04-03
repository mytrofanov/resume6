import React from 'react'
import s from './Header.module.css'
import ScalingHireMeAnimatedButton from "../animated/animatedButton/scalingHireMeAnimatedButton";




export const Header = () => {

    return (

        <div className={s.header} id="header">

            <div id="header_title" className={s.header_title}>
                Lets Make Something Great
                <div className={s.header_annotation} id="header_annotation">
                    I’m  Front End Developer that prides ourself on being strategic brand partners and awesome
                    product providers
                </div>
            </div>
            <div className={s.animatedHireMe}>
                <ScalingHireMeAnimatedButton  />
            </div>

        </div>

    )
}
