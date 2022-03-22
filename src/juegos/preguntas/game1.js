import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Button,
  Zoom,
  Fade,
  Slide,
  Divider,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import colores from "../../styles/colors";
import TypographyStyled from "../../components/typografyStyled";

import CustomizedSteppers from "../../components/styledStepper";
import SpringTxt from "../../components/springTxt";

const Game1 = () => {
  const { dataJuegoUno, activeStep, handlerModalOpen, openModal } =
    useContext(AppContext);
  const classes = useStyle();

  if (dataJuegoUno[activeStep] === undefined) return <FinalScreen />;

  return (
    <Grid container spacing={5}>
      <Grid item md={4}>
        <Zoom in={true}>
          <Card elevation={3} className={classes.pregBackg}>
            <TypographyStyled
              style={{
                fontSize: 26,
                letterSpacing: 1.4,
                color: "#ededed",
              }}
            >
              <SpringTxt
                txts={dataJuegoUno[activeStep].preg}
                open={!openModal}
              />
            </TypographyStyled>
          </Card>
        </Zoom>
      </Grid>
      <Grid item md={8}>
        <Zoom in={true}>
          <Card elevation={3} className={classes.cardResp}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <CustomizedSteppers
                  activeStep={activeStep}
                  numStep={dataJuegoUno}
                />
              </Grid>
              {dataJuegoUno[activeStep].respuestas.map((data, i) => (
                <Grid item xs={12} key={data.txt + i}>
                  <Slide
                    {...{ timeout: 235 * i }}
                    direction="left"
                    in={!openModal}
                  >
                    <Card
                      variant="outlined"
                      className={classes.miniCard}
                      onClick={() =>
                        handlerModalOpen(
                          i,
                          dataJuegoUno[activeStep].correcto,
                          data.modalText
                        )
                      }
                    >
                      <TypographyStyled style={{ fontSize: "1vw" }}>
                        {data.txt}
                      </TypographyStyled>
                    </Card>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Zoom>
      </Grid>
    </Grid>
  );
};

const FinalScreen = () => {
  const { score, reStart, dataJuegoUno } = useContext(AppContext);
  const classes = useStyle();

  return (
    <Zoom in={true}>
      <Card className={classes.resultScr}>
        <TypographyStyled style={{ fontSize: 34 }}>
          TERMINADO, SU PUNTUACION FUE: {score}/{dataJuegoUno.length}
        </TypographyStyled>
        <TypographyStyled style={{ fontSize: 22 }}>
          felicitacion por la puntuacion, puedes seguir mejorando
        </TypographyStyled>
        <br />
        <Button variant="outlined" color="secondary" onClick={() => reStart()}>
          <TypographyStyled style={{ fontSize: 18 }}>
            Jugar de nuevo
          </TypographyStyled>
        </Button>
      </Card>
    </Zoom>
  );
};

const useStyle = makeStyles((theme) => ({
  pregBackg: {
    backgroundColor: theme.colores.mainSoft + "!important",
    height: "100%",
    padding: 35,
    display: "flex",
    alignItems: "center",
    borderRadius: "15px!important",
    "&:hover": {
      transform: `perspective(600px) rotateX(180deg)`,
    },
  },
  root: {
    "&$active": { color: "#000" },
    "& .MuiStepIcon-completed": { color: "#9280AB" },
    "& .Mui-disabled .MuiStepIcon-root": { color: "#E9DCFF" },
    background: "transparent",
  },
  miniCard: {
    padding: 12,
    border: `1px solid ${theme.colores.mainSoft}!important`,
    borderRadius: [10, "!important"],
    cursor: "pointer",
    transition: "all 0.5",
    "&:hover": {
      transform: "scale(1.03) ",
      backgroundColor: "rgba(90, 19, 114,.2)",
      border: "1px solid #5A1372!important",
    },
  },
  cardResp: {
    backgroundColor: [colores.backgSoft, "!important"],
    padding: 40,
    borderRadius: "15px!important",
  },
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

export default Game1;
