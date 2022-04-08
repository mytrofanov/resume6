import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React, {useContext} from "react";
import {Context} from "../../App";



export const ErrorAlertMessage = ({errorText}) => {
    let language = useContext(Context)
    return (
        <Stack sx={{width: '100%'}} spacing={2}>
            <Alert severity="error" variant="filled">
                {language === 'English'&& <> <AlertTitle> Your message was not send</AlertTitle>
                    Reason: {errorText}
                    You can get me on e-mail:  <strong>MytrofanovMaxym@gmail.com</strong></> }
                {language === 'Ukrainian'&&<> <AlertTitle> Ваше повідомлено не відправлено</AlertTitle>
                    Причина: {errorText}
                    Можна зв'язатися зі мною по e-mail:  <strong>MytrofanovMaxym@gmail.com</strong></> }


            </Alert>
        </Stack>
    );
}
