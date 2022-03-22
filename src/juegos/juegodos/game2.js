import {
  Card,
  Zoom,
  Typography,
  Grid,
  Button,
  MobileStepper,
  Grow,
  Fade,
  ButtonGroup,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { ReactComponent as BrainSvg } from "../../assets/brain.svg";

import TypographyStyled from "../../components/typografyStyled";
import colores from "../../styles/colors";
import SpringTxt from "../../components/springTxt";
import sizeLetter from "../../styles/fontSize";
import FinalCard from "../../components/finalCard";

const screenWidth = window.innerWidth;

const Game2 = () => {
  const { dataJuegoDos, handlerStep, activeStep, score } =
    useContext(AppContext);
  const classes = useStyles(score);

  return (
    <Fade in={true}>
      <Grid container spacing={3}>
        <Grid item md={4} className={classes.centerGrid}>
          <Card elevation={3} className={classes.brainCard}>
            <BrainSvg className={classes.brainImg} />
          </Card>
        </Grid>
        <Grid item md={8} className={classes.centerGrid}>
          {dataJuegoDos[activeStep] === undefined ? (
            <FinalCard />
          ) : (
            <div>
              <SpringTxt
                txts={"esta es la primer pregunta, responde cuantos son?"}
                size="2.8vw"
              />

              <Button
                color="secondary"
                variant="contained"
                className={classes.btn}
                onClick={(e) =>
                  handlerStep(dataJuegoDos[activeStep].respuesta, true)
                }
              >
                SI
              </Button>
              <Button
                color="secondary"
                variant="contained"
                className={classes.btn}
                onClick={(e) =>
                  handlerStep(dataJuegoDos[activeStep].respuesta, false)
                }
              >
                No
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </Fade>
  );
};

const CardGame2 = () => {
  const classes = useStyles();
  const { dataJuegoDos, handlerStep, activeStep } = useContext(AppContext);
  return (
    <Card
      elevation={3}
      style={{
        textAlign: "center",
        borderRadius: 15,
        maxWidth: 600,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={classes.titulo}>
            <TypographyStyled style={{ fontSize: 30, color: colores.txtLight }}>
              {dataJuegoDos[activeStep].pregunta}
            </TypographyStyled>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btn}
            onClick={() =>
              handlerStep(dataJuegoDos[activeStep].respuesta, true)
            }
          >
            <TypographyStyled style={{ fontSize: 40 }}>SI</TypographyStyled>
          </Button>
          <Button
            className={classes.btn}
            variant="contained"
            color="secondary"
            onClick={() =>
              handlerStep(dataJuegoDos[activeStep].respuesta, false)
            }
          >
            <TypographyStyled style={{ fontSize: 40 }}>NO</TypographyStyled>
          </Button>
        </Grid>
        <MobileStepper
          activeStep={activeStep}
          variant="progress"
          steps={4}
          classes={useStyles}
          position="static"
          style={{
            width: "100%",
            backgroundColor: "#ededed",
            paddingLeft: "5%",
            paddingRight: "2%",

            borderColor: "red!important",
          }}
          LinearProgressProps={{
            style: {
              width: "100%",
              height: 6,
              borderRadius: 10,
              backgroundColor: colores.mainSoft,
            },
          }}
        />
      </Grid>
    </Card>
  );
};

const FinalScreen = () => {
  const classes = useStyles();
  const { reStart, score } = useContext(AppContext);
  return (
    <Card className={classes.resultScr}>
      <h1>TERMINADO, SU PUNTUACION FUE: {score}/10</h1>
      <h3>felicitacion por la puntuacion, puedes seguir mejorando</h3>
      <br />
      <Button variant="outlined" color="secondary" onClick={() => reStart()}>
        Jugar de nuevo
      </Button>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  ParentCard: {
    minHeight: 510,

    width: "100%",
    display: "table-cell",
    borderRadius: [15, "!important"],
    textAlign: "center",
  },
  brainCard: {
    borderRadius: ["50%", "!important"],
    padding: 20,
    transition: ["all .4s", "!important"],
    background: (score) => `linear-gradient(0deg, red ${score * 10}%, #fff 0%)`,

    height: screenWidth > 1200 ? "90%" : 1250,
    width: screenWidth > 1200 ? "90%" : 250,
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  brainImg: {
    filter: "blur(0px)  invert(0%) ",
    clipPath: "ellipse(50px 60px at 0 10% 20%)",
  },

  centerGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  dotActive: {
    backgroundColor: "red",
  },
  titulo: {
    padding: 35,

    backgroundColor: colores.mainSoft,
  },

  btn: {
    width: "8vw",
    height: "4vw",
    fontSize: [sizeLetter.big, "!important"],
    margin: [40, "!important"],
    //borderRadius: ["15%", "!important"],
    transition: ["transform .4s", "!important"],
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  resultScr: {
    minHeight: 510,
    borderRadius: [15, "!important"],
    padding: 50,
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default Game2;
