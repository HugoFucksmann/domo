import { Button, Card, Zoom } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import colores from "../styles/colors";
import sizeLetter from "../styles/fontSize";
import TypographyStyled from "./typografyStyled";
import { isMobile } from "../styles/isMobile";

import qrLink from "../assets/qr_glosario.png";
import corazones from "../assets/iconCard/corazones.svg";
import caraCorazones from "../assets/iconCard/caraCorazones.svg";

const url = "https://www.santafe.gob.ar/juegosmicaela/qr_glosario.pdf";

const FinalCard = ({ msjf }) => {
  const { reStart, handleMsjFinalCerebro, setRuta } = useContext(AppContext);
  const classes = useStyle({ msjf });

  let isGame3 = false;
  let isGame1 = false;

  if (msjf && msjf.startsWith("Las palabras que usamos")) isGame3 = true;
  if (msjf && msjf.startsWith("Desmitificar el amor")) isGame1 = true;

  return (
    <Zoom in={true}>
      <Card elevation={3} className={classes.resultScr}>
        {isGame1 && <BorderIcons />}
        {!msjf && (
          <TypographyStyled
            style={{
              fontSize: isMobile() ? sizeLetter.cellBig : sizeLetter.big,
              fontWeight: 800,
              color: colores.mainPurple,
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: handleMsjFinalCerebro().txtT,
              }}
            />
            <br />
          </TypographyStyled>
        )}

        <TypographyStyled
          style={{
            fontSize: isMobile() ? sizeLetter.cellNormal : sizeLetter.normals,

            color: colores.txtSecond2,
          }}
        >
          {!msjf && (
            <div
              dangerouslySetInnerHTML={{ __html: handleMsjFinalCerebro().txt1 }}
            />
          )}
        </TypographyStyled>

        <TypographyStyled
          style={{
            fontSize: isMobile() ? sizeLetter.cellNormal : sizeLetter.normals,
            color: colores.txtSecond2,
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: !msjf ? handleMsjFinalCerebro().txt2 : msjf,
            }}
          />
        </TypographyStyled>
        <br />
        {isGame3 === true &&
          (isMobile() ? (
            <Button
              onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
              className={classes.btn}
              variant="contained"
            >
              <TypographyStyled
                style={{
                  fontWeight: "bold",
                  fontSize: isMobile()
                    ? sizeLetter.cellSmall
                    : sizeLetter.small,
                }}
              >
                Descargar Glosario !
              </TypographyStyled>
            </Button>
          ) : (
            <img
              alt="qrLink"
              src={qrLink}
              style={{
                height: "30vh",
                borderRadius: 5,

                filter: "drop-shadow(1px 1px 3px #000)",
              }}
            />
          ))}
        {isGame3 && <br />}
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
        <img alt="corazones" src={corazones} height="100%" width="100%" />
      </div>
      <div
        style={{
          right: 0,
          position: "absolute",
          height: isMobile() ? 40 : 100,
          width: isMobile() ? 40 : 100,
          margin: isMobile() ? -10 : -50,
          zIndex: 900,
          filter: `drop-shadow(1px 1px 3px ${colores.mainStrong})`,
        }}
      >
        <img
          alt="caraCorazones"
          src={caraCorazones}
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  resultScr: {
    position: "relative",
    minHeight: isMobile() ? 300 : 350,
    marginLeft: ({ msjf }) => !isMobile() && (msjf !== undefined ? "8%" : "8%"),
    marginRight: ({ msjf }) =>
      !isMobile() && (msjf !== undefined ? "18%" : "8%"),
    backgroundColor: colores.backgSoft + "!important",
    borderRadius: "15px!important",
    borderBottom: `8px solid ${colores.mainPurple}`,
    padding: isMobile() ? 20 : 50,
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
