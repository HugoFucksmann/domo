import "../styles/backgroundFall.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./../context/appContext";
import { isMobile } from "../styles/isMobile";
import fondo from "../assets/fondoconlogo.svg";
import fondoSinLogo from "../assets/fondosinlogo.svg";

const BodyLayout = (props) => {
  const { ruta } = useContext(AppContext);

  useEffect(() => {
    let imageList = [fondoSinLogo, fondo];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          ruta !== "home" ? `url(${fondoSinLogo})` : `url(${fondo})`,
        //backgroundColor: "purple",
        backgroundSize: "cover",

        backgroundPosition: "center center",
        paddingRight: isMobile() ? "4%" : "10%",
        paddingLeft: isMobile() ? "4%" : "10%",
        minHeight: "100vh",
        overflow: "hidden!important",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {props.children}
    </div>
  );
};

export default BodyLayout;
