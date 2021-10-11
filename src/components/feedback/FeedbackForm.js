import React, {useState} from "react";
import {useForm} from "react-hook-form";
import "./Feedback.module.css";
import {AlertMessage} from "../aletrMessage/AlertMessage";
import {ErrorAlertMessage} from "../aletrMessage/ErrorAlertMessage";
import axios from "axios";


export default function FeedbackForm() {


    const [errorText, setErrorText] = useState()
    const [sucsess, setSuscessFormSend] = useState(false)

    const {register, handleSubmit} = useForm();
    const onSubmit = (textFromForm) => {
      let FormData = {
          user_name: textFromForm.Name,
          user_email: textFromForm.email,
          text: textFromForm.Message
      }
        const str = JSON.stringify(FormData)
        axios.post('http://mytrofanov.guru/mail.php', str, {
            headers: {'Content-Type':'application/json'}
            }
            )
            .then(response => console.log(response))
            .then(response => setSuscessFormSend(true))
            .catch(error => console.log(error))
            .catch(error => setErrorText(error))


    };

    // http://mytrofanov.guru/mail.php


    return (

        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="Leave a Message">Leave a Message</label>
                    <input name="user_name" className="name" id="InputName"
                           placeholder="Name*" {...register("Name")} />
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
                              placeholder="Message* " {...register("Message")}/>
                    {sucsess && <AlertMessage/>}
                    {errorText && <ErrorAlertMessage errorText={errorText}/>}
                </div>

                <input type="submit" value="Hire Me!"/>
            </form>


        </div>


    );
}
