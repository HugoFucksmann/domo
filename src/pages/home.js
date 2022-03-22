import { makeStyles } from "@mui/styles";
import { useContext, useEffect } from "react";
import GameCard from "../components/cardGame";
import { AppContext } from "../context/appContext";
import logoM from "../assets/logoMicaela.png";

const Home = () => {
  const { reStart } = useContext(AppContext);
  const classes = useStyles();

  useEffect(() => {
    reStart();
  }, []);

  return (
    <div className={classes.bigDiv}>
      <div className={classes.divLogo}>
        <img src={logoM} className={classes.imgLogo} />
      </div>
      <div className={classes.divContainer}>
        {CardData.map((value, i) => (
          <GameCard key={i} cardData={value} i={i} />
        ))}
      </div>
    </div>
  );
};

const CardData = [
  {
    link: "juego-1",
    title: "este es el titulo",
    txt: "esta es una descripcion del juego",
  },
  {
    link: "juego-2",
    title: "este es el titulo",
    txt: "esta es una descripcion del juego",
  },
  {
    link: "juego-3",
    title: "este es el titulo",
    txt: "esta es una descripcion del juego",
  },
];

const useStyles = makeStyles(() => ({
  bigDiv: {
    height: "100vh",
    width: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  divLogo: {
    height: "25%",
  },
  imgLogo: {
    height: "40vh",
    width: "40vh",
    marginTop: "-5vh",
  },
  divContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",

    width: "100%",
    height: "75%",
  },
}));

export default Home;
