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
                        <input placeholder="Name*" {...register("Name")} />
                    </div>

                    <div>

                        <input
                            placeholder="example@gmail.com*"
                            type="email"
                            {...register("email")}
                        />
                    </div>
                    <div>

                        <input placeholder="Message*" {...register("Message")} />
                    </div>

                    <input type="submit"/>
                </form>
            </div>

    );
}

