import { makeStyles } from "@mui/styles";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";
import colores from "../../styles/colors";
import "../../styles/shakeeff.css";

import cerebroPng from "../../assets/cerebro-04.svg";

const isFirefox = typeof InstallTrigger !== "undefined";
const CardBrain = () => {
  const { dataJuegoDos, activeStep, score, showEff } = useContext(AppContext);
  const classes = useStyles({
    score,
    dataJuegoDos,
    activeStep,
  });

  useEffect(() => {
    let imageList = [cerebroPng];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  return (
    <div
      className={`${classes.brainContainer} ${
        showEff === false ? "shake" : ""
      }`}
    >
      <div className={[classes.innerDiv]}>
        <div
          className={
            isFirefox ? classes.brainFondoColorFirefox : classes.brainFondoColor
          }
        />
      </div>
      <div className={classes.brainImg} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  brainContainer: {
    position: "absolute",
    display: "table",
    margin: "auto auto",
    borderRadius: "50%",
    top: "26%",
    width: 240,
    height: 240,
    [theme.breakpoints.down("sm")]: {
      top: "20%",
      width: 240,
      height: 240,
    },
    [theme.breakpoints.up("md")]: {
      top: "26%",
      width: 300,
      height: 300,
    },

    [theme.breakpoints.up("lg")]: {
      top: "26%",
      width: 420,
      height: 420,
    },
    [theme.breakpoints.up("xl")]: {
      top: "26%",
      width: 500,
      height: 500,
    },
  },
  innerDiv: {
    position: "absolute",
    top: 0,
    display: "table",
    margin: " 0 auto",
    borderRadius: "50%",
    backgroundColor: "#fff",
    minHeight: 0,
    minWidth: 0,
    flex: "1 1 0",
    overflow: ["hidden", "!important"],
    "-moz-overflow": "hidden!important",
    marginTop: 20,
    marginLeft: 45,
    width: 175,
    height: 180,

    [theme.breakpoints.down("sm")]: {
      marginLeft: 45,
      width: 175,
      height: 180,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 60,
      width: 215,
      height: 235,
    },

    [theme.breakpoints.up("lg")]: {
      width: "70%",
      marginLeft: "20%",
      height: "80%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "69%",
      marginTop: "5%",
      marginLeft: "21%",
      height: "80%",
    },
  },
  brainImg: {
    position: "absolute",
    top: "40%",
    left: "50%",
    margin: "-40% 0 0 -40%",
    filter: "drop-shadow(2px 2px 3px #222)",
    height: "90%",
    width: "90%",
    borderRadius: "50%",
    background: `url(${cerebroPng})`,
    backgroundSize: "100% 100%",
  },
  brainFondoColor: {
    position: "absolute",

    height: "100%",
    width: "100%",
    transform: ({ score }) => `translateY(${100 - score * 10}%)`,
    transition: "all 0.5s ease",
    backgroundColor: colores.mainPink,
  },
  brainFondoColorFirefox: {
    position: "absolute",
    bottom: 0,
    height: ({ score }) => `${score * 10}%`,
    width: "100%",
    transition: "all 0.5s ease",
    backgroundColor: colores.mainPink,
    [theme.breakpoints.up("xl")]: {
      clipPath: ({ score }) =>
        score === 10
          ? `polygon(90px 0%, calc(100% - 90px) 0%, 100% 125px, 100% calc(100% - 100px), calc(100% - 100px) 100%, 100px 100%, 0% calc(100% - 100px), 0% 125px)`
          : score === 9
          ? `polygon(70px 0%, calc(100% - 70px) 0%, 100% 100px, 100% calc(100% - 100px), calc(100% - 100px) 100%, 100px 100%, 0% calc(100% - 100px), 0% 100px)`
          : score === 8
          ? `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% calc(100% - 100px), calc(100% - 100px) 100%, 100px 100%, 0% calc(100% - 100px), 0% 50px)`
          : `polygon(0px 0%, calc(100% - 0px) 0%, 100% 10px, 100% calc(100% - 100px), calc(100% - 100px) 100%, 100px 100%, 0% calc(100% - 100px), 0% 10px)`,
    },

    //borderRadius: '50%',
    // clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);
    //marginLeft: ({ score }) => (score === 1 ? "0%" : score === 2 ? "0%" : "0%"),
    //transform: ({ score }) => `translateY(${100 - score * 10}%)`,

    //zIndex: 999,
  },
}));

export default CardBrain;
