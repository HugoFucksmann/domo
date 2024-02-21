import "../styles/backgroundFall.css";
import { isMobile } from "../styles/isMobile";
import fondosinlogo from "../assets/fondosinlogo.svg";
import FondoAnimado from "../layout/fondoAnimado";

const BodyLayout = (props) => {
  return (
    <div
      style={{
        background: !isMobile() && `url(${fondosinlogo}) no-repeat `,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        paddingRight: isMobile() ? "4%" : "10%",
        paddingLeft: isMobile() ? "4%" : "10%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {props.children}
      {<FondoAnimado />}
    </div>
  );
};

export default BodyLayout;
