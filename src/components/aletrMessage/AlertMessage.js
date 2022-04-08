import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React, {useContext} from "react";
import {Context} from "../../App";



export const AlertMessage = () => {
    let language = useContext(Context)
    return (
        <Stack sx={{width: '100%'}} spacing={2}>
            <Alert severity="success" variant="filled">
                {language === 'English'&& <AlertTitle> Your message has been send</AlertTitle> }
                {language === 'Ukrainian'&& <AlertTitle> Ваше повідомлення відправлено</AlertTitle> }



            </Alert>
        </Stack>
    );
}
