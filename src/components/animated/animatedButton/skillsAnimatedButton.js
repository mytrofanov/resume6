import React, {useContext, useRef, useState} from "react";
import { useSpring, animated, config } from "@react-spring/web";
import s from './style/scalingAnimatedHomeButton.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import {Context} from "../../../App";

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
];
const trans = (x, y, s) =>
    `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function ScalingSkillsAnimatedButton() {
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const props = useSpring({ xys, config: config.gentle});
    const sampleLocation = useLocation();
    let language = useContext(Context);

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
                <NavLink to="/skills" className={s.homeItem}
                    style={sampleLocation.pathname === '/skills' ? {color:'white', textDecoration:'none'}: null}
                >
                    {language === 'English'&& 'Skills' }
                    {language === 'Ukrainian'&& 'Навички' }

                    </NavLink>
            </animated.button>

        </div>
    );
}