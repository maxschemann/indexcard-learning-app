import {Button} from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import ButtonGroup from "@mui/material/ButtonGroup";
import {Difficulty} from "../model/IndexCard";

type ChangeDifficultyProps = {
    setDifficulty: (difficulty: Difficulty) => void
}

export default function ChangeDifficulty({setDifficulty}: ChangeDifficultyProps) {

    return (
        <ButtonGroup>
            <Button sx={{backgroundColor: '#07bc0c'}}
                    onClick={() => setDifficulty(0)}>
                <SentimentSatisfiedAltIcon/>
            </Button>
            <Button sx={{backgroundColor: '#f1c40f'}}
                    onClick={() => setDifficulty(1)}>
                <SentimentSatisfiedIcon/>
            </Button>
            <Button sx={{backgroundColor: '#e74c3c'}}
                    onClick={() => setDifficulty(2)}>
                <SentimentDissatisfiedIcon/>
            </Button>
        </ButtonGroup>
    )
}