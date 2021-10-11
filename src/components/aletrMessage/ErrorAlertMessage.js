import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React from "react";



export const ErrorAlertMessage = ({ErrorStatus, errorText}) => {
    return (
        <Stack sx={{width: '100%'}} spacing={2}>
            <Alert severity="error" variant="filled">
                <AlertTitle> Your message was not send</AlertTitle>
                Error status: {ErrorStatus}, reason: {errorText}
                You can get me on e-mail:  <strong>MytrofanovMaxym@gmail.com</strong>
            </Alert>
        </Stack>
    );
}