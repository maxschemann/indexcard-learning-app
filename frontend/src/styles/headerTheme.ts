import {createTheme} from "@mui/material";

export const headerTheme = createTheme(
    {
        palette: {
            primary: {
                main: '#b3b7ee',
                dark: '#4e4c6b',
                light: '#b3b7ee',
            },
            secondary: {
                main: '#a2a3bb',
            },
            error: {
                main: '#c33c54',
            },
            success: {
                main: '#1b998b',
            }
        },
        components: {
            MuiFab: {
                defaultProps: {
                    size: 'large',
                },
                styleOverrides: {
                    root: {
                        margin: '5px',
                    },
                },
            },
            MuiSelect: {
                styleOverrides: {
                    select: {
                        width: '70px',
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    placeholder: 'Find a word',
                },
                styleOverrides: {
                    root: {
                        padding: '5px',
                    },
                },
            },
        },
    }
)