import React, { useContext, useState } from "react";
import { Card, Typography, Zoom, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";
import colores from "../../styles/colors";
import sizeLetter from "../../styles/fontSize";
import SpringTxt from "../../components/springTxt";
import { AppContext } from "../../context/appContext";
import FinalCard from "../../components/finalCard";
import { finalMsjGlosario } from "../../context/dataJuegoGlosario";

import { isMobile } from "../../styles/isMobile";
import "../../styles/circularLoader.css";

import like from "../../assets/like.svg";

const VerticalTabs = () => {
  const { activeStep, score, dataGlosario } = useContext(AppContext);
  const classes = useStyles();

  if (dataGlosario[activeStep] === undefined)
    return (
      <FinalCard
        msjf={
          score > 4 ? finalMsjGlosario.correcto : finalMsjGlosario.incorrecto
        }
      />
    );

  return (
    <div
      className={classes.centerContent}
      style={{
        display: "flex",
        flexDirection: isMobile() ? "column" : "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile() ? "row" : "column",
          marginRight: !isMobile() && 80,
        }}
      >
        {dataGlosario.map((obj, i) => (
          <div
            key={i + 100}
            style={{
              transform:
                i === activeStep
                  ? isMobile()
                    ? "translateY(-12px) scale(1.05)"
                    : "scale(1.2)"
                  : "scale(1)",
              transition: "transform 0.5s",
              marginLeft: !isMobile() && i === activeStep ? -5 : 0,
            }}
          >
            <BtnStep key={i} data={obj} i={i} activeStep={activeStep} />
          </div>
        ))}
      </div>

      <CardContent data={dataGlosario[activeStep]} i={activeStep} />
    </div>
  );
};

const CardContent = ({ data, i }) => {
  const { openModal, handlerModalOpenGlosario } = useContext(AppContext);
  const classes = useStyles();
  const [shadow, setShadow] = useState(5);

  return (
    <Card key={data.title} className={classes.panelCard}>
      <Fade in={!openModal} {...{ timeout: 800 }}>
        <Typography className={classes.panelTitle}>{data.title}</Typography>
      </Fade>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SpringTxt
          open={!openModal}
          size={isMobile() ? sizeLetter.cellBig : sizeLetter.extraBig}
          txts={data.afirmacion[0].frace}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {ButtonData.map((ButtonData, i) => (
          <Card
            elevation={shadow === i ? 1 : 5}
            onMouseEnter={() => setShadow(i)}
            onMouseLeave={() => setShadow(null)}
            key={i}
            className={classes.centerContent}
            style={{
              padding: 6,
              cursor: "pointer",
              borderRadius: "15px",
              height: isMobile() ? "8vh" : "12vh",
              width: isMobile() ? "8vh" : "12vh",
              background: colores.mainSoft,
              border: `1px solid ${colores.mainStrong}`,
              marginRight: isMobile() ? 15 : 20,
              marginLeft: isMobile() ? 15 : 20,
            }}
          >
            <div
              style={{
                background: `url(${ButtonData.icon})`,
                height: "80%",
                width: "80%",
                transform: i === 1 && "rotate(180deg) ",

                color: colores.mainStrong,
              }}
              key={i}
              onClick={() =>
                handlerModalOpenGlosario(ButtonData.action, data, data.icons)
              }
            />
          </Card>
        ))}
      </div>
    </Card>
  );
};

const ButtonData = [
  { icon: like, action: true },
  { icon: like, action: false },
];

const BtnStep = ({ data, i, activeStep }) => {
  const classes = styleBtn({ data, i, activeStep });

  return (
    <div>
      <Zoom in={true} timeout={300 * (i + 1)}>
        <Card className={classes.btnStep}>{data.id}</Card>
      </Zoom>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  centerContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  panelCard: {
    height: isMobile() ? "45vh" : "72vh",
    width: isMobile() ? "90vw" : "45vw",
    borderRight: `8px solid ${colores.mainStrongTr}`,
    backgroundColor: [colores.mainSoftTr, "!important"],
    padding: 45,
    paddingBottom: 20,
    borderRadius: [15, "!important"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
    filter: `drop-shadow(3px 3px 3px ${colores.mainStrongTr})`,
  },

  gridBtn: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  panelTitle: {
    fontFamily: "Poppins",

    fontSize: isMobile()
      ? [sizeLetter.cellExtraBig, "!important"]
      : [sizeLetter.extraBig, "!important"],
    color: colores.mainStrong,
    fontWeight: "bold!important",
    marginBottom: 30,
    marginTop: isMobile() && [-20, "!important"],
  },
}));

const styleBtn = makeStyles((theme) => ({
  btnStep: {
    transition: "all 0.3s",

    marginBottom: 15,
    borderRight: `2px solid #f2f2f2`,
    borderBottom: `2px solid #f2f2f2`,
    backgroundColor: ({ data }) => [data.color, "!important"],
    borderRadius: "25%!important",
    height: isMobile() ? "12vw" : "9vh",
    width: isMobile() ? "12vw" : "9vh",
    marginLeft: isMobile() ? "1.6vw" : "3vw",

    fontSize: isMobile() ? sizeLetter.cellExtraBig : sizeLetter.extraBig,
    color: ({ data, i }) => (i === 6 ? colores.mainPurple : "#f2f2f2"),
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: ({ data, i, activeStep }) =>
      i === activeStep
        ? "drop-shadow(-1px -1px 1px #fff)"
        : "drop-shadow(-1px -1px 1px #fff)",
  },
}));

export default VerticalTabs;
