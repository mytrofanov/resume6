import React, {useState} from "react";
import {useForm} from "react-hook-form";
import "./Feedback.module.css";
import {AlertMessage} from "../aletrMessage/AlertMessage";


export default function FeedbackForm() {

    const [AlertOpen, SetAlertOpen] = useState(true)
    const {register, handleSubmit} = useForm();
    const onSubmit = () => {
        SetAlertOpen(true)
        // return (
        //
        //     alert("This form doesn't work on GitHUB.Please contact me on e-mail: MytrofanovMaxym@gmail.com")
        // )
    };

    return (

        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="Leave a Message">Leave a Message</label>
                    <input className="name" id="InputName" placeholder="Name*" {...register("Name")} />
                </div>

                <div>

                    <input className="email" id="email"
                           placeholder="example@gmail.com*"
                           type="email"
                           {...register("email")}
                    />
                </div>
                <div>
                        <textarea rows="10" cols="45" name="text"
                                  placeholder="Message* " {...register("Message")}/>
                    {/*<input className={s.message}  placeholder="Message*" {...register("Message")} />*/}
                </div>

                <input type="submit" value="Hire Me!"/>
            </form>

            {AlertOpen && <AlertMessage/>}

        </div>


    );
}

