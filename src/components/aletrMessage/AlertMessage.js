import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import React from "react";



export const AlertMessage = () => {
    return (
        <Stack sx={{width: '100%'}} spacing={2}>
            <Alert severity="success" variant="filled">
                <AlertTitle> Your message has been send</AlertTitle>

            </Alert>
        </Stack>
    );
}