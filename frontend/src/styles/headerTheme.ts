import {createTheme} from "@mui/material";

export const headerTheme = createTheme(
    {
        palette: {
            primary: {
                main: '4a6d7c',
            },
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
                        width: '50px',
                    },
                },
            },
            MuiTextField: {
                defaultProps: {
                    placeholder: 'FInd a word',
                },
                styleOverrides: {
                    root: {
                        width: '150px',
                        padding: '5px'
                    },
                },
            },
        },
    }
)