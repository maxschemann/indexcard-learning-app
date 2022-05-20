import {createTheme} from "@mui/material";

export const cardTheme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                multiline: true,
                placeholder: 'Please enter a word...',
            },
            styleOverrides: {
                root: {
                    padding: '5px'
                },
            },
        },
        MuiFab: {
            defaultProps: {
                size: 'medium',
            },
        },
    },
})