import * as React from "react";
import s from './Navbar.module.css';
import ScalingHomeAnimatedButton from "../animated/animatedButton/homeAnimatedButton";
import ScalingEducationAnimatedButton from "../animated/animatedButton/educationAnimatedButton";
import ScalingExperienceAnimatedButton from "../animated/animatedButton/workExperienceAnimatedButton";
import ScalingSkillsAnimatedButton from "../animated/animatedButton/skillsAnimatedButton";
import ScalingPortfolioAnimatedButton from "../animated/animatedButton/portfolioAnimatedButton";
import ScalingContactsAnimatedButton from "../animated/animatedButton/contactsAnimatedButton";
import AnimatedPict from "../animated/animatedPict/animatedPict";


export const Navbar = () => {

    return (
        <div>
            <div className={s.navbar}>

                {/*<img alt="Mytrofanov Maxym" src={portrait} id="portrait" className={s.portrait}/>*/}

                <div className={s.portraitSubscription}>
                    {/*<span className={s.portraitSubscriptionName}>*/}
                    {/*    Mytrofanov Maxym Front-end Developer*/}
                    {/*</span>*/}
                    <AnimatedPict/>

                </div>
                <div id="navi_list" className={s.navi_list}>
                    <div>
                        <li id="Home">
                            <ScalingHomeAnimatedButton/>
                        </li>
                    </div>

                    <li id="Education">
                        <ScalingEducationAnimatedButton/>
                    </li>
                    <li id="Experience">
                        <ScalingExperienceAnimatedButton/>
                    </li>
                    <li id="Skills">
                        <ScalingSkillsAnimatedButton/>
                    </li>
                    <li id="Portfolio">
                        <ScalingPortfolioAnimatedButton/>
                    </li>
                    <li id="Contacts">
                        <ScalingContactsAnimatedButton/>
                    </li>

                </div>
            </div>
        </div>
    )
}
