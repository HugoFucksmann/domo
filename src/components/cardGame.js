import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Card, Zoom, Typography } from "@mui/material";

import j1 from "../assets/fondo1.jpg";
import sizeLetter from "../styles/fontSize";

const GameCard = ({
  cardData = { link: "link", title: "titulo", txt: "txt" },
  i = 1,
}) => {
  const classes = useStyles();
  return (
    <Zoom in={true} style={{ transitionDelay: 150 * i }}>
      <Link
        to={`/${cardData.link}`}
        state={cardData.link}
        style={{ textDecoration: "none", height: "100%" }}
      >
        <Card elevation={5} className={classes.diagonalDiv}>
          <div id="imageDiv" className={classes.imageDiv}>
            <div id="hoverTxt" className={classes.hoverTxt}>
              <Typography className={classes.title}>
                {cardData.title}
              </Typography>
              <br />
              <Typography id="letra" className={classes.txt}>
                {cardData.txt}
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
    width: "40vh",
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
    width: "100%",
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
  title: {
    fontFamily: "Sora!important",
    fontSize: [sizeLetter.normal, "!important"],
  },
  txt: {
    fontFamily: "Sora!important",
    fontSize: [sizeLetter.normal, "!important"],
    transform: "translateY(150%)",
    transition: ".3s",
    transitionDelay: ".1s",
    transitionTimingFunction: "ease",
  },
}));

export default GameCard;
