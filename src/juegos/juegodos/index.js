import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import SpeedDialComp from "../../components/speedDialComp";
import { AppContext } from "../../context/appContext";
import FormStart from "./form";
import Game2 from "./game2";

const JuegoDos = () => {
  const classes = useStyles();
  const { startG } = useContext(AppContext);

  return (
    <>
      {!startG ? <FormStart /> : <Game2 />}
      <SpeedDialComp />
    </>
  );
};

const useStyles = makeStyles(() => ({
  select: {
    borderRadius: 10,
  },
  flipCard: {
    backgroundColor: "red",
  },
}));

export default JuegoDos;
