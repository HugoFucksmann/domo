import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import colores from "../../styles/colors";
import "../../styles/shakeeff.css";

import cerebroPng from "../../assets/cerebro-04.svg";

//const isFirefox = typeof InstallTrigger !== "undefined";
const CardBrain = () => {
  const { dataJuegoDos, activeStep, score, showEff } = useContext(AppContext);
  const classes = useStyles({
    score,
    dataJuegoDos,
    activeStep,
  });

  return (
    <div
      className={`${classes.brainContainer} ${
        showEff === false ? "shake" : ""
      }`}
    >
      <div className={[classes.innerDiv]}>
        <div className={classes.brainFondoColorFirefox} />
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
      top: "16%",
      width: 280,
      height: 280,
    },
    [theme.breakpoints.up("md")]: {
      top: "26%",
      width: 300,
      height: 300,
    },

    [theme.breakpoints.up("lg")]: {
      top: "22%",
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
    //zIndex: 999,
    top: 2,
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
    width: "69%",
    height: "80%",

    [theme.breakpoints.down("sm")]: {
      marginLeft: 54,
      width: 200,
      height: 218,
    },
    [theme.breakpoints.up("md")]: {
      width: "69%",
      marginLeft: "21%",
      height: "76%",
    },

    [theme.breakpoints.up("lg")]: {
      width: "70%",
      marginLeft: "20%",
      height: "79%",
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
    willChange: "transform",
    height: "100%",
    width: "100%",
    transform: ({ score }) => `translateY(${100 - score * 10}%)`,
    transition: "all 0.5s ease",
    backgroundColor: colores.mainPink,
  },
  brainFondoColorFirefox: {
    position: "absolute",
    willChange: "auto",
    bottom: -1,
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
    [theme.breakpoints.up("lg")]: {
      width: "100%!important",
      marginLeft: [0, "!important"],
      clipPath: ({ score }) =>
        score === 10
          ? `polygon(90px 0%, calc(100% - 90px) 0%, 100% 125px, 100% calc(100% - 86px), calc(100% - 100px) 100%, 100px 100%, 0% calc(100% - 86px), 0% 125px)`
          : score === 9
          ? `polygon(70px 0%, calc(100% - 70px) 0%, 100% 100px, 100% calc(100% - 86px), calc(100% - 100px) 100%, 100px 100%, 0% calc(100% - 86px), 0% 100px)`
          : score === 8
          ? `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% calc(100% - 86px), calc(100% - 100px) 100%, 100px 100%, 0% calc(100% - 86px), 0% 50px)`
          : `polygon(0px 0%, calc(100% - 0px) 0%, 100% 10px, 100% calc(100% - 84px), calc(100% - 100px) 100%, 100px 100%, 0% calc(100% - 84px), 0% 10px)`,
    },

    [theme.breakpoints.up("xs")]: {
      width: ({ score }) =>
        score === 1
          ? "60%"
          : score < 3
          ? "78%"
          : score === 3
          ? "89%"
          : score < 9
          ? "94%"
          : "96%",
      marginLeft: ({ score }) =>
        score === 1
          ? "20%"
          : score < 3
          ? "10%"
          : score === 3
          ? "5%"
          : score < 9
          ? "3%" //
          : "1%",

      borderRadius: ({ score }) =>
        score < 9
          ? "0 0% 70% 70%"
          : score === 10
          ? "44% 44% 40% 40%"
          : "42% 38% 71% 78%",
    },
  },
}));

export default CardBrain;
