import s from "./about/About.module.css";
import {useContext} from "react";
import {Context} from "../App";
import JSLogo from './../images/Javascript_badge.svg'
import reduxLogo from './../images/Redux.png'
import NodeJsLogo from './../images/Node.js_logo.svg'
import MobXLogo from './../images/mobx.svg'
import SequelizeLogo from './../images/sequelizejs-ar21.svg'
import WebpackLogo from './../images/webpack_plain_logo_icon_146297.svg'
import HTML5Logo from './../images/CSS3_and_HTML5_logos_and_wordmarks.svg'
import BootstrapLogo from './../images/Bootstrap_logo.svg'
import MaterialUILogo from './../images/material-ui-1.svg'
import GitLogo from './../images/Git-logo.svg'
import PostgreSQLLogo from './../images/Postgresql_elephant.svg'
import ReactLogo from './../images/React-icon.svg'
import TypeScriptLogo from './../images/Typescript_logo_2020.svg'
import Docker from './../images/docker-icon-svgrepo-com.svg'
import Mongo from './../images/MongoDB_Logo.svg'
import AnimatedLogo from "./animated/animatedLogo";


const logos = [
    { text:'Javascript Logo', pict: JSLogo}, { text:'React Logo', pict: ReactLogo},
    { text:'Redux Logo', pict: reduxLogo},{ text:'TypeScript Logo', pict: TypeScriptLogo},
    { text:'NodeJs Logo', pict: NodeJsLogo},
    {  text:'Mobx Logo', pict: MobXLogo},
    { text:'Sequelize Logo', pict: SequelizeLogo},
    {  text:'PostgreSQL Logo', pict: PostgreSQLLogo},
    { text:"Webpack Logo", pict: WebpackLogo},
    {  text:"HTML5 & CSS3 Logo", pict: HTML5Logo},
    { text:"BootstrapLogo Logo", pict: BootstrapLogo},
    { text:"Material UI Logo", pict: MaterialUILogo},
    {  text:"Git Logo", pict: GitLogo},
    {  text:"Docker Logo", pict: Docker},
    {  text:"Mongo Logo", pict: Mongo},
]



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
                        HTML5/CSS3, Bootstrap, Material UI, Version Control/Git, Docker, Mongodb
                    </div>
                </div>
                <div className={s.skillsLogo}>
                    {logos.map((e, idx) =>
                        <AnimatedLogo logoToAnimate={e.pict} key={idx} altDescription={e.text}
                        />
                    )}

                </div>

            </div>

        </div>
    )
}
