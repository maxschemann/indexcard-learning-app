import {createTheme} from "@mui/material";
import {colorTheme} from "./colorTheme";

export const cardTheme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                multiline: true,
                placeholder: '...',
            },
            styleOverrides: {
                root: {
                    padding: '5px',
                },
            },
        },
        MuiFab: {
            defaultProps: {
                size: 'large',
            },
            styleOverrides: {
                root: {
                    marginLeft: '30px',
                    marginTop: '10px',
                    backgroundColor: colorTheme.palette.primary.light,
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: 'start',
                },
            },
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    height: "60px",
                    display: "flex",
                    alignContent: "center",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px",
                    marginTop: "10px",
                    marginLeft: "15px",
                    color: colorTheme.palette.primary.dark
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: "10px",
                    width: "450px",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "15px",
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    width: '150px',
                    marginLeft: '10px'
                },
            },
        },
        MuiIcon: {
            styleOverrides: {
                root: {},
            },
        },
    },
})
