import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import styles from './animatedPict.module.css'
import {NavLink} from "react-router-dom";

export default function AnimatedPict() {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    return (
        <div className={styles.container} onClick={() => set(state => !state)}>
            <NavLink to="/home" className={styles.container} >
            <a.div
                className={`${styles.c} ${styles.back}`}
                style={{ opacity: opacity.to(o => 1 - o), transform }}
            />

            <a.div
                className={`${styles.c} ${styles.front}`}
                style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                }}
            />
                </NavLink>
        </div>
    )
}
