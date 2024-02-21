import React, { useContext } from "react";
import SpeedDialComp from "../../components/speedDialComp";
import { AppContext } from "../../context/appContext";
import FormStart from "./form";
import Game2 from "./game2";
import { isMobile } from "../../styles/isMobile";

const JuegoDos = React.memo(() => {
  const { startG } = useContext(AppContext);

  return (
    <>
      {!startG ? (
        <FormStart />
      ) : (
        <div
          style={{
            width: "100%",
            marginTop: isMobile() ? "60%" : -50,
          }}
        >
          <Game2 />
        </div>
      )}
      <SpeedDialComp />
    </>
  );
});

export default JuegoDos;
