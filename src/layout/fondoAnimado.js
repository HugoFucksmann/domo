import curvaVioleta from "../assets/fondoAnimado/curvaVioleta.svg";
import lineaClara from "../assets/fondoAnimado/lineaClara.svg";
import logo from "../assets/fondoAnimado/logo.svg";
import lineaRoja from "../assets/fondoAnimado/lineaRoja.svg";
import curvaVioleta2 from "../assets/fondoAnimado/image.png";

import { useContext } from "react";
import { AppContext } from "../context/appContext";
import { Fade } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { isMobile } from "./../styles/isMobile";
const FondoAnimado = () => {
  const { ruta } = useContext(AppContext);

  const loop = useSpring({
    loop: true,
    config: { duration: 4000 },
    to: [{ transform: "translateY(6vh)" }, { transform: "translateY(0vh)" }],
    from: { transform: "translateY(0vh)" },
  });

  const loop2 = useSpring({
    loop: true,
    config: { duration: 3000 },
    to: [{ transform: "translateY(6vh)" }, { transform: "translateY(0vh)" }],
    from: { transform: "translateY(0vh)" },
  });

  const lineaClaraSpring = useSpring({
    loop: true,
    config: { duration: 3000 },
    to: [
      { transform: "translateY(5vh) scale(1.2)" },
      { transform: "translateY(0vh) scale(1)" },
    ],
    from: { transform: "translateY(0vh) scale(1)" },
  });

  const lineaRojaSpring = useSpring({
    loop: true,
    config: { duration: 2500 },
    to: [
      { transform: "translateY(4vh) scale(1.2)" },
      { transform: "translateY(0vh) scale(1)" },
    ],
    from: { transform: "translateY(0vh) scale(1)" },
  });

  const springLogo = useSpring({
    loop: true,
    config: { duration: 2600 },
    to: [{ transform: "scale(1.1)" }, { transform: "scale(1)" }],
    from: { transform: "scale(1)" },
  });

  if (!isMobile()) {
   
    return (
      <>
        {ruta === "home" && (
          <Fade in={true} timeout={650}>
            <img
              src={logo}
              alt="juegos micaela"
              style={{
                position: "absolute",
                top: 10,
                width: "24vh",
              }}
            />
          </Fade>
        )}
      </>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#90769F",
        position: "absolute",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        zIndex: -10,
      }}
    >
      {ruta === "home" && (
        <animated.div
          style={{
            position: "absolute",
            zIndex: 1,
            width: isMobile() ? "34vw" : "22vh",
            filter: `drop-shadow(2px 2px 3px #000)`,
            left: isMobile() ? "34vw" : "45%",
            right: null,
            top: isMobile() ? "10vh" : "3vh",
            bottom: null,
            ...springLogo,
          }}
        >
          <Fade in={true} timeout={500}>
            <img alt="logom" src={logo} height="100%" width="100%" />
          </Fade>
        </animated.div>
      )}

      <animated.div
        style={{
          position: "absolute",

          filter: `drop-shadow(4px 4px 4px #000)`,
          left: 0,
          right: 0,

          bottom: isMobile() ? "-30vh" : "-26vh",
          ...loop,
        }}
      >
        <img
          alt="curvaVioleta"
          src={curvaVioleta}
          height="100%"
          width={isMobile() ? "540%" : "110%"}
        />
      </animated.div>
      {isMobile() === false ? (
        <>
          <animated.div
            style={{
              position: "absolute",

              width: "106%",

              left: 0,
              right: 250,

              bottom: "20vh",
              ...lineaClaraSpring,
            }}
          >
            <img alt="lineaClara" src={lineaClara} height="100%" width="120%" />
          </animated.div>
          <animated.div
            style={{
              position: "absolute",
              width: "104%",
              left: "-2%",
              bottom: "24vh",

              ...lineaRojaSpring,
            }}
          >
            <img alt="lineaRoja" src={lineaRoja} height="100%" width="120%" />
          </animated.div>
        </>
      ) : (
        <animated.div
          style={{
            position: "absolute",

            filter: `drop-shadow(4px 4px 4px #000)`,
            left: 0,
            right: 0,
            zIndex: -1,
            bottom: "-10vh",
            ...loop2,
          }}
        >
          <img
            alt="curvaVioleta"
            src={curvaVioleta2}
            height="100%"
            width={isMobile() ? "540%" : "110%"}
          />
        </animated.div>
      )}
    </div>
  );
};

export default FondoAnimado;
