import s from "./about/About.module.css";
import {useContext} from "react";
import {Context} from "../App";
import JSLogo from './../images/Javascript_badge.svg'
import reduxLogo from './../images/Redux.png'
import NodeJsLogo from './../images/Node.js_logo.svg'
import MobXLogo from './../images/react-mobx-typescript.png'
import SequelizeLogo from './../images/sequelizejs-ar21.svg'
import WebpackLogo from './../images/webpack_plain_logo_icon_146297.svg'
import HTML5Logo from './../images/CSS3_and_HTML5_logos_and_wordmarks.svg'
import BootstrapLogo from './../images/Bootstrap_logo.svg'
import MaterialUILogo from './../images/material-ui-1.svg'
import GitLogo from './../images/Git-logo.svg'
import PostgreSQLLogo from './../images/Postgresql_elephant.svg'
import 'animate.css';

export const SkillPage = () => {
    let language = useContext(Context)


    return (
        <div>
            <div className={s.Skills}>
                <div className={s.SkillsHeader}>
                    {language === 'English' && 'My Skills'}
                    {language === 'Ukrainian' && 'Мої Навички'}

                    {/*underline*/}
                    <div className={s.Divider}/>
                    {/*underline*/}
                </div>

                <div className={s.SkillsCol}>
                    <div className={s.SkillsSlider}>
                        Javascript, React+Redux, MobX, NodeJs, TypeScript, Sequelize, PostgreSQL, Webpack,
                        HTML5/CSS3, Bootstrap, Material UI, Version Control/Git
                    </div>
                </div>
                <div className={s.skillsLogo}>

                    <img className={s.logos} src={JSLogo} alt="Javascript Logo"/>
                    <img className={s.logos} src={reduxLogo} alt="Redux Logo"/>
                    <img className={s.logos} src={MobXLogo} alt="Mobx-React Logo"/>
                    <img className={s.logos} src={PostgreSQLLogo} alt="PostgreSQL Logo"/>
                    <img className={s.logos} src={NodeJsLogo} alt="Node JS Logo"/>

                    <img className={s.logos} src={SequelizeLogo} alt="Sequelize Logo"/>
                    <img className={s.logos} src={WebpackLogo} alt="Webpack Logo"/>
                    <img className={s.logos} src={HTML5Logo} alt="HTML5 & CSS3 Logo"/>
                    <img className={s.logos} src={BootstrapLogo} alt="BootstrapLogo Logo"/>
                    <img className={s.logos} src={MaterialUILogo} alt="Material UI Logo"/>
                    <img className={s.logos} src={GitLogo} alt="Git Logo"/>

                </div>

            </div>

        </div>
    )
}
