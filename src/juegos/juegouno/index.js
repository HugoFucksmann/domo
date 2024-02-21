import React, { useContext } from "react";

import Game1 from "./game1";
import SpeedDialComp from "../../components/speedDialComp";
import ModalResult from "./modalResult";
import { AppContext } from "../../context/appContext";
import StartScreen from "../../components/startScreen";
import { introGame1 } from "../../context/dataJuegoMitos";

const JuegoUno = () => {
  const { startG, startGameOne } = useContext(AppContext);

  return (
    <>
      {!startG ? (
        <StartScreen intro={introGame1} startFunc={startGameOne} />
      ) : (
        <div>
          <Game1 />
        </div>
      )}

      <ModalResult />
      <SpeedDialComp />
    </>
  );
};

export default JuegoUno;
