import { Button, Card, Zoom } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/appContext";
import colores from "../styles/colors";
import sizeLetter from "../styles/fontSize";
import TypographyStyled from "./typografyStyled";
import { isMobile } from "../styles/isMobile";

import qrLink from "../assets/qr_glosario.png";
import corazones from "../assets/iconCard/corazones.svg";
import caraCorazones from "../assets/iconCard/caraCorazones.svg";

const url = "https://www.santafe.gob.ar/juegosmicarla/qr_glosario.pdf";

const FinalCard = ({ msjf }) => {
  const { reStart, handleMsjFinalCerebro, setRuta } = useContext(AppContext);
  const classes = useStyle({ msjf });

  useEffect(() => {
    let imageList = [qrLink, corazones, caraCorazones];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  let isGame3 = false;
  let isGame1 = false;

  if (msjf && msjf.startsWith("Las palabras que usamos")) isGame3 = true;
  if (msjf && msjf.startsWith("Desmitificar el amor")) isGame1 = true;

  return (
    <Zoom in={true}>
      <Card elevation={3} className={classes.resultScr}>
        {isGame1 && <BorderIcons />}
        <TypographyStyled
          style={{
            fontSize: isMobile() ? sizeLetter.cellNormal : sizeLetter.normal,
            fontWeight: "bold",
            color: colores.mainPurple,
          }}
        >
          {!msjf && handleMsjFinalCerebro().txtT}
        </TypographyStyled>
        <br />
        <TypographyStyled
          style={{
            fontSize: isMobile() ? sizeLetter.cellNormal : sizeLetter.normal,
            fontWeight: "bold",
            color: colores.txtSecond2,
          }}
        >
          {!msjf && handleMsjFinalCerebro().txt1}
        </TypographyStyled>
        <br />
        <TypographyStyled
          style={{
            fontSize: isMobile() ? sizeLetter.cellNormal : sizeLetter.normal,
            color: colores.txtSecond2,
          }}
        >
          {!msjf ? handleMsjFinalCerebro().txt2 : msjf}
        </TypographyStyled>
        <br />
        {isGame3 === true &&
          (isMobile() ? (
            <Button
              onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
              className={classes.btn}
              variant="contained"
            >
              Descargar Glosario !
            </Button>
          ) : (
            <img
              src={qrLink}
              style={{
                height: "30vh",
                borderRadius: 5,

                filter: "drop-shadow(1px 1px 3px #000)",
              }}
            />
          ))}
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            variant="contained"
            className={classes.btn}
            onClick={() => reStart()}
          >
            <TypographyStyled
              style={{
                fontWeight: "bold",
                fontSize: isMobile() ? sizeLetter.cellSmall : sizeLetter.small,
              }}
            >
              Volver a Jugar!
            </TypographyStyled>
          </Button>
          <Button
            variant="contained"
            className={classes.btn}
            onClick={() => setRuta("home")}
          >
            <TypographyStyled
              style={{
                fontWeight: "bold",
                fontSize: isMobile() ? sizeLetter.cellSmall : sizeLetter.small,
              }}
            >
              Volver al inicio
            </TypographyStyled>
          </Button>
        </div>
      </Card>
    </Zoom>
  );
};

const BorderIcons = () => {
  return (
    <div
      style={{
        position: "absolute",

        height: 50,
        width: "100%",

        margin: isMobile() ? -30 : -50,
      }}
    >
      <div
        style={{
          position: "absolute",
          height: isMobile() ? 40 : 60,
          width: isMobile() ? 40 : 60,
          filter: `drop-shadow(1px 1px 1px ${colores.mainStrong})`,
          left: 0,
          margin: isMobile() ? -13 : -22,
        }}
      >
        <img src={corazones} height="100%" width="100%" />
      </div>
      <div
        style={{
          right: 0,
          position: "absolute",
          height: isMobile() ? 40 : 110,
          width: isMobile() ? 40 : 110,
          margin: isMobile() ? -10 : -50,
          zIndex: 900,
          filter: `drop-shadow(1px 1px 3px ${colores.mainStrong})`,
        }}
      >
        <img src={caraCorazones} height="100%" width="100%" />
      </div>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  resultScr: {
    position: "relative",
    minHeight: isMobile() ? 300 : 350,
    marginLeft: ({ msjf }) =>
      !isMobile() && (msjf !== undefined ? "18%" : "8%"),
    marginRight: ({ msjf }) =>
      !isMobile() && (msjf !== undefined ? "18%" : "8%"),
    backgroundColor: colores.backgSoft + "!important",
    borderRadius: "15px!important",
    borderBottom: `8px solid ${colores.mainPurple}`,
    padding: isMobile() ? 30 : 50,
    overflow: "visible!important",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: [colores.mainPurple, "!important"],
    marginRight: [20, "!important"],
    marginLeft: [20, "!important"],
  },
}));

export default FinalCard;
