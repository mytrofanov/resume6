import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@material-ui/core";
import {purple} from "@material-ui/core/colors";
import s from './Skills.module.css'


export default function Skills({percent}) {

    const SliderTheme = createTheme({
        palette: {
            primary: {
                main: purple[500],
            },
            secondary: {
                main: '#dc646f',
            },
        },
    });


    return (
        <div className={s.SkillMaterialSlider}>
        <Box sx={{ width: 200,
        color: "white"}}>
            <ThemeProvider theme={SliderTheme}>
            <Slider
                // aria-label="Always visible"
                defaultValue={percent}
                // getAriaValueText={valuetext}
                step={10}
                color="secondary"
                valueLabelDisplay="off"
            />
            </ThemeProvider>
        </Box>
              <span className={s.PercentPadding}>
                  {percent}   %
              </span>
        </div>
    );
}
