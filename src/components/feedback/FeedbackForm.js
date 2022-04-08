import React, {useContext, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import "./Feedback.module.css";
import {AlertMessage} from "../aletrMessage/AlertMessage";
import {ErrorAlertMessage} from "../aletrMessage/ErrorAlertMessage";
import axios from "axios";
import {useSpring, animated, config} from "@react-spring/web";
import s from "../animated/animatedButton/style/scalingAnimatedFormButton.module.scss";
import {Context} from "../../App";

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4
];
const trans = (x, y, s) =>
    `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function FeedbackForm() {
    const [errorText, setErrorText] = useState('')
    const [success, setSuccessFormSend] = useState(false)
    const [error, setError] = useState(false)
// Animation:
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const props = useSpring({xys, config: config.gentle});
    let language = useContext(Context)
    // Form:
    const {register, handleSubmit} = useForm();
    const onSubmit = (textFromForm) => {
        // mail.php can't receive object, so have to use next:
        const params = new URLSearchParams();
        params.append('user_name', textFromForm.Name);
        params.append('user_email', textFromForm.email);
        params.append('text', textFromForm.Message);

        axios.post('https://mytrofanov.guru/mail.php', params
        )
            .then(response => console.log('response: ', response))
            .then(response => () => setSuccessFormSend(true))
            .catch(error => {
                console.log('error message: ', error)
                if (error.response === undefined) {
                    setErrorText('Network error or CORS')
                    setError(true)
                }
            })
    };

    // http://mytrofanov.guru/mail.php


    return (

    <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="Leave a Message">
                        {language === 'English'&& 'Leave a Message' }
                        {language === 'Ukrainian'&& 'Залиште повідомлення' }
                        </label>
                    <input name="user_name" className="name" id="InputName"
                           placeholder={language === 'English'? 'Name' : `Iм'я` } {...register("Name")} />
                </div>

                <div>

                    <input className="email" id="email" name="user_email"
                           placeholder="example@gmail.com*"
                           type="email"
                           {...register("email")}
                    />
                </div>
                <div>

                    <textarea rows="10" cols="45" name="text"
                              placeholder={language === 'English'? 'Message' : 'Повідомлення' }
                              {...register("Message")}/>
                    {success && <AlertMessage/>}
                    {error && <ErrorAlertMessage errorText={errorText}/>}
                </div>
                <div className={s.ccardMain} ref={ref}>
                    <animated.input
                        type="submit"
                        value={language === 'English'? 'Send' : 'Відправити' }
                        className={s.ccard}
                        style={{transform: props.xys.to(trans)}}
                        onMouseLeave={() => set([0, 0, 1])}
                        onMouseMove={(e) => {
                            const rect = ref.current.getBoundingClientRect();
                            set(calc(e.clientX, e.clientY, rect));
                        }}
                    >
                    </animated.input>
                </div>
            </form>


        </div>


    );
}
