import { makeStyles } from "@mui/styles";
import { useContext, useEffect } from "react";
import GameCard from "../components/cardGame";
import { AppContext } from "../context/appContext";
import logoM from "../assets/logoMicaela.png";
import { isMobile } from "../styles/isMobile";

import fondoVertical from "../assets/tarjGameV.png";
import fondoHorizontal from "../assets/tarjGameH.png";

const Home = () => {
  const { reStart } = useContext(AppContext);
  const classes = useStyles();

  useEffect(() => {}, []);

  useEffect(() => {
    reStart();
  }, []);

  return (
    <div className={classes.divContainer}>
      {CardData.map((obj, i) => (
        <GameCard
          cardData={obj}
          i={i}
          images={[fondoVertical, fondoHorizontal]}
          key={i}
        />
      ))}
    </div>
  );
};

const CardData = [
  {
    link: "JuegoUno",
    title: "Mitos del Amor Romántico",
    txt: "En este juego se toman como punto de partida frases del sentido común que escuchamos en diferentes contextos para poder vincularlas a diferentes mitos",
  },
  {
    link: "JuegoDos",
    title: "Cerebros Sobrecargados",
    txt: "Contesta por SÍ o por NO éste cuestionario y al final del mismo sabrás cuánto espacio tenés en tu cabeza para dedicarle a nuevos proyectos, sueños, ocio y disfrute del tiempo libre.",
  },
  {
    link: "JuegoTres",
    title: "LA DIVERSIDAD EN JUEGO",
    txt: "aqui va la descripcion del juego",
  },
];

const useStyles = makeStyles(() => ({
  bigDiv: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  divLogo: {
    height: "25%",
    zIndex: 100,
  },
  imgLogo: {
    height: "40vh",
    width: "40vh",
    marginTop: "-5vh",
    filter: "drop-shadow(5px 5px 5px #222)",
  },
  divContainer: {
    textAlign: "center",
    marginTop: isMobile() ? "18vh" : "5vh",
    display: "flex",
    flexDirection: isMobile() ? "column" : "row",
    justifyContent: "space-around",
    zIndex: 100,
    width: "100%",
    overflow: "hidden",
  },
}));

export default Home;
