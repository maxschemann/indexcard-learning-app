import {Card, CardContent, ThemeProvider} from "@mui/material";
import {cardTheme} from "../styles/cardTheme";

export default function Info() {
    return (
        <div>
            <ThemeProvider theme={cardTheme}>
            <Card>
                <CardContent>
                    <p><b>App by:</b> Max Schemann</p>
                    <p><b>App-Icon by: </b> Muhammad Fadlan on</p>
                    <p><a href="https://www.vecteezy.com/free-vector/ornament">Ornament Vectors by Vecteezy</a></p>
                </CardContent>
            </Card>
            </ThemeProvider>
        </div>
    )
}