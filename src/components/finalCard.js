import { Button, Card, Zoom } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import sizeLetter from "../styles/fontSize";
import TypographyStyled from "./typografyStyled";

const FinalCard = () => {
  const { score, reStart, dataJuegoUno } = useContext(AppContext);
  const classes = useStyle();

  return (
    <Zoom in={true}>
      <Card className={classes.resultScr}>
        <TypographyStyled style={{ fontSize: sizeLetter.big }}>
          TERMINADO, SU PUNTUACION FUE: {score}/{dataJuegoUno.length}
        </TypographyStyled>
        <TypographyStyled style={{ fontSize: sizeLetter.normal }}>
          felicitacion por la puntuacion, puedes seguir mejorando
        </TypographyStyled>
        <br />
        <Button variant="outlined" color="secondary" onClick={() => reStart()}>
          <TypographyStyled style={{ fontSize: sizeLetter.small }}>
            Jugar de nuevo
          </TypographyStyled>
        </Button>
      </Card>
    </Zoom>
  );
};

const useStyle = makeStyles((theme) => ({
  resultScr: {
    minHeight: 350,
    backgroundColor: theme.colores.backgSoft + "!important",
    borderRadius: "15px!important",
    padding: 50,
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default FinalCard;
