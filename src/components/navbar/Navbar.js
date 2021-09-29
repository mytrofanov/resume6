import * as React from "react";
import portrait from "../../images/portrait_cr.jpg";
import s from './Navbar.module.css';


export const Navbar = () => {
    return (
        <div>
            <div className={s.navbar}>
                <img alt="Mytrofanov Maxym" src={portrait} id="portrait" className={s.portrait}/>

                <div id="navi_list" className={s.navi_list}>
                    <li id="Home">Home</li>
                    <li id="About">About me</li>
                    <li id="Education">Education</li>
                    <li id="Experience">Work Experience</li>
                    <li id="Skills">Skills</li>
                    <li id="Portfolio">Portfolio</li>
                    <li id="Contacts">Contacts</li>

                </div>
            </div>
        </div>
    )
}