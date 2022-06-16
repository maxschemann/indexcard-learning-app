import {createTheme} from "@mui/material";
import {colorTheme} from "./colorTheme";

export const headerTheme = createTheme(
    {
        palette: {
            primary: {
                main: colorTheme.palette.primary.main,
                dark: colorTheme.palette.primary.dark,
                light: colorTheme.palette.primary.light,
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