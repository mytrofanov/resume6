import React from 'react'
import s from './Header.module.css'
import ScalingHireMeAnimatedButton from "../animated/animatedButton/scalingHireMeAnimatedButton";
import AnimatedTitle from "../animated/animatedTitle/animatedTitle";


export const Header = ({setLanguage, language}) => {

    return (

        <div className={s.header} id="header">
            {language === 'English' &&
                <div className={s.flagOfUkraine} onClick={() => {
                    setLanguage('Ukrainian')
                }}/>}
            {language === 'Ukrainian' &&
                <div className={s.flagOfGreatBritain} onClick={() => {
                    setLanguage('English')
                }}/>}


            <div id="header_title" className={s.header_title}>
                <AnimatedTitle language={language}/>
                <div className={s.header_annotation} id="header_annotation">
                    {language === 'English' && 'A free people ought not only be armed and disciplined,\n' +
                        '                    but they should have sufficient arms and ammunition to maintain a status\n' +
                        '                    of independence from any who might attempt to abuse them'}
                    {language === 'Ukrainian' && 'Вільні люди не тільки мають бути озброєні та дисципліновані, ' +
                        'зброї та амуніції повинно бути достатньо для захисту своєї свободи від будь-кого,' +
                        ' хто намагатиметься забрати її'}

                </div>
            </div>
            <div className={s.animatedHireMe}>
                <ScalingHireMeAnimatedButton language={language}/>
            </div>

        </div>

    )
}
