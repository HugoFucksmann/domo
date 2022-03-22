import fondo from "../assets/fondo2.jpg";
import logoM from "../assets/logosvg.svg";
const windowWidth = window.screen.width;
const BodyLayout = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${fondo}) `,
        //overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: windowWidth < 600 ? "4%" : "10%",
        paddingLeft: windowWidth < 600 ? "4%" : "10%",
        paddingTop: windowWidth < 600 && 20,
        paddingBottom: windowWidth < 600 && 20,
      }}
    >
      {props.children}
    </div>
  );
};

export default BodyLayout;
