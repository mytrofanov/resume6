import React from 'react'
import s from './Header.module.css'
import {Box, createTheme} from "@material-ui/core";
import {purple} from "@material-ui/core/colors";
import {ThemeProvider} from "@emotion/react";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";


export const Header = ({setDefaultEnglish, defaultEnglish }) => {



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
            {defaultEnglish ? <div>English</div> : <div>Russian</div>}
            <div className={s.RusEngButtons}>
                <Button sx={{color: 'white'}}
                        onClick={() => {
                            setDefaultEnglish(false);
                        }}
                >Rus</Button>
                <Button sx={{color: 'white'}}
                        onClick={() => {
                            setDefaultEnglish(true);
                        }}
                >Eng</Button>
            </div>
            <div id="header_title" className={s.header_title}>
                Lets Make Something Great
                <div className={s.header_annotation} id="header_annotation">
                    I’m Front End Developer that prides ourself on being strategic brand partners and awesome
                    product providers
                </div>
            </div>
            <ThemeProvider theme={ButtonTheme}>
                <Box sx={
                    {
                        marginLeft: 360,
                        marginTop: 5,
                        mb: 116
                    }
                }>

                    <Button
                        sx={{textTransform: 'none'}}
                        variant="contained" size="large"
                        // onClick={ }
                    >
                        <NavLink to="/contact" className={s.HireMeButton}>Hire Me!</NavLink>

                    </Button>

                </Box>
            </ThemeProvider>

        </div>

    )
}