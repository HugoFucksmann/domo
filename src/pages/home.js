import { Card, Zoom } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useEffect } from "react";
import GameCard from "../components/cardGame";
import { AppContext } from "../context/appContext";
import logoM from "../assets/logoMicaela.png";
const windowWidth = window.screen.width;
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
        {["juego-1", "juego-2", "juego-3"].map((value, i) => (
          <GameCard key={i} cardData={value} i={i} />
        ))}
      </div>
    </div>
  );
};

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
  imgLogo: { height: "35vh", width: "35vh", marginTop: -40 },
  divContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",

    width: "100%",
    height: "75%",
  },
}));

export default Home;
