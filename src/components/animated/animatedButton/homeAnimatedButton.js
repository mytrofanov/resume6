import React, {useContext, useRef, useState} from "react";
import { useSpring, animated, config } from "@react-spring/web";
import s from './style/scalingAnimatedHomeButton.module.scss'
import {NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom"
import {Context} from "../../../App";

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
];
const trans = (x, y, s) =>
    `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function ScalingHomeAnimatedButton() {
    let language = useContext(Context);
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const props = useSpring({ xys, config: config.gentle});
    const sampleLocation = useLocation();

    return (
        <div className={s.ccardMain} ref={ref}>

            <animated.button
                className={s.ccard}
                style={{ transform: props.xys.to(trans) }}
                onMouseLeave={() => set([0, 0, 1])}
                onMouseMove={(e) => {
                    const rect = ref.current.getBoundingClientRect();
                    set(calc(e.clientX, e.clientY, rect));
                }}
            >
                <NavLink to="/home" className={s.homeItem}
                style={sampleLocation.pathname === '/home' ? {color:'white', textDecoration:'none'} : null}
                >
                    {language === 'English'&& 'Home' }
                    {language === 'Ukrainian'&& 'Головна' }
                </NavLink>
            </animated.button>

        </div>
    );
}
