import React from "react";
import {useForm} from "react-hook-form";

import "./Feedback.module.css";

export default function FeedbackForm() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
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
                        <textarea rows="10" cols="45" name="text" placeholder="Message*" {...register("Message")}/>
                        {/*<input className={s.message}  placeholder="Message*" {...register("Message")} />*/}
                    </div>

                    <input type="submit" value="Hire Me!"/>
                </form>
            </div>

    );
}

