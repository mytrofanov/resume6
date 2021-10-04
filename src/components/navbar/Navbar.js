import * as React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <div>
            <div className={s.navbar}>

                {/*<img alt="Mytrofanov Maxym" src={portrait} id="portrait" className={s.portrait}/>*/}

                <div className={s.portraitSubscription}>
                    <span className={s.portraitSubscriptionName}>
                        Mytrofanov Maxym Front-end Developer
                    </span>
                </div>
                <div id="navi_list" className={s.navi_list}>
                    <li id="Home">
                        <NavLink to="/about" activeClassName={s.ActiveLink}>Home</NavLink>
                    </li>
                    <li id="About">
                        <NavLink to="/about" activeClassName={s.ActiveLink}>About me</NavLink>
                    </li>
                    <li id="Education">
                        <NavLink to="/about" activeClassName={s.ActiveLink}>Education</NavLink>
                    </li>
                    <li id="Experience">
                        <NavLink to="/about" activeClassName={s.ActiveLink}>Work Experience</NavLink>
                    </li>
                    <li id="Skills">
                        <NavLink to="/about" activeClassName={s.ActiveLink}>Skills</NavLink>
                    </li>
                    <li id="Portfolio">
                        <NavLink to="/portfolio" activeClassName={s.ActiveLink}>Portfolio</NavLink>
                        </li>
                    <li id="Contacts">
                        <NavLink to="/about" activeClassName={s.ActiveLink}>Contacts</NavLink>
                        </li>

                </div>
            </div>
        </div>
    )
}