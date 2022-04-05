import React from 'react'
import s from './Header.module.css'
import ScalingHireMeAnimatedButton from "../animated/animatedButton/scalingHireMeAnimatedButton";
import AnimatedTitle from "../animated/animatedTitle/animatedTitle";




export const Header = () => {

    return (

        <div className={s.header} id="header">
            <div className={s.flagOfUkraine}/>
            <div id="header_title" className={s.header_title}>
                <AnimatedTitle/>
                <div className={s.header_annotation} id="header_annotation">
                    A free people ought not only be armed and disciplined,
                    but they should have sufficient arms and ammunition to maintain a status
                    of independence from any who might attempt to abuse them
                </div>
            </div>
            <div className={s.animatedHireMe}>
                <ScalingHireMeAnimatedButton  />
            </div>

        </div>

    )
}
