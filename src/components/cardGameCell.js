import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Card, Zoom, Typography } from "@mui/material";
import j2 from "../assets/j2.jpg";
import j1 from "../assets/j1.webp";
import { Scale } from "@mui/icons-material";

const GameCardCell = ({ cardData = "ESTE ES EL TITULO", i = 1 }) => {
    const classes = useStyles();
    return (
        <Zoom in={true} style={{ transitionDelay: 150 * i }}>
            <Link to={`/${cardData}`} state={cardData}>
                <Card elevation={5} className={classes.diagonalDiv}>
                    <div id="hoverTxt" className={classes.hoverTxt}>
                        <Typography>ESTE ES EL TITULO</Typography>
                        <br />
                        <Typography id="letra" className={classes.letra}>
                            este vendria a ser una breve descripcion sobre de
                            que se trata el siguiente juego
                        </Typography>
                    </div>
                </Card>
            </Link>
        </Zoom>
    );
};

const useStyles = makeStyles(() => ({
    diagonalDiv: {
        width: "100%",
        height: 200,
        background: `url(${j1}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "table-cell",
        verticalAlign: "middle",
        paddingRight: 30,
        paddingLeft: 30,
    },
    hoverTxt: {
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,.3)",
        padding: "20px 35px 20px 35px",
        color: "#f2f2f2",

        borderRadius: 10,
    },
}));

export default GameCardCell;
