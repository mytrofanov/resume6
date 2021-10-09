import React, {useState} from "react";
import {useForm} from "react-hook-form";
import "./Feedback.module.css";
import {AlertMessage} from "../aletrMessage/AlertMessage";
import {ErrorAlertMessage} from "../aletrMessage/ErrorAlertMessage";
import {SendMeEmail, SendMyEmail} from "./mailer";
const mail = require('./mailer')();


export default function FeedbackForm() {

    const [SendSucces, SetSendSucces] = useState(false)
    const [ErrorSend, SetErrorSend] = useState(false)
    const [ErrorStatus, SetErrorStatus] = useState()
    const [textFromForm, setTextFromForm] = useState()

    const {register, handleSubmit} = useForm();
    const onSubmit = (textFromForm) => {
        SendMyEmail()
        mail.send();
    };




        return (

            <div className="form">
                <form   onSubmit={handleSubmit(onSubmit)}>
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
                        {SendSucces && <AlertMessage/>}
                        {ErrorSend && <ErrorAlertMessage ErrorStatus={ErrorStatus}/>}
                    </div>

                    <input type="submit" value="Hire Me!"/>
                </form>


            </div>


        );
    }
