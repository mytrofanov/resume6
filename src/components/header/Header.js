import React from 'react'
import s from './Header.module.css'
import Button from '@mui/material/Button';
import {Box, createTheme} from "@material-ui/core";
import {purple} from "@material-ui/core/colors";
import {ThemeProvider} from "@emotion/react";

export const Header = () => {
    const ButtonTheme = createTheme({
        palette: {
            primary: {
                main: purple[500],
            },
            secondary: {
                main: '#f44336',
            },
        },
    });
    return (

        <div className={s.header} id="header">
            <div id="header_title" className={s.header_title}>
                Lets Make Something Great
                <div className={s.header_annotation} id="header_annotation">
                    I’m an UI designer that prides ourself on being strategic brand partners and awesome
                    product providers
                </div>
            </div>
            <ThemeProvider theme={ButtonTheme}>
                <Box sx={
                    {
                        marginLeft: 47,
                        marginTop: 5,
                        mb: 116
                    }
                }>

                    <Button
                        sx={{textTransform: 'none'}}
                        variant="contained" size="large"
                        onClick={() => {
                            alert('clicked')
                        }}>Hire Me!</Button>

                </Box>
            </ThemeProvider>
        </div>

    )
}