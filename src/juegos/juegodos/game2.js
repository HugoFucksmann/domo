import { Grid, Button, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

import colores from "../../styles/colors";
import SpringTxt from "../../components/springTxt";
import sizeLetter from "../../styles/fontSize";
import FinalCard from "../../components/finalCard";
import { isMobile } from "../../styles/isMobile";
import "../../styles/shakeeff.css";
import "../../styles/brain.css";
import CardBrain from "./cardBrain";

import billete from "../../assets/iconCard/billete.svg";
import carritoSuper from "../../assets/iconCard/carritoSuper.svg";
import mamadera from "../../assets/iconCard/mamadera.svg";
import plato from "../../assets/iconCard/plato.svg";
import reloj from "../../assets/iconCard/reloj.svg";
import ropa from "../../assets/iconCard/ropa.svg";

const Game2 = () => {
  const { dataJuegoDos, activeStep } = useContext(AppContext);
  const classes = useStyles();

  return (
    <Grid container spacing={!isMobile() ? 3 : 0}>
      <Grid
        item
        md={5}
        xs={12}
        className={classes.centerContent}
        style={{ marginRight: isMobile() && 26 }}
      >
        <CardBrain />
      </Grid>
      <Grid
        item
        md={7}
        xs={12}
        className={classes.centerContent}
        style={{
          marginTop: isMobile() ? 110 : "6%",
        }}
      >
        {dataJuegoDos[activeStep] === undefined ? <FinalCard /> : <CardResp />}
      </Grid>
    </Grid>
  );
};

const CardResp = () => {
  const { dataJuegoDos, score, handlerStep, activeStep, showEff, setShowEff } =
    useContext(AppContext);
  const classes = useStyles({ score, dataJuegoDos, activeStep });

  function handleSituation(btn) {
    setShowEff();
    setTimeout(() => {
      handlerStep(dataJuegoDos[activeStep].respuesta, btn);
    }, 900);
  }

  return (
    <Card className={classes.cardResp}>
      {<BorderIcons />}
      <div className={classes.SpringTxtRep}>
        <SpringTxt
          open={showEff}
          txts={dataJuegoDos[activeStep].pregunta}
          lspacing={0}
          whiteSpace={true}
          color={colores.mainStrong}
          //color="#383838"
          size={isMobile() ? sizeLetter.cellExtraBig : sizeLetter.Big}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          disabled={!showEff}
          color="secondary"
          variant="contained"
          className={classes.btn}
          onClick={(e) => handleSituation("true")}
        >
          <Typography className={classes.btnText}>SI</Typography>
        </Button>
        <Button
          disabled={!showEff}
          variant="contained"
          className={classes.btn}
          onClick={(e) => handleSituation("false")}
        >
          <Typography className={classes.btnText}>NO</Typography>
        </Button>
      </div>
    </Card>
  );
};

const BorderIcons = () => {
  return (
    <div
      id="borderIcons"
      style={{
        position: "absolute",

        width: "100%",
        height: "100%",
      }}
    >
      {iconCardData.map((conpData, i) => (
        <div
          key={conpData.id}
          style={{
            hidden: "true",
            position: "absolute",
            height: isMobile()
              ? conpData.id.startsWith("center") === false
                ? "12vw"
                : 0
              : "5vw",
            width: isMobile() ? "12vw" : "5vw",
            filter: `drop-shadow(1px 1px 1px #000)`,
            left: conpData.left,
            right: conpData.right,
            top: conpData.top,
            bottom: conpData.bottom,
            margin: isMobile() ? -18 : -25,
          }}
        >
          <img alt="icono" src={conpData.icon} height="100%" width="100%" />
        </div>
      ))}
    </div>
  );
};

const iconCardData = [
  {
    icon: plato,
    id: "topLeft",
    right: null,
    left: 0,
    top: 0,
    bottom: null,
  },
  {
    icon: ropa,
    id: "topRight",
    right: 0,
    left: null,
    top: 0,
    bottom: null,
  },

  {
    icon: billete,
    id: "downLeft",
    right: null,
    left: 0,
    top: null,
    bottom: -10,
  },
  {
    icon: carritoSuper,
    id: "downRight",
    right: 0,
    left: null,
    top: null,
    bottom: -10,
  },

  {
    icon: mamadera,
    id: "centerLeft",
    right: -15,
    left: null,
    top: "50%",
    down: null,
  },
  {
    icon: reloj,
    id: "centerRight",
    left: -10,
    right: null,
    top: "50%",
    down: null,
  },
];

const useStyles = makeStyles(() => ({
  brainContainer: {
    position: "relative",
    height: isMobile() ? "30vh" : "100%",

    marginLeft: isMobile() && -30,
    width: "100%",
    transition: "all 0.5s ease",
  },

  centerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  cardResp: {
    overflow: "visible!important",
    background: "rgba(255,255,255,.9)!important",
    paddingBottom: !isMobile() ? 30 : 15,
    width: isMobile() ? "92%" : "96%",
    minHeight: !isMobile() ? "64vh" : "34vh",
    borderRadius: [10, "!important"],
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    filter: `drop-shadow(3px 3px 3px ${colores.mainStrongTr})`,
    borderBottom: `6px solid ${colores.mainStrong}`,
    //marginBottom: 12,
    //marginLeft: 12,
    //margin: 10,
  },
  SpringTxtRep: {
    height: !isMobile() ? "48vh" : "30vh",

    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    width: isMobile() ? "10vh" : "8vw",
    height: isMobile() ? "4vh" : "4vw",

    backgroundColor: [colores.mainStrong, "!important"],

    marginRight: isMobile() ? [15, "!important"] : [35, "!important"],
    marginLeft: isMobile() ? "4vh"[(15, "!important")] : [35, "!important"],
    transition: ["transform .4s", "!important"],
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  btnText: {
    fontFamily: "Poppins",
    fontWeight: "bold!important",
    fontSize: !isMobile()
      ? [sizeLetter.big, "!important"]
      : [sizeLetter.cellBig, "!important"],
  },
}));

export default Game2;
