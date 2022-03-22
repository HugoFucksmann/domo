import React from "react";
import { Card, Grid, Zoom } from "@mui/material";
import Game1 from "./game1";
import SpeedDialComp from "../../components/speedDialComp";
import ModalResult from "./modalResult";

const JuegoUno = () => {
  return (
    <>
      <Game1 />
      <ModalResult />
      <SpeedDialComp />
    </>
  );
};

export default JuegoUno;
