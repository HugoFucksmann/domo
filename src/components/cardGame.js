import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Card, Zoom, Typography } from "@mui/material";

import j1 from "../assets/fondo1.jpg";

const GameCard = ({ cardData = "ESTE ES EL TITULO", i = 1 }) => {
  const classes = useStyles();
  return (
    <Zoom in={true} style={{ transitionDelay: 150 * i }}>
      <Link
        to={`/${cardData}`}
        state={cardData}
        style={{ textDecoration: "none", height: "100%" }}
      >
        <Card elevation={5} className={classes.diagonalDiv}>
          <div id="imageDiv" className={classes.imageDiv}>
            <div id="hoverTxt" className={classes.hoverTxt}>
              <Typography>ESTE ES EL TITULO</Typography>
              <br />
              <Typography id="letra" className={classes.letra}>
                este vendria a ser una breve descripcion sobre de que se trata
                el siguiente juego
              </Typography>
            </div>
          </div>
        </Card>
      </Link>
    </Zoom>
  );
};

const useStyles = makeStyles(() => ({
  diagonalDiv: {
    width: 220,
    height: "60vh",
    transform: "skewX(-6deg)",
    "&:hover #hoverTxt": {
      transform: "translateY(0)",
      display: "table-cell",
      verticalAlign: "middle",
      backgroundColor: "rgba(0,0,0,.5)",
    },
    "&:hover #letra": {
      transform: "translateY(0)",
    },
    "&:hover #imageDiv": {
      transform: "scale(1.1)",
    },
  },
  imageDiv: {
    height: "100%",
    background: `url(${j1}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "table",
    textAlign: "center",
    transition: ".3s",
    transitionTimingFunction: "ease",
  },
  hoverTxt: {
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    color: "#f2f2f2",
    transform: "translateY(90%)",
    transition: ".3s",
    transitionTimingFunction: "ease",
  },
  letra: {
    transform: "translateY(150%)",
    transition: ".3s",
    transitionDelay: ".1s",
    transitionTimingFunction: "ease",
  },
}));

export default GameCard;
