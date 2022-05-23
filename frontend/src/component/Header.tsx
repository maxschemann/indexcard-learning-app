import '../styles/Header.css'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function Header() {

    const navigate = useNavigate()

    return <div id={"header"}>
        <Button onClick={() => navigate("/add")}/>
    </div>
}