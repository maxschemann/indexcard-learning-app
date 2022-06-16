import {createTheme} from "@mui/material";

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#9395d3',
            dark: '#4e4c6b',
            light: '#b3b7ee',
        },
        secondary: {
            main: '#a2a3bb',
        },
        error: {
            main: '#c33c54',
            light: 'rgba(248,177,186,0.37)',
        },
        success: {
            main: '#1b998b',
            light: '#5bc4b8',
        },
        warning: {
            main: '#FAF33E',
            light: '#faf587',
        },
    },
})


